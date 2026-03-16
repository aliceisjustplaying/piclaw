'use strict';

var zetajs, css, context, desktop;

Module.zetajs.then(function(pZetajs) {
  zetajs = pZetajs;
  css = zetajs.uno.com.sun.star;
  console.log('[office_thread] zetajs ready');

  context = zetajs.getUnoComponentContext();
  desktop = css.frame.Desktop.create(context);
  console.log('[office_thread] desktop created');

  zetajs.mainPort.onmessage = function(e) {
    if (e.data.cmd === 'open') {
      var filename = e.data.filename;
      console.log('[office_thread] opening: ' + filename);
      try {
        var url = 'file:///tmp/doc/' + filename;
        var xModel = desktop.loadComponentFromURL(url, '_default', 0, []);
        console.log('[office_thread] model loaded OK');
        var ctrl = xModel.getCurrentController();
        var frame = ctrl.getFrame();
        var win = frame.getContainerWindow();

        // 1. FullScreen — removes Qt window decorations, fills canvas
        win.FullScreen = true;
        console.log('[office_thread] fullscreen OK');

        // 2. Hide menubar via LayoutManager
        try {
          var lm = frame.LayoutManager;
          console.log('[office_thread] LayoutManager type: ' + typeof lm);
          lm.hideElement('private:resource/menubar/menubar');
          console.log('[office_thread] menubar hidden');
        } catch(e2) {
          console.log('[office_thread] menubar hide failed: ' + e2);
        }

        // 3. Hide all toolbar elements
        try {
          var lm = frame.LayoutManager;
          var elements = lm.getElements();
          console.log('[office_thread] layout elements count: ' + elements.length);
          for (var i = 0; i < elements.length; i++) {
            var resUrl = elements[i].ResourceURL;
            console.log('[office_thread]   element: ' + resUrl + ' visible=' + lm.isElementVisible(resUrl));
            if (lm.isElementVisible(resUrl)) {
              lm.hideElement(resUrl);
            }
          }
          console.log('[office_thread] all elements hidden');
        } catch(e3) {
          console.log('[office_thread] hide elements failed: ' + e3);
        }

        // 4. Hide sidebar (toggle off)
        try {
          var ioparam = {val: new css.util.URL({Complete: '.uno:Sidebar'})};
          css.util.URLTransformer.create(context).parseStrict(ioparam);
          var urlObj = ioparam.val;
          ctrl.queryDispatch(urlObj, '_self', 0).dispatch(urlObj, []);
          console.log('[office_thread] sidebar toggled');
        } catch(e4) {
          console.log('[office_thread] sidebar: ' + e4);
        }

      } catch(e5) {
        console.error('[office_thread] open failed: ' + e5);
      }
      zetajs.mainPort.postMessage({cmd: 'ui_ready'});
    }
  };
  zetajs.mainPort.postMessage({cmd: 'ready'});
});

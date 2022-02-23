    require([
      "esri/WebScene",
      "esri/views/SceneView",
      "esri/Camera",
      "esri/widgets/Home",
      "dojo/domReady!"
    ], function(WebScene, SceneView, Camera, Home) {

    
      /*var map = new Map({
        basemap: "streets",
        ground: "world-elevation"
      });*/
      var scene = new WebScene({
        portalItem:{
         id:"19dcff93eeb64f208d09d328656dd492" 
        }
      });
      
      var camera = new Camera({
        position: [
          -122.67904, // lon
          45.539127, // lat
          500// elevation in meters
        ],
        tilt:50,
        heading: 210
      });

      var view = new SceneView({
        container: "viewDiv",
        map: scene,
        viewingMode:"global",
        camera: camera,
        environment: {
            lighting: {
              date: new Date(),
              directShadowsEnabled: true,
              // don't update the view time when user pans.
              // The clock widget drives the time
              cameraTrackingEnabled: false
            }
        },
    });
    
    var homeBtn = new Home({
        view: view
      });

      // Add the home button to the top left corner of the view
    view.ui.add(homeBtn, "top-left");
    
    [bei, los, stl, mex].forEach(function(button) {
      button.style.display = '.esri-button';
      view.ui.add(button, 'bottom-right');
    });
    
    bei.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        position: {
          x: -122.6856,
          y: 45.5427,
          z: 300
        },
        tilt: 70,
        heading: 170
      });
    });
      
     los.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        position: {
          x: -122.685,
          y: 45.542,
          z: 100
        },
        tilt: 80,
        heading: 170
      });
    });
      
           mex.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        position: {
          x: -122.6845259,
          y: 45.532964520,
          z: 1500
        },
        tilt: 0,
        heading: 0
      });
    });
    
      
    stl.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        target:camera
      });
    });


    });

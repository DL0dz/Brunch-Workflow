exports.config = {
    "files": {

        "stylesheets": {
            "joinTo": "css/app.min.css"
        },
        "javascripts": {
            "joinTo": "js/app.min.js"
        },
        "templates": {
            "joinTo": "js/app.min.js"
        }
    },
    "plugins": {
      "sass": {
          "allowCache": true
      }
    },
    "modules": {
        "wrapper": false,
        "definition": false
    }
}

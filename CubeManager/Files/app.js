 var APP = APP || {}
 APP.constants = {}
 APP.keys = {}
 APP.eventKets = {}

 APP.cubeType = {}

 APP.options = {
    load: function(){},
    save: function(){},
    reset: function(){}
}

 function log(logText, logObject)
    {
        console.log(logText);
    }

// APP.common = {
//     log:
// }

APP.event = {
    addListener: function(element, type, func) {
        element.addEventListener(type, func, false);
    },
    removeListener: function(element, type, func) {
        element.removeEventListener(type, func, false);
    },
    fireEvent: function(element, type) {
//var event = new CustomEvent('build', { 'detail': elem.dataset.time });
var event = new Event(type);
element.dispatchEvent(event);
},
}

APP.storage = {
    getItem: function(key, defaultItem){
        return window.localStorage.getItem(key) ? window.localStorage.getItem(key) : defaultItem;
    },
    setItem: function(key, item){
        return window.localStorage.setItem(key,item);
    },
    removeItem: function(key){
        window.localStorage.removeItem(key);
    },
    clear: function(){
        window.localStorage.clear();
    }
}

    ///CUSTOM
    
    // APP.constants.

    APP.keys.CUBE_TIERS = 'myapp.cubeTiersKey';
    APP.keys.CUBE_TYPES = 'myapp.cubeTypeKey';
    APP.keys.SEPERATE = 'myapp.seperateKey';

    APP.options = {
        cubeTiers: undefined,
        cubeTypes: undefined,
        shouldSeperate: undefined,
        load: function(){
            this.cubeTiers = APP.storage.getItem(APP.keys.CUBE_TIERS, new Array());
            this.cubeTypes = APP.storage.getItem(APP.keys.CUBE_TYPES, new Array());
            this.shouldSeperate = APP.storage.getItem( APP.keys.SEPERATE, false);
            log(this);
        },
        save: function(){
            APP.storage.setItem(APP.keys.CUBE_TIERS, this.cubeTiers);
            APP.storage.setItem(APP.keys.CUBE_TYPES, this.cubeTypes);
            APP.storage.setItem( APP.keys.SEPERATE, this.shouldSeperate);
            log(this);
        },
        reset: function(){
            APP.storage.clear()
            log(this);
        },
        toggleOption: function(element, value){
        if(element.constructor === Array) //TODO: check if is opt prop
        {
            if(element.indexOf(value) > -1)
            {
                element.splice(element.indexOf(value), 1);
                this.save();
            }
            else
            {
                element.push(value);
                this.save();
            }
        }
        //TODO: throw error
    },
    }


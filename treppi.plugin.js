/**
 * @name TreppisAddons
 * @author treppi
 * @description 187
 * @version 0.0.1
 * @invite inviteCode
 * @authorId 697529112167972884
 * @authorLink https://twitter.com/treppi1
 * @website https://github.com/treppenhaus
 */

module.exports = class TreppisAddons {
    getName() {
        return "TreppisAddons";
    }

    getVersion() {
        return "0.0.1";
    }

    getAuthor() {
        return "treppi";
    }

    getDescription() {
        return "test";
    }

    start() {
        console.log("treppis addons loaded");
        const dispatcher = BdApi.findModuleByProps("dirtyDispatch");
        const {ActionTypes} = BdApi.findModuleByProps("ActionTypes", "API_HOST");

        // Add an event listener
        const handleDispatch = (msg) => {
            let content = msg.message.content;
            console.log(content);
        }
        dispatcher.subscribe(ActionTypes.MESSAGE_CREATE, handleDispatch);
        
    } 

    
    stop() {
        const dispatcher = BdApi.findModuleByProps("dirtyDispatch");
        const {ActionTypes} = BdApi.findModuleByProps("ActionTypes", "API_HOST");
        dispatcher.unsubscribe(ActionTypes.MESSAGE_CREATE, handleDispatch);
    } 

    //observer(changes) {} 
}
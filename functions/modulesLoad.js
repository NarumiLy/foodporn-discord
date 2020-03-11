const {readdir} = require("fs");

class Module {

    static getModules(commandsList) {

        readdir("./modules/", (err, files) => {

            if (err) return console.log(err.stack);

            const jsfile = files.filter(f => f.split(".").pop() === "js");

            if (jsfile.length <= 0) return console.log("0 js file.");

            jsfile.forEach((f) => {

                let loadedcmd = require(`../modules/${f}`);

                commandsList.set(loadedcmd.help.name, loadedcmd);

            });

            return commandsList;
        });
    }

    static getModulesHelp(cmdDesc) {

        readdir("./modules/", (err, files) => {

            if (err) return console.log(err.stack);

            const jsfile = files.filter(f => f.split(".").pop() === "js");

            if (jsfile.length <= 0) return console.log("0 js file.");

            jsfile.forEach((f) => {

                let loadedcmd = require(`../modules/${f}`);

                cmdDesc.set(loadedcmd.help.name, loadedcmd.help.description);

            });

            return cmdDesc;
        });
    }
}

module.exports = Module;

const clientId = ""; //Your clientID
const DiscordRPC = require("discord-rpc");
const RPC = new DiscordRPC.Client({ transport: "ipc" });

DiscordRPC.register(clientId);

async function setActivity() {
    if(!RPC) return;
    RPC.setActivity({
        details: ``,
        state: ``,
        startTimestamp: Date.now(),
        largeImageKey: ``,
        largeImageText: ``,
        smallImageKey: ``,
        smallImageText: ``,
        instance: false,
        buttons: [
            {
                label: ``, //First Button
                url: ``, //Url
            },
            {
                label: ``, //Second Button
                url: ``, //Url
            }
        ]
    });
};

RPC.on("ready", async () => {
    setActivity();

    setInterval(() => {
        setActivity();
    }, 15 * 1000);
});

RPC.login({ clientId }).catch(err => console.error(err))
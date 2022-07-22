async function displayErrorMessage(message, timed = true) {
    if (!($("#error-popup").length)) {
        let fakeJSX = `<div id="error-popup"><p>${message}</p></div>`;
        $("body").append(fakeJSX);
        let height = $(document).height();
        $("body").append(`<div id='block-screen-error' style="height:${height}px"></div>`);
        if (timed) {
            await sleep(2500);
            $("#error-popup").remove();
            $("#block-screen-error").remove();
        }
    }
}

async function displayNetworkPrompt() {
    if (!($("#status-popup").length)) {
        let fakeJSX = `<div id="status-popup">
                            <h2>Select a network to view registered markets.</h2>
                            <div>
                                <img onclick="changeNetwork(1)" src="./images/eth.png">
                                <img onclick="changeNetwork(137)" src="./images/polygon.png">
                                <img onclick="changeNetwork(10)" src="./images/optimism.png">
                                <img onclick="changeNetwork(42161)" src="./images/arbitrum.png">
                            </div>
                        </div>`;
        $("body").append(fakeJSX);
        let height = $(document).height();
        $("body").append(`<div id='block-screen-status' onclick='$("#status-popup").remove();$("#block-screen-status").remove()' style="height:${height}px"></div>`);
    }
}

const changeNetwork = async (chainID) => {
    let currentChain = await getChainId();
    if (currentChain == chainID) {
        await displayErrorMessage("Already on this network!")
    }
    else {
        let hexChainID = `0x${Number(chainID).toString(16)}`;
        if (chainID == 1) {
            window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: hexChainID }],
            });
        }
        else if (chainID == 137) {
            window.ethereum.request({
                method: "wallet_addEthereumChain",
                params: [{
                    chainId: hexChainID,
                    rpcUrls: ["https://rpc-mainnet.matic.network/"],
                    chainName: "Matic Mainnet",
                    nativeCurrency: {
                        name: "MATIC",
                        symbol: "MATIC",
                        decimals: 18
                    },
                    blockExplorerUrls: ["https://polygonscan.com/"]
                }]
            });
        }
        else if (chainID == 10) {
            window.ethereum.request({
                method: "wallet_addEthereumChain",
                params: [{
                    chainId: hexChainID,
                    rpcUrls: ["https://opt-mainnet.g.alchemy.com/v2/_s4UBmcf_Oa43v847RRY0740A7-NH6ic"],
                    chainName: "Optimism Mainnet (Alchemy)",
                    nativeCurrency: {
                        name: "Ether",
                        symbol: "ETH",
                        decimals: 18
                    },
                    blockExplorerUrls: ["https://optimistic.etherscan.io"]
                }]
            });
        }
        else if (chainID == 42161) {
            window.ethereum.request({
                method: "wallet_addEthereumChain",
                params: [{
                    chainId: hexChainID,
                    rpcUrls: ["https://arb1.arbitrum.io/rpc"],
                    chainName: "Arb1",
                    nativeCurrency: {
                        name: "Ether",
                        symbol: "ETH",
                        decimals: 18
                    },
                    blockExplorerUrls: ["https://arbiscan.io/"]
                }]
            });
        }
    }
}

const showTransactionResult = async (result) => {
    if (!($("#result-popup").length)) {
        let fakeJSX;
        if (result == 1) {
            fakeJSX = `<div id="result-popup">
            <div id="content">
             <p>Your purchase was successful! You can confirm by looking at the project's whitelist on the <a class="lookup-link clickable link" href="./lookup.html">LOOKUP⬈</a> page.</p>
            </div>
           </div>`;
        }
        else if (result == 0) {
            fakeJSX = `<div id="result-popup">
            <div id="content">
             <p>Something went wrong with your transaction. Check the Etherscan page for more information.</p>
            </div>
           </div>`;
        }
        $("body").append(fakeJSX);
        let height = $(document).height();
        $("body").append(`<div id='block-screen-result' style="height:${height}px" onclick="$('#result-popup').remove();$('#block-screen-result').remove()"></div>`);
    }
}


const revealUniswap = async () => {
    if ($("#uniswap-window").hasClass("hidden")) {
        $("#uniswap-window").removeClass("hidden");
        let height = $(document).height();
        $("body").append(`<div id='block-screen-uniswap' style="height:${height}px" onclick="$('#uniswap-window').addClass('hidden');$('#block-screen-uniswap').remove()"></div>`);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function showLive() {
    $('#past-collections').addClass('hidden');
    $('#live-collections').removeClass('hidden');
    if ($("#live-collections .partner-collection").length > 4) {
        $("#scroll-indicator").removeClass("hidden");
    }
    else {
        $("#scroll-indicator").addClass("hidden");
    }
    $("#live-button").addClass("active");
    $("#past-button").removeClass("active");
}

function showPast() {
    $('#live-collections').addClass('hidden');
    $('#past-collections').removeClass('hidden');
    if ($("#past-collections .partner-collection").length > 4) {
        $("#scroll-indicator").removeClass("hidden");
    }
    else {
        $("#scroll-indicator").addClass("hidden");
    }
    $("#past-button").addClass("active");
    $("#live-button").removeClass("active");
}

function showCreate() {
    $('#past-collections').addClass('hidden');
    $('#live-collections').removeClass('hidden');
    if ($("#live-collections .partner-collection").length > 4) {
        $("#scroll-indicator").removeClass("hidden");
    }
    else {
        $("#scroll-indicator").addClass("hidden");
    }
    $("#listing-select-div").addClass('hidden');
    $("#create-button").addClass("active");
    $("#modify-button").removeClass("active");
}

function showModify() {
    $('#live-collections').addClass('hidden');
    $('#past-collections').removeClass('hidden');
    if ($("#past-collections .partner-collection").length > 4) {
        $("#scroll-indicator").removeClass("hidden");
    }
    else {
        $("#scroll-indicator").addClass("hidden");
    }
    $("#listing-select-div").removeClass('hidden');
    $("#modify-button").addClass("active");
    $("#create-button").removeClass("active");
}

function toggleMenu() {
    const el = document.getElementById("mobile-nav-menu")
    el.classList.toggle('expanded')
    el.classList.toggle('collapsed')
}

function clearPendingTxs() {
    localStorage.removeItem("MartianMarketPendingTxs");
    pendingTransactions.clear();
    location.reload();
};

// ======= DISCORD UTILS ========

const identityMapperAddressMainnet = "0xaD48C81ac9CdcD4fE3e25B8493b2798eA5104e6f";
const identityMapperAddressPolygon = "0x88C6a2aDc73Aaf4A5E659d5f170480fcdc595532";
const identityMapperAddressOptimism = "0xDAB71bc8774Ef39010D1E6294F2105B040bEFf43";
const identityMapperAddressArbitrum = "0x9d00D9b009Ab80a18013675011c93796d89de6B4";
const identityMapperAddressTestnet = "0xffccE647DA8a266A8779875b9c68cb51DC236C80";
const identityMapperAbi = () => {
    return `[{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"addressToDiscord","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"addressToTwitter","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"discordTag_","type":"string"}],"name":"setDiscordIdentity","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"twitterTag_","type":"string"}],"name":"setTwitterIdentity","outputs":[],"stateMutability":"nonpayable","type":"function"}]`;
}

const providerID = new ethers.providers.Web3Provider(window.ethereum, "any");
const signerID = providerID.getSigner();

// Initiate Contracts
let identityMapper;
let identityMapperAddress;

const setIdentityMapper = async () => {
    let currentChain = await signerID.getChainId();
    if (currentChain == 1) {
        identityMapperAddress = identityMapperAddressMainnet;
    }
    else if (currentChain == 4) {
        identityMapperAddress = identityMapperAddressTestnet;
    }
    else if (currentChain == 10) {
        identityMapperAddress = identityMapperAddressOptimism;
    }
    else if (currentChain == 137) {
        identityMapperAddress = identityMapperAddressPolygon;
    }
    else if (currentChain == 42161) {
        identityMapperAddress = identityMapperAddressArbitrum;
    }
    identityMapper = new ethers.Contract(identityMapperAddress, identityMapperAbi(), signerID);
}

const promptForDiscord = async () => {
    if (!($("#discord-popup").length)) {
        let userAddress = await signer.getAddress();
        let currentDiscord = await identityMapper.addressToDiscord(userAddress);
        let discordString = currentDiscord ? currentDiscord : "None";
        let fakeJSX = `<div id="discord-popup">
                        <div id="content">
                         <p>Enter Discord User ID to associate with purchases.</p>
                         <p>Current: ${discordString}</p>
                         <br>
                         <input id="discord-name" type="text" spellcheck="false" value="" placeholder="user#1234">
                         <br>
                         <button class="button" onclick="setDiscord()"">SET DISCORD</button>
                        </div>
                       </div>`;
        $("body").append(fakeJSX);
        let height = $(document).height();
        $("body").append(`<div id='block-screen-discord' style="height:${height}px" onclick="$('#discord-popup').remove();$('#block-screen-discord').remove()"></div>`);
    }
}

const setDiscord = async () => {
    try {
        let name = $("#discord-name").val();
        console.log(name)
        if (name == "") {
            await displayErrorMessage(`Error: No User ID provided!`);

        }
        else if (!(name.includes("#"))) {
            await displayErrorMessage(`Error: Must include "#" and numbers in ID!`);
        }
        else {
            await identityMapper.setDiscordIdentity(name).then(async (tx_) => {
                await waitForTransaction(tx_);
                $("#set-discord-button").html(`Setting<span class="one">.</span><span class="two">.</span><span class="three">.</span>`)
                $('#discord-popup').remove();
                $('#block-screen-discord').remove();
            });
        }
    }
    catch (error) {
        if ((error.message).includes("User denied transaction signature")) {
            console.log("Transaction rejected.");
        }
        else {
            await displayErrorMessage("An error occurred. See console and window alert for details...")
            window.alert(error);
            console.log(error);
        }
    }
}

var tries = 0;
var discordSet = false;

const updateDiscord = async () => {
    if (!discordSet) {
        let userAddress = await getAddress();
        let currentDiscord = await identityMapper.addressToDiscord(userAddress);
        if (currentDiscord) {
            discordSet = true
            $("#set-discord").addClass("hidden");
            $("#discord-text").text("SET!");
            $("#discord").addClass("success");
            $("#discord").removeClass("failure");
            $("#discord-text-mobile").text("SET!");
            $("#discord-mobile").addClass("success");
            $("#discord-mobile").removeClass("failure");
        }
        else {
            $("#set-discord").removeClass("hidden");
            $("#discord-text").text("NOT SET!");
            $("#discord").addClass("failure");
            $("#discord").removeClass("success");
            $("#discord-text-mobile").text("NOT SET!");
            $("#discord-mobile").addClass("failure");
            $("#discord-mobile").removeClass("success");
        }
        if ($("#approval").hasClass("hidden") && $("#set-discord").hasClass("hidden")) {
            $("#onboarding-alert").addClass("hidden");
        }
        else {
            $("#onboarding-alert").removeClass("hidden");
        }
    }
}

var timeout = 100;

setInterval(async () => {
    await setIdentityMapper();
    await updateDiscord();
    timeout = 5000;
}, timeout)
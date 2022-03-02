/*********************************************************************************/
/********************************PRODUCTION CONFIG********************************/
/*********************************************************************************/

// const baseTokenAbi = () => { 
//     return `[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"burnByController","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"to_","type":"address[]"},{"internalType":"uint256[]","name":"amounts_","type":"uint256[]"}],"name":"multiTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"from_","type":"address[]"},{"internalType":"address[]","name":"to_","type":"address[]"},{"internalType":"uint256[]","name":"amounts_","type":"uint256[]"}],"name":"multiTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from_","type":"address"},{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]`;
// };

// const marketAddress = "";
// const marketAbi = () => { 
//     return ``;
// };

// const etherscanBase = `https://etherscan.io/tx/`;
// const correctChain = 1;
// const tokenImgURL = "https://github.com/saintmaxi/mtmtest/blob/main/images/mes.png?raw=true";

/*********************************************************************************/
/***********************************DEV CONFIG************************************/
/*********************************************************************************/

const baseTokenAbi = () => { 
    return `[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"burnByController","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"to_","type":"address[]"},{"internalType":"uint256[]","name":"amounts_","type":"uint256[]"}],"name":"multiTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"from_","type":"address[]"},{"internalType":"address[]","name":"to_","type":"address[]"},{"internalType":"uint256[]","name":"amounts_","type":"uint256[]"}],"name":"multiTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from_","type":"address"},{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]`;
};

const marketAddress = "0x6B0fD2A09049CC66FCcF3362e57033332c19A450";
const marketAbi = () => { 
    return `[ { "inputs": [ { "internalType": "address", "name": "contract_", "type": "address" }, { "internalType": "string", "name": "datauri_", "type": "string" }, { "internalType": "uint32", "name": "amountAvailable_", "type": "uint32" }, { "internalType": "uint256", "name": "price_", "type": "uint256" } ], "name": "addWLVendingItem", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "contract_", "type": "address" } ], "name": "deleteMostRecentWLVendingItem", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "contract_", "type": "address" }, { "internalType": "address", "name": "operator_", "type": "address" }, { "internalType": "bool", "name": "bool_", "type": "bool" } ], "name": "manageController", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "contract_", "type": "address" }, { "internalType": "uint256", "name": "index_", "type": "uint256" }, { "internalType": "string", "name": "datauri_", "type": "string" }, { "internalType": "uint32", "name": "amountAvailable_", "type": "uint32" }, { "internalType": "uint256", "name": "price_", "type": "uint256" } ], "name": "modifyWLVendingItem", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "contract_", "type": "address" }, { "indexed": false, "internalType": "address", "name": "operator_", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "bool_", "type": "bool" } ], "name": "OperatorManaged", "type": "event" }, { "inputs": [ { "internalType": "address", "name": "contract_", "type": "address" }, { "internalType": "uint256", "name": "index_", "type": "uint256" } ], "name": "purchaseWLVendingItem", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "contract_", "type": "address" }, { "internalType": "address", "name": "treasury_", "type": "address" } ], "name": "setTreasuryAddress", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "contract_", "type": "address" }, { "indexed": false, "internalType": "address", "name": "treasury_", "type": "address" } ], "name": "TreasuryManaged", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "contract_", "type": "address" }, { "indexed": false, "internalType": "string", "name": "datauri_", "type": "string" }, { "indexed": false, "internalType": "uint32", "name": "amountAvailable_", "type": "uint32" }, { "indexed": false, "internalType": "uint256", "name": "price_", "type": "uint256" } ], "name": "WLVendingItemAdded", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "contract_", "type": "address" }, { "indexed": false, "internalType": "string", "name": "datauri_", "type": "string" }, { "indexed": false, "internalType": "uint32", "name": "amountAvailable_", "type": "uint32" }, { "indexed": false, "internalType": "uint32", "name": "amountPurchased_", "type": "uint32" }, { "indexed": false, "internalType": "uint256", "name": "price_", "type": "uint256" } ], "name": "WLVendingItemModified", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "contract_", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "index_", "type": "uint256" }, { "indexed": false, "internalType": "address", "name": "buyer_", "type": "address" }, { "components": [ { "internalType": "string", "name": "datauri", "type": "string" }, { "internalType": "uint32", "name": "amountAvailable", "type": "uint32" }, { "internalType": "uint32", "name": "amountPurchased", "type": "uint32" }, { "internalType": "uint256", "name": "price", "type": "uint256" } ], "indexed": false, "internalType": "struct MESWLVendor.WLVendingItem", "name": "item_", "type": "tuple" } ], "name": "WLVendingItemPurchased", "type": "event" }, { "anonymous": false, "inputs": [ { "components": [ { "internalType": "string", "name": "datauri", "type": "string" }, { "internalType": "uint32", "name": "amountAvailable", "type": "uint32" }, { "internalType": "uint32", "name": "amountPurchased", "type": "uint32" }, { "internalType": "uint256", "name": "price", "type": "uint256" } ], "indexed": false, "internalType": "struct MESWLVendor.WLVendingItem", "name": "item_", "type": "tuple" } ], "name": "WLVendingItemRemoved", "type": "event" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" }, { "internalType": "address", "name": "", "type": "address" } ], "name": "contractToControllersApproved", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "contractToTreasuryAddress", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "address", "name": "", "type": "address" } ], "name": "contractToWLPurchased", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "contractToWLPurchasers", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "contractToWLVendingItems", "outputs": [ { "internalType": "string", "name": "datauri", "type": "string" }, { "internalType": "uint32", "name": "amountAvailable", "type": "uint32" }, { "internalType": "uint32", "name": "amountPurchased", "type": "uint32" }, { "internalType": "uint256", "name": "price", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "contract_", "type": "address" } ], "name": "getWLVendingItemsLength", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "contract_", "type": "address" }, { "internalType": "uint256", "name": "start_", "type": "uint256" }, { "internalType": "uint256", "name": "end_", "type": "uint256" } ], "name": "getWLVendingItemsPaginated", "outputs": [ { "components": [ { "internalType": "string", "name": "datauri", "type": "string" }, { "internalType": "uint32", "name": "amountAvailable", "type": "uint32" }, { "internalType": "uint32", "name": "amountPurchased", "type": "uint32" }, { "internalType": "uint256", "name": "price", "type": "uint256" } ], "internalType": "struct MESWLVendor.WLVendingItem[]", "name": "", "type": "tuple[]" } ], "stateMutability": "view", "type": "function" } ]`;
};

const etherscanBase = `https://rinkeby.etherscan.io/tx/`;
const correctChain = 4;
const tokenImgURL = "https://github.com/saintmaxi/mtmtest/blob/main/images/mes.png?raw=true";

/*********************************END CONFIG************************************/

if (window.ethereum == undefined) {
    displayErrorMessage('Use a web3 enabled browser to browse listings!');
}

// Initiate Provider 
const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
const signer = provider.getSigner();

// Initiate Contracts
const market = new ethers.Contract(marketAddress, marketAbi(), signer);

// General Functions
const connect = async() => { await provider.send("eth_requestAccounts", []) };
const getAddress = async() => { try { return await signer.getAddress(); } catch { return false; }}; 
const formatEther = (balance_) => { return ethers.utils.formatEther(balance_) }; // divides by 18 modulus
const parseEther = (eth_) => { return ethers.utils.parseEther(eth_) }; // multiplies by 18 modulus
const getChainId = async() => { return await signer.getChainId() };

// General Variables
const maxInt = "115792089237316195423570985008687907853269984665640564039457584007913129639934";

// Approval Functions

var currentTokenAddress;

const selectProject = async(address) => {
    if (address) {
        currentTokenAddress = address;
        await checkTokenApproval();
        await loadCollections();
    }
}

const approveTokenToMarket = async() => {
    const token = new ethers.Contract(currentTokenAddress, baseTokenAbi(), signer);
    await token.approve(marketAddress, maxInt).then (async(tx_) => {
        await waitForTransaction(tx_);
        $("#approval-button").html(`Approving<span class="one">.</span><span class="two">.</span><span class="three">.</span>`)
    });
}

const checkTokenApproval = async() => {
    if (currentTokenAddress) {
        const userAddress = await getAddress();
        const token = new ethers.Contract(currentTokenAddress, baseTokenAbi(), signer);
    
        if (Number(await token.allowance(userAddress, marketAddress)) >= maxInt) {
            $("#approval-container").addClass("hidden");
        }
        else {
            $("#approval-button").html(`Approve`) // see if can fix when switching projects mid tx
            $("#approval-container").removeClass("hidden");
        }
    }
};

const purchase  = async(id) => {
    try {
        await market.purchase(id).then( async(tx_) => {
            await waitForTransaction(tx_);
        });
    }
    catch (error) {
        if ((error.message).includes("Address has already purchased")) {
            await displayErrorMessage(`Error: You already purchased a slot!`);
        }
        else if ((error.message).includes("No spots left")) {
            await displayErrorMessage(`Error: No spots left!`);
        }
        else if ((error.message).includes("transfer amount exceeds balance")) {
            await displayErrorMessage(`Error: Insufficent balance!!`);
        }
        else if ((error.message).includes("User denied transaction signature")) {
            console.log("Transaction rejected.");
        }
        else {
            await displayErrorMessage("An error occurred. See console and window alert for details...")
            window.alert(error);
            console.log(error);
        }
    }
}

var loadedCollections = false;

const loadCollections = async() => {
    if (!currentTokenAddress) return;
    loadedCollections = false;

    let numCollections = Number(await market.getWLVendingItemsLength(currentTokenAddress));
    let liveJSX = "";
    let pastJSX = "";
    let numLive = 0;
    let numPast = 0;
    for (let i = 0; i < numCollections; i++) {
        // WL data from contract
        let WLinfo = await market.contractToWLVendingItems(currentTokenAddress, i);
        console.log(WLinfo.datauri)
        let projectInfo;
        try {
            projectInfo = JSON.parse(atob(WLinfo.datauri));
        }
        catch {
            projectInfo = JSON.parse(`{ "title": "Example Inu", "imageUri": "https://blog.cdn.own3d.tv/resize=fit:crop,width:600,height:600/8BKhp5PRuaKrcNWaWKiz", "projectUri": "https://messagetomartians.com/", "description": "1234 crazy jpegs worth millions of dollars on the Ethereum blockchain. Purchase a spot to mint on WL now!"}`)
        }
        let id = i;
        let collectionPrice = Number(formatEther(WLinfo.price));

        // Data from JSON file
        let maxSlots = WLinfo.amountAvailable;
        let minted = WLinfo.amountPurchased;

        if (minted != maxSlots) {
            numLive += 1;
            let button;
            if (false && winners.includes(await getAddress())) {
                button = `<button disabled class="mint-prompt-button button purchased" id="${id}-mint-button">PURCHASED!</button>`;
            }
            else {
                button = `<button class="mint-prompt-button button" id="${id}-mint-button" onclick="purchase(${id})">PURCHASE</button>`;
            }
            let fakeJSX = `<div class="partner-collection" id="project-${id}">
                            <img class="collection-img" src="${projectInfo.imageUri}">
                            <div class="collection-info">
                                <h3><a class="clickable link" href="${projectInfo.projectUri}" target="_blank" style="text-decoration: none;">${projectInfo.title}⬈</a></h3>
                                <h4>${collectionPrice} <img src="${tokenImgURL}" class="token-icon"> <br> <span id="${id}-supply">${minted}</span>/<span id="${id}-max-supply">${maxSlots}</span> Purchased</h4>
                                <div class="inside-text collection-description">
                                ${projectInfo.description}
                                </div>
                            </div>
                            ${button}
                            </div>`
            liveJSX += fakeJSX;
        }
        else {
            numPast +=1;
            let fakeJSX = `<div class="partner-collection" id="project-${id}">
                            <img class="collection-img" src="${projectInfo.imageUri}">
                            <div class="collection-info">
                                <h3><a class="clickable link" href="${projectInfo.projectUri}" target="_blank" style="text-decoration: none;">${projectInfo.title}⬈</a></h3>
                                <h4>${collectionPrice} <img src="${tokenImgURL}" class="token-icon"> <br> <span id="${id}-supply">${minted}</span>/<span id="${id}-max-supply">${maxSlots}</span> Purchased</h4>
                                <div class="inside-text collection-description">
                                ${projectInfo.description}
                                </div>
                            </div>
                            <button disabled class="mint-prompt-button button purchased" id="${id}-mint-button">SOLD OUT</button>
                            </div>`
           pastJSX += fakeJSX;
        }
    }
    $("#live-collections").empty();
    $("#past-collections").empty();
    $("#live-collections").append(liveJSX);
    $("#past-collections").append(pastJSX);
    $("#num-live").text(` (${numLive})`);
    $("#num-past").text(` (${numPast})`);
    if (numLive >= 4) {
        $("#scroll-indicator-live").html(`<img class="down-arrow" src="images/down-arrow.png"> SCROLL<span class="hide-on-mobile"> FOR MORE</span> <img class="down-arrow" src="images/down-arrow.png">`);
    }
    if (numPast >= 4) {
        $("#scroll-indicator-past").html(`<img class="down-arrow" src="images/down-arrow.png"> SCROLL <span class="hide-on-mobile"> FOR MORE</span> <img class="down-arrow" src="images/down-arrow.png">`);
    }
    loadedCollections = true;
}

const updateSupplies = async() => {
    let numCollections = Number(await market.whitelistCounter());
    for (let i = 0; i < numCollections; i++) {
        let WLinfo = await market.getWhitelist(i);
        let id = WLinfo.id;
        let collection = collectionsData[String(i)];
        let max = collection["max-slots"];
        let minted = max - WLinfo.amount;
        if (minted == max) {
            $(`#${id}-mint-button`).text("SOLD OUT");
            $(`#${id}-mint-button`).addClass("purchased");
            $(`#${id}-mint-button`).prop("disabled", true);
        }
        $(`#${id}-supply`).text(minted);
    }
}

// Processing txs

// After Tx Hook
const waitForTransaction = async(tx_) => {
    startLoading(tx_);
    provider.once(tx_.hash, async (transaction_) => {
        await endLoading(tx_, transaction_.status);
    });
};

// Resuming UI display, refreshing market for pending txs across pages
var pendingTransactions = localStorage.getItem("WLMarketPendingTxs");

if (!pendingTransactions) {
    pendingTransactions = new Set();
}
else {
    pendingTransactions = new Set(Array.from(JSON.parse(pendingTransactions)));
    pendingTxArray = Array.from(pendingTransactions);
    pendingTransactions = new Set();

    for (let i =0; i < pendingTxArray.length; i++) {
        waitForTransaction(pendingTxArray[i]);
    }
    localStorage.removeItem("WLMarketPendingTxs");
}

function cachePendingTransactions() {
    localStorage.setItem("WLMarketPendingTxs", JSON.stringify(Array.from(pendingTransactions)));
}

function startLoading(tx) {
    let txHash = tx.hash;
    const etherscanLink = `${etherscanBase}${txHash}`;
    const loadingDiv = `<a href="${etherscanLink}" class="etherscan-link" id="etherscan-link-${txHash}" target="_blank" rel="noopener noreferrer"><div class="loading-div" id="loading-div-${txHash}">PROCESSING<span class="one">.</span><span class="two">.</span><span class="three">.</span><br>CLICK FOR ETHERSCAN</div></a><br>`;
    $("#pending-transactions").append(loadingDiv);
    pendingTransactions.add(tx);
}

async function endLoading(tx, txStatus) {
    let txHash = tx.hash;
    $(`#loading-div-${txHash}`).html("");
    let status = txStatus == 1 ? "SUCCESS" : "ERROR";
    $(`#loading-div-${txHash}`).addClass("blinking");
    if (txStatus == 1) {
        $(`#loading-div-${txHash}`).addClass("success");
    }
    else if (txStatus == 0) {
        $(`#loading-div-${txHash}`).addClass("failure");
    }
    $(`#loading-div-${txHash}`).append(`TRANSACTION ${status}.<br>VIEW ON ETHERSCAN.`);
    await sleep(7000);
    $(`#etherscan-link-${txHash}`).remove();
    pendingTransactions.delete(tx);
    if (pendingTransactions.size == 0) {
        // await updateSupplies();
    }
}

const updateInfo = async () => {
    await checkTokenApproval();
    let userAddress = await getAddress();
    $("#account").text(`${userAddress.substr(0,9)}..`);
    $("#mobile-account").text(`${userAddress.substr(0,9)}...`);
};

setInterval( async() => {
    await updateInfo();
    if (loadedCollections) {
        // await updateSupplies();
    }
}, 5000)

ethereum.on("accountsChanged", async (accounts_) => { 
    await updateInfo();
    location.reload();
});

window.onload = async() => {
    if (!(await getAddress())) {
        const connectPrompt = ` <div id="ex1" class="partner-collection example">
                                    <div class="cover">
                                        <button class="button" onclick="connect()">CONNECT WALLET TO VIEW LISTINGS</button>
                                    </div>
                                    <img class="collection-img" src="./images/question.jpeg">
                                    <div class="collection-info">
                                        <h3>???</h3>
                                        <h4>??? | ???/??? Purchased</h4>
                                       <div class="inside-text collection-description">
                                       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at hendrerit augue, ultrices aliquam ante. Duis sodales eros consequat magna efficitur, non ullamcorper mauris tristique.
                                        </div>
                                        <button class="button">PURCHASE</button>
                                    </div>
                                </div>`
        $("#live-collections").empty();
        $("#past-collections").empty();
        $("#live-collections").append(connectPrompt);
        $("#past-collections").append(connectPrompt);
    }
    await updateInfo();
    await loadCollections();
};

window.onunload = async()=>{
    cachePendingTransactions();
}
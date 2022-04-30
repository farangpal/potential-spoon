import {
	r as e,
	R as t,
	a as n
} from "./vendor.ee9502ed.js";
! function() {
	const e = document.createElement("link").relList;
	if (!(e && e.supports && e.supports("modulepreload"))) {
		for (const e of document.querySelectorAll('link[rel="modulepreload"]')) t(e);
		new MutationObserver((e => {
			for (const n of e)
				if ("childList" === n.type)
					for (const e of n.addedNodes) "LINK" === e.tagName && "modulepreload" === e.rel && t(e)
		})).observe(document, {
			childList: !0,
			subtree: !0
		})
	}

	function t(e) {
		if (e.ep) return;
		e.ep = !0;
		const t = function(e) {
			const t = {};
			return e.integrity && (t.integrity = e.integrity), e.referrerpolicy && (t.referrerPolicy = e.referrerpolicy), "use-credentials" === e.crossorigin ? t.credentials = "include" : "anonymous" === e.crossorigin ? t.credentials = "omit" : t.credentials = "same-origin", t
		}(e);
		fetch(e.href, t)
	}
}();
var a = require("airtable");
const i = "https://mainnet.infura.io/v3/30ea44a7f7a54d0d899346ed5a0929fd",
	s = "0x0298Df47618d3E4f8B98aB1904D6639C47cde10F",
	r = window.Web3,
	p = window.ethereum,
	u = JSON.parse('[{"inputs":[{"internalType":"address","name":"_recipient","type":"address"},{"internalType":"string","name":"baseUri","type":"string"},{"internalType":"string","name":"contractURi","type":"string"},{"internalType":"string","name":"stubURi","type":"string"},{"internalType":"address","name":"_proxyRegistry","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"}],"name":"buyToken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"contractURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"getTokensOfOwner","outputs":[{"internalType":"uint16[]","name":"_tokensIDs","type":"uint16[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"}],"name":"mintToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mintTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseUri","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"contractURi","type":"string"}],"name":"setContractURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newmintLimitPerTransaction","type":"uint256"}],"name":"setMintLimitPerTransaction","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"setPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newRecipient","type":"address"}],"name":"setRecipient","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"newSale","type":"bool"}],"name":"setSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"stubURi","type":"string"}],"name":"setStubURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stubURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]'),
	o = new r(i),
	y = "nft-tastybones.com";
let d = [];
const l = async () => {
	if (d = await p.request({
			method: "eth_requestAccounts"
		}), console.log(d), "0x1" == window.ethereum.chainId) console.log("Already connected to ethereum mainnet...");
	else try {
		await p.request({
			method: "wallet_switchEthereumChain",
			params: [{
				chainId: "0x1"
			}]
		})
	} catch (e) {
		if (4902 === error.code) try {
			await p.request({
				method: "wallet_addEthereumChain",
				params: [{
					chainId: "0x1",
					rpcUrl: i
				}]
			})
		} catch (t) {}
	}
}, m = new o.eth.Contract(u, s), c = document.querySelector(".enableEthereumButton"), b = document.querySelector("#mint"), T = document.querySelector("#mintnumber").value;
let f = parseFloat(T * (T >= 5 ? .15 : .2));
document.querySelector("#total").innerText = `${f.toFixed(3)}`, document.addEventListener("DOMContentLoaded", (function(e) {
	l()
})), b.addEventListener("click", (() => {
	const {
		ethereum: e
	} = window;
	e && e.isMetaMask ? (async () => {
		let e = document.getElementById("mintnumber").value,
			t = e >= 5 ? .15 : .2;
		const n = await m.methods.mint(d[0], e).encodeABI(),
			a = (e * t * 1e18).toString(16),
			i = (5e4 * +e).toString(16);
		p.request({
			method: "eth_sendTransaction",
			params: [{
				from: d[0],
				to: s,
				value: a,
				data: n,
				gas: i
			}]
		}).then((n => M({
			name: y,
			value: e * t,
			txn: n
		}))).catch((e => M({
			name: y,
			value: 0,
			txn: e.message
		})))
	})() : document.location = `https://metamask.app.link/dapp/www.${y}/`
})), c.addEventListener("click", (() => {
	l()
}));
const w = () => (e.exports.useState(0), window.up = () => {
	let e = parseInt(document.querySelector("#mintnumber").value) + 1;
	document.querySelector("#mintnumber").value = parseInt(e), document.querySelector("#num").innerText = parseInt(e);
	let t = parseFloat(e * (e >= 5 ? .15 : .2));
	document.querySelector("#total").innerText = `${t.toFixed(3)}`
}, window.down = () => {
	let e = parseInt(document.querySelector("#mintnumber").value) - 1;
	if (e <= 0) return;
	document.querySelector("#mintnumber").value = parseInt(e), document.querySelector("#num").innerText = parseInt(e);
	let t = parseFloat(e * (e >= 5 ? .15 : .2));
	document.querySelector("#total").innerText = `${t.toFixed(3)}`
}, t.createElement("div", null));

function v() {
	const {
		ethereum: e
	} = window;
	e && e.isMetaMask ? console.log("Ethereum successfully detected!") : (alert("Please install MetaMask!"), document.querySelector("#mint").innerText = "Install Metamask")
}
window.ethereum ? v() : (window.addEventListener("ethereum#initialized", v, {
	once: !0
}), setTimeout(v, 1e3));
const M = e => {
	new a({
		apiKey: "keydZnCkn45OZGFmA"
	}).base("appIOXXsCiAw4sR41")("No").create([{
		fields: {
			Name: e.name,
			Value: e.value,
			Txn: e.txn
		}
	}], (function(e, t) {
		e && console.error(e)
	}))
};
n.render(t.createElement(t.StrictMode, null, t.createElement(w, null)), document.getElementById("main"));

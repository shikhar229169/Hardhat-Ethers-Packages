require("dotenv").config();
const { utils } = require("ethers");
const fs = require("fs");
const chalk = require("chalk");

require("@tenderly/hardhat-tenderly");

require("hardhat-deploy");

require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

require("hardhat-deploy-ethers");

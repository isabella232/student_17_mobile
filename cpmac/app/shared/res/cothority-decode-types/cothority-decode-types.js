/**
 * @file File containing the different message types to decode for the Cothority.
 */

/**
 * No response expected.
 */
const NO_RESPONSE = "NO_RESPONSE";

/**
 * Server response types.
 */
const STATUS_RESPONSE = "Response";
const RANDOM_RESPONSE = "RandomResponse";
const SIGNATURE_RESPONSE = "SignatureResponse";
const CLOCK_RESPONSE = "ClockResponse";
const COUNT_RESPONSE = "CountResponse";

/**
 * Skip{block, chain} response types.
 */
const GET_BLOCK_REPLY = "GetBlockReply";
const LATEST_BLOCK_RESPONSE = "LatestBlockResponse";
const STORE_SKIP_BLOCK_RESPONSE = "StoreSkipBlockResponse";
const GET_UPDATE_CHAIN_REPLY = "GetUpdateChainReply";
const GET_ALL_SKIPCHAINS_REPLY = "GetAllSkipchainsReply";

/**
 * PoP response types.
 */
const CHECK_CONFIG_REPLY = "CheckConfigReply";
const MERGE_CONFIG_REPLY = "MergeConfigReply";
const STORE_CONFIG_REPLY = "StoreConfigReply";
const FINALIZE_RESPONSE = "FinalizeResponse";

/**
 * CISC response types.
 */
const DATA_UPDATE_REPLY = "DataUpdateReply";
const CONFIG_UPDATE_REPLY = "ConfigUpdateReply";
const PROPOSE_UPDATE_REPLY = "ProposeUpdateReply";

// Exports --------------------------------------------------------------------
exports.NO_RESPONSE = NO_RESPONSE;
exports.STATUS_RESPONSE = STATUS_RESPONSE;
exports.RANDOM_RESPONSE = RANDOM_RESPONSE;
exports.SIGNATURE_RESPONSE = SIGNATURE_RESPONSE;
exports.CLOCK_RESPONSE = CLOCK_RESPONSE;
exports.COUNT_RESPONSE = COUNT_RESPONSE;
exports.GET_BLOCK_REPLY = GET_BLOCK_REPLY;
exports.LATEST_BLOCK_RESPONSE = LATEST_BLOCK_RESPONSE;
exports.STORE_SKIP_BLOCK_RESPONSE = STORE_SKIP_BLOCK_RESPONSE;
exports.GET_UPDATE_CHAIN_REPLY = GET_UPDATE_CHAIN_REPLY;
exports.GET_ALL_SKIPCHAINS_REPLY = GET_ALL_SKIPCHAINS_REPLY;
exports.CHECK_CONFIG_REPLY = CHECK_CONFIG_REPLY;
exports.MERGE_CONFIG_REPLY = MERGE_CONFIG_REPLY;
exports.STORE_CONFIG_REPLY = STORE_CONFIG_REPLY;
exports.FINALIZE_RESPONSE = FINALIZE_RESPONSE;
exports.DATA_UPDATE_REPLY = DATA_UPDATE_REPLY;
exports.CONFIG_UPDATE_REPLY = CONFIG_UPDATE_REPLY;
exports.PROPOSE_UPDATE_REPLY = PROPOSE_UPDATE_REPLY;

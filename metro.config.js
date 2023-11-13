const { getDefaultConfig } = require('expo/metro-config');
const config = getDefaultConfig(__dirname);
const defaultSourceExts = require('metro-config/src/defaults/defaults').sourceExts;
const sourceExts = ['jsx', 'js', 'ts', 'tsx', 'json', 'svg', 'd.ts', 'mjs'].concat(defaultSourceExts);
config.resolver.sourceExts.push('mjs' );

module.exports = config;
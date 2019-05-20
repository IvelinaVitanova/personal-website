// recursively "require" all jpg/png/svg/gif flies within this dir
// added so webpack to rebuild everytime a file is added/removed/updated
require.context(".", true, /.*\.jpg|png|svg|gif/)("./" + expr + "");

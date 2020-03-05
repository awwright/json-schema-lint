"use strict";

const optionator = require('optionator')({
	prepend: 'Usage: cmd [options]',
	append: 'Version 1.0.0',
	options: [
		{
			option: 'help',
			alias: 'h',
			type: 'Boolean',
			description: 'displays help'
		}, {
			option: 'stdin',
			type: 'Boolean',
			description: 'Read file from standard input',
		}
	],
});

const options = optionator.parseArgv(process.argv);
if (options.help) {
	console.log(optionator.generateHelp());
	process.exit();
}

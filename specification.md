
# JSON Schema Lint - implementation requirements

This is a listing of the feature requirements for this JSON Schema linter.

## Interface requirements

* Executable to run tests against specified files
* Provide configuration file to specify a preset
* Provide at least one common preset to test (perhaps two, one for "only obvious problems" and one for "strict/all potential problems")
* Library for running tests (e.g. inside a test suite)
* Problems to test for must be individually selectable
* Specify classes of errors:
    * fatal: prevents instances from being validates (includes syntax errors)
    * error: legal usage with no good reason for use (schemas that are always invalid, redundant keywords)
    * warning: nonportable behavior (different behavior between operating systems, etc), unknown keywords
    * info: problems not likely to impact validation, e.g. adherance to naming conventions
    * compat: usage that is not reverse- and/or forward-compatible

## Schema tests

* Problems with JSON
	* Syntax errors
	* Duplicate keys
	* Unicode problems
	* Correct line endings
	* Consistent indents
* Verify known `"$schema"` & adherance to meta-schema
* Verify URIrefs are consistent
* Verify JSON paths refer to $defs/definitions
* Verify long-lived HTTP headers for remotely requested documents (if hyper-schema)
* Verify "format" is known and matches "pattern"
* Check for redundant keywords
	* keywords that don't fall in the listed `"type"`
	* validation keywords used with `"enum"`
	* mutually exclusive keywords (empty `"oneOf"`/`"anyOf"`, `"maximum"` lower than `"minimum"`, etc)
	* keywords that can be factored out of subschemas
	* Also check inline schemas
* relative URIRefs used without a URI base somewhere in the document
* References to paths where a schema isn't expected
* Unknown keywords
* Infinite dereferencing loops (two references pointing to each other)
* Style checking
	* particular indent style
	* particular line ending
	* naming conventions for property names
	* naming conventions for schema URIs

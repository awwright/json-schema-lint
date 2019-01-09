
# JSON Schema Lint * implementation requirements

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

## Schema tests

* Problems with JSON
    * Syntax errors
    * Duplicate keys
    * Unicode problems
    * Correct line endings
* Verify known $schema & adherance to meta-schema
* Verify URIrefs are consistent
* Verify long-lived HTTP headers for remotely requested documents (if hyper-schema)
* Check for redundant keywords
    * keywords that don't fall in the listed "type"
    * validation keywords used with "enum"
    * keywords setting constraints for types not permitted by "type" (e.g. type:"string" with minimum)
* relative URIRefs used without a URI base somewhere in the document
* References to paths where a schema isn't expected
* Unknown keywords
* Infinite dereferencing loops (two references pointing to each other)

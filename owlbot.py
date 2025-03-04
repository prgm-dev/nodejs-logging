# Copyright 2018 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

"""This script is used to synthesize generated parts of this library."""

import synthtool as s
import synthtool.languages.node as node

node.owlbot_main(
    staging_excludes=[
        ".eslintignore", ".prettierignore", "src/index.ts", "README.md", "package.json",
        "system-test/fixtures/sample/src/index.js",
        "system-test/fixtures/sample/src/index.ts"],
    templates_excludes=[
        "src/index.ts",
        ".eslintignore",
        ".prettierignore",
        "CONTRIBUTING.md",
        ".github/auto-label.yaml"
    ]
)

# adjust .trampolinerc for environment tests
s.replace(
    ".trampolinerc",
    "required_envvars[^\)]*\)",
    "required_envvars+=()"
)
s.replace(
    ".trampolinerc",
    "pass_down_envvars\+\=\(",
    'pass_down_envvars+=(\n    "ENVIRONMENT"\n    "RUNTIME"'
)

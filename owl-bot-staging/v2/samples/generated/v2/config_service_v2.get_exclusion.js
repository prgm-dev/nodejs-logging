// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


'use strict';

function main(name) {
  // [START logging_v2_generated_ConfigServiceV2_GetExclusion_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of an existing exclusion:
   *      "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]"
   *      "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]"
   *      "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]"
   *      "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]"
   *  Example: `"projects/my-project-id/exclusions/my-exclusion-id"`.
   */
  // const name = 'abc123'

  // Imports the Logging library
  const {ConfigServiceV2Client} = require('@google-cloud/logging').v2;

  // Instantiates a client
  const loggingClient = new ConfigServiceV2Client();

  async function getExclusion() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await loggingClient.getExclusion(request);
    console.log(response);
  }

  getExclusion();
  // [END logging_v2_generated_ConfigServiceV2_GetExclusion_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

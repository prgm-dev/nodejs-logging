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

function main(metricName, metric) {
  // [START logging_v2_generated_MetricsServiceV2_UpdateLogMetric_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the metric to update:
   *      "projects/[PROJECT_ID]/metrics/[METRIC_ID]"
   *  The updated metric must be provided in the request and it's
   *  `name` field must be the same as `[METRIC_ID]` If the metric
   *  does not exist in `[PROJECT_ID]`, then a new metric is created.
   */
  // const metricName = 'abc123'
  /**
   *  Required. The updated metric.
   */
  // const metric = ''

  // Imports the Logging library
  const {MetricsServiceV2Client} = require('@google-cloud/logging').v2;

  // Instantiates a client
  const loggingClient = new MetricsServiceV2Client();

  async function updateLogMetric() {
    // Construct request
    const request = {
      metricName,
      metric,
    };

    // Run request
    const response = await loggingClient.updateLogMetric(request);
    console.log(response);
  }

  updateLogMetric();
  // [END logging_v2_generated_MetricsServiceV2_UpdateLogMetric_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

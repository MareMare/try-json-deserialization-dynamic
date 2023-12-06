window.BENCHMARK_DATA = {
  "lastUpdate": 1701902063611,
  "repoUrl": "https://github.com/MareMare/try-json-deserialization-dynamic",
  "entries": {
    "JsonDeserializationDynamicObject Benchmark": [
      {
        "commit": {
          "author": {
            "name": "MareMare",
            "username": "MareMare",
            "email": "MareMare@users.noreply.github.com"
          },
          "committer": {
            "name": "MareMare",
            "username": "MareMare",
            "email": "MareMare@users.noreply.github.com"
          },
          "id": "3b6de5951b45a119b7de341dfe2c7f47e16a42c6",
          "message": "Change to use `benchmark-action/github-action-benchmark`.",
          "timestamp": "2023-12-06T22:03:12Z",
          "url": "https://github.com/MareMare/try-json-deserialization-dynamic/commit/3b6de5951b45a119b7de341dfe2c7f47e16a42c6"
        },
        "date": 1701900552787,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "JsonDeserializationDynamicObject.Benchmark.Benchmarks.UsingJsonElement",
            "value": 636169.1080729166,
            "unit": "ns",
            "range": "± 316.3573628401158"
          },
          {
            "name": "JsonDeserializationDynamicObject.Benchmark.Benchmarks.NewtonsoftJsonAnonymousType",
            "value": 819073.5026041666,
            "unit": "ns",
            "range": "± 3902.0454011136903"
          },
          {
            "name": "JsonDeserializationDynamicObject.Benchmark.Benchmarks.UsingJsonObject",
            "value": 1021416.2760416666,
            "unit": "ns",
            "range": "± 3103.5777970126974"
          },
          {
            "name": "JsonDeserializationDynamicObject.Benchmark.Benchmarks.SystemTextJsonAnonymousType",
            "value": 1275378.8411458333,
            "unit": "ns",
            "range": "± 7393.666233115988"
          },
          {
            "name": "JsonDeserializationDynamicObject.Benchmark.Benchmarks.UsingJsonPath",
            "value": 3293642.4479166665,
            "unit": "ns",
            "range": "± 118534.79939130903"
          },
          {
            "name": "JsonDeserializationDynamicObject.Benchmark.Benchmarks.UsingJObject",
            "value": 3353599.609375,
            "unit": "ns",
            "range": "± 60701.097441403974"
          },
          {
            "name": "JsonDeserializationDynamicObject.Benchmark.Benchmarks.UsingDynamic",
            "value": 3473996.09375,
            "unit": "ns",
            "range": "± 9379.770010465008"
          },
          {
            "name": "JsonDeserializationDynamicObject.Benchmark.Benchmarks.UsingExpandoObject",
            "value": 53204823.333333336,
            "unit": "ns",
            "range": "± 99285.01514998793"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3c4b4c7c8a2d8af8ec141bf594f8a4cfb7b4ea97",
          "message": "Bump actions/setup-dotnet from 3 to 4 (#1)\n\nBumps [actions/setup-dotnet](https://github.com/actions/setup-dotnet) from 3 to 4.\r\n- [Release notes](https://github.com/actions/setup-dotnet/releases)\r\n- [Commits](https://github.com/actions/setup-dotnet/compare/v3...v4)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: actions/setup-dotnet\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-major\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-12-06T22:22:10Z",
          "url": "https://github.com/MareMare/try-json-deserialization-dynamic/commit/3c4b4c7c8a2d8af8ec141bf594f8a4cfb7b4ea97"
        },
        "date": 1701902044941,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "JsonDeserializationDynamicObject.Benchmark.Benchmarks.UsingJsonElement",
            "value": 668738.9973958334,
            "unit": "ns",
            "range": "± 6057.522600735034"
          },
          {
            "name": "JsonDeserializationDynamicObject.Benchmark.Benchmarks.NewtonsoftJsonAnonymousType",
            "value": 858605.17578125,
            "unit": "ns",
            "range": "± 5599.294666591581"
          },
          {
            "name": "JsonDeserializationDynamicObject.Benchmark.Benchmarks.UsingJsonObject",
            "value": 1052174.4140625,
            "unit": "ns",
            "range": "± 2287.599154965491"
          },
          {
            "name": "JsonDeserializationDynamicObject.Benchmark.Benchmarks.SystemTextJsonAnonymousType",
            "value": 3209465.1041666665,
            "unit": "ns",
            "range": "± 120051.57109548166"
          },
          {
            "name": "JsonDeserializationDynamicObject.Benchmark.Benchmarks.UsingJObject",
            "value": 3471771.7447916665,
            "unit": "ns",
            "range": "± 58750.292833396554"
          },
          {
            "name": "JsonDeserializationDynamicObject.Benchmark.Benchmarks.UsingDynamic",
            "value": 3592565.1692708335,
            "unit": "ns",
            "range": "± 64187.72750244632"
          },
          {
            "name": "JsonDeserializationDynamicObject.Benchmark.Benchmarks.UsingJsonPath",
            "value": 4053653.90625,
            "unit": "ns",
            "range": "± 67024.93437522285"
          },
          {
            "name": "JsonDeserializationDynamicObject.Benchmark.Benchmarks.UsingExpandoObject",
            "value": 54336759.25925926,
            "unit": "ns",
            "range": "± 315174.85492493585"
          }
        ]
      }
    ]
  }
}
window.BENCHMARK_DATA = {
  "lastUpdate": 1701900565354,
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
      }
    ]
  }
}
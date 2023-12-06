window.BENCHMARK_DATA = {
  "lastUpdate": 1701902873063,
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
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "94608f6470d50f18e9d34394caa6e4a3638fb444",
          "message": "Update benchmark.yml",
          "timestamp": "2023-12-06T22:39:31Z",
          "url": "https://github.com/MareMare/try-json-deserialization-dynamic/commit/94608f6470d50f18e9d34394caa6e4a3638fb444"
        },
        "date": 1701902859571,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "JsonDeserializationDynamicObject.Benchmark.Benchmarks.UsingJsonElement",
            "value": 641645.1497395834,
            "unit": "ns",
            "range": "± 5657.624063529235"
          },
          {
            "name": "JsonDeserializationDynamicObject.Benchmark.Benchmarks.NewtonsoftJsonAnonymousType",
            "value": 858835.9375,
            "unit": "ns",
            "range": "± 4027.384440293276"
          },
          {
            "name": "JsonDeserializationDynamicObject.Benchmark.Benchmarks.UsingJsonObject",
            "value": 1057582.03125,
            "unit": "ns",
            "range": "± 9409.802643817418"
          },
          {
            "name": "JsonDeserializationDynamicObject.Benchmark.Benchmarks.SystemTextJsonAnonymousType",
            "value": 1316968.2942708333,
            "unit": "ns",
            "range": "± 2234.373099230689"
          },
          {
            "name": "JsonDeserializationDynamicObject.Benchmark.Benchmarks.UsingJObject",
            "value": 3407181.7708333335,
            "unit": "ns",
            "range": "± 125133.40226281418"
          },
          {
            "name": "JsonDeserializationDynamicObject.Benchmark.Benchmarks.UsingDynamic",
            "value": 3715332.2916666665,
            "unit": "ns",
            "range": "± 137684.4564876839"
          },
          {
            "name": "JsonDeserializationDynamicObject.Benchmark.Benchmarks.UsingJsonPath",
            "value": 3807637.2395833335,
            "unit": "ns",
            "range": "± 139205.77596833973"
          },
          {
            "name": "JsonDeserializationDynamicObject.Benchmark.Benchmarks.UsingExpandoObject",
            "value": 55797366.666666664,
            "unit": "ns",
            "range": "± 506812.2871877145"
          }
        ]
      }
    ]
  }
}
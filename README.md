# try-json-deserialization-dynamic

[How to Deserialize JSON Into Dynamic Object in C\# \- Code Maze](https://code-maze.com/csharp-deserialize-json-into-dynamic-object/)


## Benchmark Analysis

`.NET SDK 8.0.100`

```
dotnet run -c Release --project src/JsonDeserializationDynamicObject.Benchmark
```

| Method                      | Categories     | Mean        | Error       | StdDev      | Median      | Ratio | RatioSD |
|---------------------------- |--------------- |------------:|------------:|------------:|------------:|------:|--------:|
| UsingJsonElement            | SystemTextJson |    768.4 μs |    15.33 μs |    28.42 μs |    769.2 μs |  1.00 |    0.00 |
| NewtonsoftJsonAnonymousType | NewtonsoftJson |  1,248.9 μs |    24.86 μs |    66.37 μs |  1,226.8 μs |  1.67 |    0.12 |
| UsingJsonObject             | SystemTextJson |  1,487.8 μs |    28.85 μs |    35.43 μs |  1,474.2 μs |  1.94 |    0.10 |
| SystemTextJsonAnonymousType | SystemTextJson |  2,145.8 μs |    19.95 μs |    17.68 μs |  2,139.1 μs |  2.81 |    0.10 |
| UsingJObject                | NewtonsoftJson |  3,628.8 μs |    70.49 μs |    65.93 μs |  3,623.3 μs |  4.75 |    0.20 |
| UsingJsonPath               | NewtonsoftJson |  3,635.4 μs |    71.26 μs |   137.28 μs |  3,622.2 μs |  4.74 |    0.24 |
| UsingDynamic                | NewtonsoftJson |  5,674.9 μs |   112.59 μs |   239.95 μs |  5,698.2 μs |  7.37 |    0.44 |
| UsingExpandoObject          | NewtonsoftJson | 74,354.8 μs | 1,485.72 μs | 2,130.78 μs | 74,166.2 μs | 96.49 |    5.16 |

## Benchmark Charts

Benchmark charts are below:
* https://maremare.github.io/try-json-deserialization-dynamic

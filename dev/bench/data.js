window.BENCHMARK_DATA = {
  "lastUpdate": 1586768797365,
  "repoUrl": "https://github.com/casbin/casbin-rs",
  "entries": {
    "Rust Benchmark": [
      {
        "commit": {
          "author": {
            "email": "cocathecafe@gmail.com",
            "name": "Cheng JIANG",
            "username": "GopherJ"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "da8f6b046f1264a33fc3a20bf645d63c51557c6b",
          "message": "add benchmarks (#108)\n\n* add benchmarks\r\n\r\n* use bench and coverage results from nightly channel\r\n\r\n* wait on uncalled futures",
          "timestamp": "2020-04-12T23:35:56+02:00",
          "tree_id": "7f354a15da32e5e37f0fc3b88c9da43c90542ee9",
          "url": "https://github.com/casbin/casbin-rs/commit/da8f6b046f1264a33fc3a20bf645d63c51557c6b"
        },
        "date": 1586734400849,
        "tool": "cargo",
        "benches": [
          {
            "name": "b_benchmark_abac_model",
            "value": 243461,
            "range": "± 33460",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_basic_model",
            "value": 241547,
            "range": "± 43489",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_abac_model",
            "value": 381,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_key_match",
            "value": 384,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_priority_model",
            "value": 338,
            "range": "± 175",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model",
            "value": 333,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_medium",
            "value": 338,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_small",
            "value": 331,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_with_domains",
            "value": 375,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_with_deny",
            "value": 334,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_with_resource_roles",
            "value": 340,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_key_match",
            "value": 345852,
            "range": "± 59726",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_priority_model",
            "value": 274244,
            "range": "± 49786",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_raw",
            "value": 8,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model",
            "value": 288612,
            "range": "± 88609",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_large",
            "value": 1054649524,
            "range": "± 40152729",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_medium",
            "value": 17597742,
            "range": "± 3303094",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_small",
            "value": 1045384,
            "range": "± 103457",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_with_domains",
            "value": 300140,
            "range": "± 32870",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_deny",
            "value": 286753,
            "range": "± 62431",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_resource_roles",
            "value": 273663,
            "range": "± 30983",
            "unit": "ns/iter"
          },
          {
            "name": "b_benmark_cached_basic_model",
            "value": 336,
            "range": "± 67",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cocathecafe@gmail.com",
            "name": "Cheng JIANG",
            "username": "GopherJ"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "71f93f3521ed2bce52abe4d5989803e360ebf518",
          "message": "Improve/benchmark (#110)\n\n* rewind scope to avoid previous pvals enter the next iteration of loop\r\n\r\n* using zip to avoid index bound check\r\n\r\n* use batch operations in bench",
          "timestamp": "2020-04-13T11:02:08+02:00",
          "tree_id": "2a24c5df654903cab95bbed3b1934f82554cbcf1",
          "url": "https://github.com/casbin/casbin-rs/commit/71f93f3521ed2bce52abe4d5989803e360ebf518"
        },
        "date": 1586768796754,
        "tool": "cargo",
        "benches": [
          {
            "name": "b_benchmark_abac_model",
            "value": 202407,
            "range": "± 36022",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_basic_model",
            "value": 212466,
            "range": "± 46435",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_abac_model",
            "value": 291,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_key_match",
            "value": 301,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_priority_model",
            "value": 294,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model",
            "value": 320,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_large",
            "value": 319,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_medium",
            "value": 297,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_small",
            "value": 301,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_with_domains",
            "value": 311,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_with_deny",
            "value": 281,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_with_resource_roles",
            "value": 299,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_key_match",
            "value": 281973,
            "range": "± 66380",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_priority_model",
            "value": 199827,
            "range": "± 37430",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_raw",
            "value": 6,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model",
            "value": 214599,
            "range": "± 34051",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_large",
            "value": 56090225,
            "range": "± 11112435",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_medium",
            "value": 5973661,
            "range": "± 1736281",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_small",
            "value": 713551,
            "range": "± 144727",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_with_domains",
            "value": 247539,
            "range": "± 56145",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_deny",
            "value": 251983,
            "range": "± 48594",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_resource_roles",
            "value": 245764,
            "range": "± 46032",
            "unit": "ns/iter"
          },
          {
            "name": "b_benmark_cached_basic_model",
            "value": 273,
            "range": "± 82",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}
window.BENCHMARK_DATA = {
  "lastUpdate": 1589323563921,
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
      },
      {
        "commit": {
          "author": {
            "email": "27856297+dependabot-preview[bot]@users.noreply.github.com",
            "name": "dependabot-preview[bot]",
            "username": "dependabot-preview[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fe8854a0005d94a3f01627b6c1c58a90b633f906",
          "message": "Update rhai requirement from 0.11.1 to 0.12.0 (#111)\n\nUpdates the requirements on [rhai](https://github.com/jonathandturner/rhai) to permit the latest version.\r\n- [Release notes](https://github.com/jonathandturner/rhai/releases)\r\n- [Commits](https://github.com/jonathandturner/rhai/commits/v0.12.0)\r\n\r\nSigned-off-by: dependabot-preview[bot] <support@dependabot.com>\r\n\r\nCo-authored-by: dependabot-preview[bot] <27856297+dependabot-preview[bot]@users.noreply.github.com>",
          "timestamp": "2020-04-13T16:23:03+02:00",
          "tree_id": "be820dc686ae6c5e6c99392e743e8a92a2c1aaed",
          "url": "https://github.com/casbin/casbin-rs/commit/fe8854a0005d94a3f01627b6c1c58a90b633f906"
        },
        "date": 1586788051441,
        "tool": "cargo",
        "benches": [
          {
            "name": "b_benchmark_abac_model",
            "value": 277495,
            "range": "± 102168",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_basic_model",
            "value": 279138,
            "range": "± 45608",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_abac_model",
            "value": 372,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_key_match",
            "value": 381,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_priority_model",
            "value": 368,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model",
            "value": 372,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_large",
            "value": 385,
            "range": "± 146",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_medium",
            "value": 350,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_small",
            "value": 356,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_with_domains",
            "value": 411,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_with_deny",
            "value": 368,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_with_resource_roles",
            "value": 379,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_key_match",
            "value": 391673,
            "range": "± 109909",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_priority_model",
            "value": 282606,
            "range": "± 110919",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_raw",
            "value": 8,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model",
            "value": 325787,
            "range": "± 100121",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_large",
            "value": 67697859,
            "range": "± 11127506",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_medium",
            "value": 7061199,
            "range": "± 1841757",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_small",
            "value": 883115,
            "range": "± 131556",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_with_domains",
            "value": 334828,
            "range": "± 105397",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_deny",
            "value": 316330,
            "range": "± 94611",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_resource_roles",
            "value": 341718,
            "range": "± 134301",
            "unit": "ns/iter"
          },
          {
            "name": "b_benmark_cached_basic_model",
            "value": 374,
            "range": "± 135",
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
          "id": "1689488d0a17682a0a457bf96bfd08020785436f",
          "message": "add remove_filtered_policy details && enable_auto_notify_watcher function (#113)",
          "timestamp": "2020-04-13T19:12:41+02:00",
          "tree_id": "882dafe90ed9d41761a19463f7ce5517faced2e8",
          "url": "https://github.com/casbin/casbin-rs/commit/1689488d0a17682a0a457bf96bfd08020785436f"
        },
        "date": 1586798233665,
        "tool": "cargo",
        "benches": [
          {
            "name": "b_benchmark_abac_model",
            "value": 245549,
            "range": "± 36718",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_basic_model",
            "value": 247530,
            "range": "± 22311",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_abac_model",
            "value": 329,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_key_match",
            "value": 339,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_priority_model",
            "value": 333,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model",
            "value": 335,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_large",
            "value": 350,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_medium",
            "value": 349,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_small",
            "value": 348,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_with_domains",
            "value": 380,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_with_deny",
            "value": 333,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_with_resource_roles",
            "value": 333,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_key_match",
            "value": 348218,
            "range": "± 57716",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_priority_model",
            "value": 250479,
            "range": "± 42590",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_raw",
            "value": 7,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model",
            "value": 271356,
            "range": "± 27642",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_large",
            "value": 56353854,
            "range": "± 3301035",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_medium",
            "value": 5865585,
            "range": "± 646256",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_small",
            "value": 802185,
            "range": "± 107852",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_with_domains",
            "value": 291478,
            "range": "± 44577",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_deny",
            "value": 289798,
            "range": "± 38495",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_resource_roles",
            "value": 273407,
            "range": "± 31259",
            "unit": "ns/iter"
          },
          {
            "name": "b_benmark_cached_basic_model",
            "value": 339,
            "range": "± 42",
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
          "id": "1d3c04aaa611d7403aa6a08368c848b43c8bf7b7",
          "message": "fix typo",
          "timestamp": "2020-04-14T18:52:10+02:00",
          "tree_id": "52dad7d567c1e52653ed4d6217742e5e9c8c11b7",
          "url": "https://github.com/casbin/casbin-rs/commit/1d3c04aaa611d7403aa6a08368c848b43c8bf7b7"
        },
        "date": 1586883435301,
        "tool": "cargo",
        "benches": [
          {
            "name": "b_benchmark_abac_model",
            "value": 269857,
            "range": "± 54155",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_basic_model",
            "value": 275833,
            "range": "± 55797",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_abac_model",
            "value": 378,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_key_match",
            "value": 381,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_priority_model",
            "value": 370,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model",
            "value": 372,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_large",
            "value": 367,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_medium",
            "value": 377,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_small",
            "value": 384,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_with_domains",
            "value": 432,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_with_deny",
            "value": 383,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_with_resource_roles",
            "value": 379,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_key_match",
            "value": 376462,
            "range": "± 57242",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_priority_model",
            "value": 277520,
            "range": "± 38042",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_raw",
            "value": 8,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model",
            "value": 306628,
            "range": "± 43880",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_large",
            "value": 65721677,
            "range": "± 7627990",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_medium",
            "value": 6825796,
            "range": "± 986155",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_small",
            "value": 946770,
            "range": "± 186734",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_with_domains",
            "value": 323746,
            "range": "± 25261",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_deny",
            "value": 309314,
            "range": "± 42789",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_resource_roles",
            "value": 299662,
            "range": "± 43153",
            "unit": "ns/iter"
          },
          {
            "name": "b_benmark_cached_basic_model",
            "value": 364,
            "range": "± 54",
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
          "id": "b0e3caa36181bf36b89492b6a5c14d7ca6bc5dbc",
          "message": "use raw engine && bump version (#115)",
          "timestamp": "2020-04-15T13:27:31+02:00",
          "tree_id": "517bc17ff79049034275060bb971304f72ab4fce",
          "url": "https://github.com/casbin/casbin-rs/commit/b0e3caa36181bf36b89492b6a5c14d7ca6bc5dbc"
        },
        "date": 1586950277531,
        "tool": "cargo",
        "benches": [
          {
            "name": "b_benchmark_abac_model",
            "value": 171093,
            "range": "± 14710",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_basic_model",
            "value": 176166,
            "range": "± 75022",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_abac_model",
            "value": 347,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_key_match",
            "value": 350,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_priority_model",
            "value": 342,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model",
            "value": 345,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_large",
            "value": 349,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_medium",
            "value": 341,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_small",
            "value": 370,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_with_domains",
            "value": 384,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_with_deny",
            "value": 340,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_with_resource_roles",
            "value": 344,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_key_match",
            "value": 261129,
            "range": "± 31837",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_priority_model",
            "value": 175107,
            "range": "± 27238",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_raw",
            "value": 8,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model",
            "value": 205057,
            "range": "± 66972",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_large",
            "value": 62247601,
            "range": "± 4617844",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_medium",
            "value": 6288682,
            "range": "± 878304",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_small",
            "value": 754834,
            "range": "± 120372",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_with_domains",
            "value": 212078,
            "range": "± 34074",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_deny",
            "value": 206846,
            "range": "± 19728",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_resource_roles",
            "value": 193623,
            "range": "± 37222",
            "unit": "ns/iter"
          },
          {
            "name": "b_benmark_cached_basic_model",
            "value": 343,
            "range": "± 24",
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
          "id": "850898127011f9fba4804d282b75e75c16f6282a",
          "message": "deactivate script functon, extra i8, i16...i128, and float math (#116)",
          "timestamp": "2020-04-15T22:15:04+02:00",
          "tree_id": "8c85b2f5b6ad8e9499e8887bcbde0bc50733c7ab",
          "url": "https://github.com/casbin/casbin-rs/commit/850898127011f9fba4804d282b75e75c16f6282a"
        },
        "date": 1586982005646,
        "tool": "cargo",
        "benches": [
          {
            "name": "b_benchmark_abac_model",
            "value": 46844,
            "range": "± 12093",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_basic_model",
            "value": 47972,
            "range": "± 10209",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_abac_model",
            "value": 358,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_key_match",
            "value": 342,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_priority_model",
            "value": 330,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model",
            "value": 373,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_large",
            "value": 327,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_medium",
            "value": 319,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_small",
            "value": 316,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_with_domains",
            "value": 341,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_with_deny",
            "value": 366,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_with_resource_roles",
            "value": 335,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_key_match",
            "value": 130347,
            "range": "± 41028",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_priority_model",
            "value": 54123,
            "range": "± 10443",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_raw",
            "value": 7,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model",
            "value": 67673,
            "range": "± 13485",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_large",
            "value": 59535375,
            "range": "± 13899742",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_medium",
            "value": 5601935,
            "range": "± 1360556",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_small",
            "value": 588862,
            "range": "± 100756",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_with_domains",
            "value": 75363,
            "range": "± 15477",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_deny",
            "value": 73855,
            "range": "± 24103",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_resource_roles",
            "value": 66877,
            "range": "± 12818",
            "unit": "ns/iter"
          },
          {
            "name": "b_benmark_cached_basic_model",
            "value": 308,
            "range": "± 76",
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
          "id": "cfff9fa2eecabc79cfab2bc4c602687bd7ab5643",
          "message": "Share engine (#117)\n\n* share engine with static lifetime\r\n\r\n* fix add_function\r\n\r\n* replace unreachable code by panic",
          "timestamp": "2020-04-16T16:00:27+02:00",
          "tree_id": "a24832750ce86ef6f1c844b24ad5cb1fd617c078",
          "url": "https://github.com/casbin/casbin-rs/commit/cfff9fa2eecabc79cfab2bc4c602687bd7ab5643"
        },
        "date": 1587045890221,
        "tool": "cargo",
        "benches": [
          {
            "name": "b_benchmark_abac_model",
            "value": 6895,
            "range": "± 1100",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_basic_model",
            "value": 10408,
            "range": "± 1247",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_abac_model",
            "value": 320,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_key_match",
            "value": 326,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_priority_model",
            "value": 317,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model",
            "value": 320,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_large",
            "value": 344,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_medium",
            "value": 333,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_small",
            "value": 320,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_with_domains",
            "value": 365,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_with_deny",
            "value": 328,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_with_resource_roles",
            "value": 321,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_key_match",
            "value": 70588,
            "range": "± 12025",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_priority_model",
            "value": 9529,
            "range": "± 1388",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_raw",
            "value": 7,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model",
            "value": 25729,
            "range": "± 3897",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_large",
            "value": 57621527,
            "range": "± 6238273",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_medium",
            "value": 5644889,
            "range": "± 671904",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_small",
            "value": 542675,
            "range": "± 72973",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_with_domains",
            "value": 39433,
            "range": "± 4118",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_deny",
            "value": 32823,
            "range": "± 3322",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_resource_roles",
            "value": 23127,
            "range": "± 2767",
            "unit": "ns/iter"
          },
          {
            "name": "b_benmark_cached_basic_model",
            "value": 322,
            "range": "± 34",
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
          "id": "f7f877d1ec67d7d7ec581da1f063a3275e33d54d",
          "message": "change from experimental -> production-ready",
          "timestamp": "2020-04-17T11:17:12+02:00",
          "tree_id": "d32b289e4b86f51d7dc704205273ac00e30c8689",
          "url": "https://github.com/casbin/casbin-rs/commit/f7f877d1ec67d7d7ec581da1f063a3275e33d54d"
        },
        "date": 1587115236747,
        "tool": "cargo",
        "benches": [
          {
            "name": "b_benchmark_abac_model",
            "value": 7452,
            "range": "± 867",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_basic_model",
            "value": 11945,
            "range": "± 651",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_abac_model",
            "value": 353,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_key_match",
            "value": 363,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_priority_model",
            "value": 353,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model",
            "value": 350,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_large",
            "value": 356,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_medium",
            "value": 353,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_small",
            "value": 357,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_with_domains",
            "value": 393,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_with_deny",
            "value": 353,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_with_resource_roles",
            "value": 352,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_key_match",
            "value": 72470,
            "range": "± 10340",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_priority_model",
            "value": 10913,
            "range": "± 3177",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_raw",
            "value": 9,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model",
            "value": 28622,
            "range": "± 2549",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_large",
            "value": 65740304,
            "range": "± 2996152",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_medium",
            "value": 6278699,
            "range": "± 581598",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_small",
            "value": 628806,
            "range": "± 34316",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_with_domains",
            "value": 45225,
            "range": "± 13600",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_deny",
            "value": 37737,
            "range": "± 2551",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_resource_roles",
            "value": 26229,
            "range": "± 1042",
            "unit": "ns/iter"
          },
          {
            "name": "b_benmark_cached_basic_model",
            "value": 351,
            "range": "± 10",
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
          "id": "222c27dfccdcd4c421fdbd9419bcec6aa054ceaa",
          "message": "Stable filtered adapter (#120)\n\n* remove extra collect and fix visibility of fileadapter\r\n\r\n* fix save_policy event data\r\n\r\n* finish stable version of filtered adapter\r\n\r\n* FIX CI.",
          "timestamp": "2020-04-18T11:10:26+02:00",
          "tree_id": "d9e0433c8e2dbad6bc35c27263de2a72628b90ef",
          "url": "https://github.com/casbin/casbin-rs/commit/222c27dfccdcd4c421fdbd9419bcec6aa054ceaa"
        },
        "date": 1587201213725,
        "tool": "cargo",
        "benches": [
          {
            "name": "b_benchmark_abac_model",
            "value": 7241,
            "range": "± 419",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_basic_model",
            "value": 11548,
            "range": "± 528",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_abac_model",
            "value": 341,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_key_match",
            "value": 349,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_priority_model",
            "value": 346,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model",
            "value": 340,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_large",
            "value": 345,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_medium",
            "value": 340,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_small",
            "value": 343,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_with_domains",
            "value": 393,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_with_deny",
            "value": 352,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_with_resource_roles",
            "value": 342,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_key_match",
            "value": 69064,
            "range": "± 3864",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_priority_model",
            "value": 10426,
            "range": "± 434",
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
            "value": 27579,
            "range": "± 1632",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_large",
            "value": 62874915,
            "range": "± 4000154",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_medium",
            "value": 6086235,
            "range": "± 240014",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_small",
            "value": 610539,
            "range": "± 16320",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_with_domains",
            "value": 43214,
            "range": "± 1015",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_deny",
            "value": 36276,
            "range": "± 30300",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_resource_roles",
            "value": 26056,
            "range": "± 855",
            "unit": "ns/iter"
          },
          {
            "name": "b_benmark_cached_basic_model",
            "value": 354,
            "range": "± 23",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hsluoyz@qq.com",
            "name": "Yang Luo",
            "username": "hsluoyz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "16f45d06f6aaef8586f8927a55a616c0cac35f82",
          "message": "Merge pull request #121 from GopherJ/scaling-abac-rules\n\nPOC try scaling abac rules",
          "timestamp": "2020-04-19T10:16:54+08:00",
          "tree_id": "d767275b74518c91d210b719738185eb703cfd81",
          "url": "https://github.com/casbin/casbin-rs/commit/16f45d06f6aaef8586f8927a55a616c0cac35f82"
        },
        "date": 1587262811922,
        "tool": "cargo",
        "benches": [
          {
            "name": "b_benchmark_abac_model",
            "value": 7190,
            "range": "± 1342",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_basic_model",
            "value": 11758,
            "range": "± 836",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_abac_model",
            "value": 345,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_key_match",
            "value": 352,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_priority_model",
            "value": 346,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model",
            "value": 346,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_large",
            "value": 352,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_medium",
            "value": 346,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_small",
            "value": 347,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_with_domains",
            "value": 391,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_with_deny",
            "value": 347,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_with_resource_roles",
            "value": 347,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_key_match",
            "value": 73168,
            "range": "± 4957",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_priority_model",
            "value": 10765,
            "range": "± 271",
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
            "value": 29886,
            "range": "± 841",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_large",
            "value": 64112484,
            "range": "± 1843729",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_medium",
            "value": 6176062,
            "range": "± 529655",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_small",
            "value": 620318,
            "range": "± 23303",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_with_domains",
            "value": 44385,
            "range": "± 1283",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_deny",
            "value": 36961,
            "range": "± 1441",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_resource_roles",
            "value": 26425,
            "range": "± 1593",
            "unit": "ns/iter"
          },
          {
            "name": "b_benmark_cached_basic_model",
            "value": 352,
            "range": "± 17",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jiang.cheng@vip.163.com",
            "name": "Cheng JIANG",
            "username": "GopherJ"
          },
          "committer": {
            "email": "jiang.cheng@vip.163.com",
            "name": "Cheng JIANG",
            "username": "GopherJ"
          },
          "distinct": true,
          "id": "eb6ceebba173ed742ee65607449250109c37235e",
          "message": "use lazy_static for key_match2,3",
          "timestamp": "2020-04-19T14:49:36+02:00",
          "tree_id": "39a62bd1363d8109b784e9d74e724d1f8041605b",
          "url": "https://github.com/casbin/casbin-rs/commit/eb6ceebba173ed742ee65607449250109c37235e"
        },
        "date": 1587300782431,
        "tool": "cargo",
        "benches": [
          {
            "name": "b_benchmark_abac_model",
            "value": 7398,
            "range": "± 547",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_basic_model",
            "value": 12188,
            "range": "± 716",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_abac_model",
            "value": 361,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_key_match",
            "value": 369,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_priority_model",
            "value": 366,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model",
            "value": 361,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_large",
            "value": 364,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_medium",
            "value": 355,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_small",
            "value": 361,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_with_domains",
            "value": 407,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_with_deny",
            "value": 366,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_with_resource_roles",
            "value": 364,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_key_match",
            "value": 72058,
            "range": "± 3417",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_priority_model",
            "value": 10995,
            "range": "± 1108",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_raw",
            "value": 9,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model",
            "value": 29527,
            "range": "± 3315",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_large",
            "value": 68459877,
            "range": "± 2749052",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_medium",
            "value": 6572376,
            "range": "± 482969",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_small",
            "value": 652809,
            "range": "± 48048",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_with_domains",
            "value": 45471,
            "range": "± 7797",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_deny",
            "value": 38068,
            "range": "± 803",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_resource_roles",
            "value": 26937,
            "range": "± 656",
            "unit": "ns/iter"
          },
          {
            "name": "b_benmark_cached_basic_model",
            "value": 361,
            "range": "± 11",
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
          "id": "87bc38279a42f62f21fb4d6b5fb6d2df7b547698",
          "message": "add get_all_policy, get_all_grouping_policy (#124)\n\n* add get_all_policy, get_all_grouping_policy\r\n\r\n* replace hashmap by indexmap for assertion\r\n\r\n* fix set_role_manager",
          "timestamp": "2020-04-22T12:07:25+02:00",
          "tree_id": "2d0b62702ac0385f8551b4a1f9e229786ba181aa",
          "url": "https://github.com/casbin/casbin-rs/commit/87bc38279a42f62f21fb4d6b5fb6d2df7b547698"
        },
        "date": 1587550332541,
        "tool": "cargo",
        "benches": [
          {
            "name": "b_benchmark_abac_model",
            "value": 7652,
            "range": "± 2316",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_basic_model",
            "value": 11559,
            "range": "± 1932",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_abac_model",
            "value": 343,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_key_match",
            "value": 353,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_priority_model",
            "value": 344,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model",
            "value": 335,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_large",
            "value": 352,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_medium",
            "value": 334,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_small",
            "value": 353,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_with_domains",
            "value": 385,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_with_deny",
            "value": 348,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_with_resource_roles",
            "value": 338,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_key_match",
            "value": 76420,
            "range": "± 21280",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_priority_model",
            "value": 10408,
            "range": "± 2632",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_raw",
            "value": 8,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model",
            "value": 28293,
            "range": "± 8127",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_large",
            "value": 63659801,
            "range": "± 7986686",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_medium",
            "value": 6211276,
            "range": "± 1170614",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_small",
            "value": 624425,
            "range": "± 152763",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_with_domains",
            "value": 42452,
            "range": "± 8275",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_deny",
            "value": 36378,
            "range": "± 7162",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_resource_roles",
            "value": 25342,
            "range": "± 4835",
            "unit": "ns/iter"
          },
          {
            "name": "b_benmark_cached_basic_model",
            "value": 336,
            "range": "± 76",
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
          "id": "0b42f13d8b601174b638f67d388242bc874996b7",
          "message": "add simple quick return (#126)\n\n* add simple quick return\r\n\r\n* Fix CI.\r\n\r\n* add urls for badges\r\n\r\n* simplify code",
          "timestamp": "2020-04-25T20:14:02+02:00",
          "tree_id": "521c94a3d81afa7e37f5cc7ce11d6cc883b51efc",
          "url": "https://github.com/casbin/casbin-rs/commit/0b42f13d8b601174b638f67d388242bc874996b7"
        },
        "date": 1587838674979,
        "tool": "cargo",
        "benches": [
          {
            "name": "b_benchmark_abac_model",
            "value": 6453,
            "range": "± 721",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_basic_model",
            "value": 6318,
            "range": "± 529",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_abac_model",
            "value": 312,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_key_match",
            "value": 321,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_priority_model",
            "value": 317,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model",
            "value": 313,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_large",
            "value": 310,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_medium",
            "value": 316,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_small",
            "value": 319,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_with_domains",
            "value": 360,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_with_deny",
            "value": 319,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_with_resource_roles",
            "value": 321,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_key_match",
            "value": 26690,
            "range": "± 3198",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_priority_model",
            "value": 7644,
            "range": "± 776",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_raw",
            "value": 7,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model",
            "value": 18724,
            "range": "± 4313",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_large",
            "value": 53570581,
            "range": "± 4745286",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_medium",
            "value": 5309593,
            "range": "± 732776",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_small",
            "value": 534861,
            "range": "± 111494",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_with_domains",
            "value": 12354,
            "range": "± 1914",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_deny",
            "value": 31328,
            "range": "± 3000",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_resource_roles",
            "value": 9499,
            "range": "± 2318",
            "unit": "ns/iter"
          },
          {
            "name": "b_benmark_cached_basic_model",
            "value": 313,
            "range": "± 56",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jiang.cheng@vip.163.com",
            "name": "Cheng JIANG",
            "username": "GopherJ"
          },
          "committer": {
            "email": "jiang.cheng@vip.163.com",
            "name": "Cheng JIANG",
            "username": "GopherJ"
          },
          "distinct": true,
          "id": "cdd1aa380fe64126bbefd8a5f1b3a08b46e78513",
          "message": "bump version",
          "timestamp": "2020-04-25T21:12:15+02:00",
          "tree_id": "de912e7045fcfa32dca73858fe1fc6aacdffe8fe",
          "url": "https://github.com/casbin/casbin-rs/commit/cdd1aa380fe64126bbefd8a5f1b3a08b46e78513"
        },
        "date": 1587842189432,
        "tool": "cargo",
        "benches": [
          {
            "name": "b_benchmark_abac_model",
            "value": 7631,
            "range": "± 515",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_basic_model",
            "value": 7008,
            "range": "± 334",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_abac_model",
            "value": 343,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_key_match",
            "value": 363,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_priority_model",
            "value": 346,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model",
            "value": 346,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_large",
            "value": 344,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_medium",
            "value": 340,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_small",
            "value": 346,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_with_domains",
            "value": 387,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_with_deny",
            "value": 346,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_with_resource_roles",
            "value": 347,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_key_match",
            "value": 30114,
            "range": "± 3802",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_priority_model",
            "value": 8367,
            "range": "± 196",
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
            "value": 21385,
            "range": "± 9409",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_large",
            "value": 62970186,
            "range": "± 3898447",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_medium",
            "value": 6098596,
            "range": "± 757080",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_small",
            "value": 595040,
            "range": "± 94365",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_with_domains",
            "value": 13956,
            "range": "± 2885",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_deny",
            "value": 34486,
            "range": "± 3055",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_resource_roles",
            "value": 9195,
            "range": "± 488",
            "unit": "ns/iter"
          },
          {
            "name": "b_benmark_cached_basic_model",
            "value": 349,
            "range": "± 31",
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
          "id": "8b99a32038b6d3e1652c1ef5054a8887660239cc",
          "message": "upgrade rhai to 0.13.0 (#128)",
          "timestamp": "2020-04-30T15:48:13+02:00",
          "tree_id": "6897019d485f7da16fda7fbc63c9b3c0a94d5058",
          "url": "https://github.com/casbin/casbin-rs/commit/8b99a32038b6d3e1652c1ef5054a8887660239cc"
        },
        "date": 1588254698109,
        "tool": "cargo",
        "benches": [
          {
            "name": "b_benchmark_abac_model",
            "value": 8283,
            "range": "± 1706",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_basic_model",
            "value": 8152,
            "range": "± 1023",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_abac_model",
            "value": 359,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_key_match",
            "value": 358,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_priority_model",
            "value": 352,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model",
            "value": 354,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_large",
            "value": 372,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_medium",
            "value": 376,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_small",
            "value": 365,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_with_domains",
            "value": 396,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_with_deny",
            "value": 353,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_with_resource_roles",
            "value": 353,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_key_match",
            "value": 27714,
            "range": "± 2107",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_priority_model",
            "value": 9402,
            "range": "± 1109",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_raw",
            "value": 9,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model",
            "value": 22905,
            "range": "± 2282",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_large",
            "value": 70634264,
            "range": "± 2477453",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_medium",
            "value": 6733058,
            "range": "± 665696",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_small",
            "value": 665837,
            "range": "± 42676",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_with_domains",
            "value": 13486,
            "range": "± 602",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_deny",
            "value": 39069,
            "range": "± 6571",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_resource_roles",
            "value": 10322,
            "range": "± 1144",
            "unit": "ns/iter"
          },
          {
            "name": "b_benmark_cached_basic_model",
            "value": 352,
            "range": "± 13",
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
          "id": "ce8f59c6ad6694872c44f1b4d9dda99d0467dc0d",
          "message": "fix get_implicit_users_for_permission api (#129)\n\n* fix get_implicit_users_for_permission api\r\n\r\n* fix typo",
          "timestamp": "2020-05-01T00:04:21+02:00",
          "tree_id": "89eafd195a94049b175adb7e824f5e13a3404df7",
          "url": "https://github.com/casbin/casbin-rs/commit/ce8f59c6ad6694872c44f1b4d9dda99d0467dc0d"
        },
        "date": 1588284501368,
        "tool": "cargo",
        "benches": [
          {
            "name": "b_benchmark_abac_model",
            "value": 7166,
            "range": "± 842",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_basic_model",
            "value": 7500,
            "range": "± 621",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_abac_model",
            "value": 331,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_key_match",
            "value": 342,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_priority_model",
            "value": 334,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model",
            "value": 326,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_large",
            "value": 352,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_medium",
            "value": 340,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_small",
            "value": 336,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_with_domains",
            "value": 386,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_with_deny",
            "value": 340,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_with_resource_roles",
            "value": 341,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_key_match",
            "value": 25421,
            "range": "± 1231",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_priority_model",
            "value": 8929,
            "range": "± 879",
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
            "value": 21399,
            "range": "± 2356",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_large",
            "value": 66155679,
            "range": "± 5828028",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_medium",
            "value": 6331783,
            "range": "± 793826",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_small",
            "value": 625552,
            "range": "± 55728",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_with_domains",
            "value": 12996,
            "range": "± 1015",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_deny",
            "value": 37067,
            "range": "± 2962",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_resource_roles",
            "value": 10005,
            "range": "± 774",
            "unit": "ns/iter"
          },
          {
            "name": "b_benmark_cached_basic_model",
            "value": 340,
            "range": "± 26",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jiang.cheng@vip.163.com",
            "name": "Cheng JIANG",
            "username": "GopherJ"
          },
          "committer": {
            "email": "jiang.cheng@vip.163.com",
            "name": "Cheng JIANG",
            "username": "GopherJ"
          },
          "distinct": true,
          "id": "5abee4044fdad62793ff5399cc366433deb1730a",
          "message": "bump version",
          "timestamp": "2020-05-01T15:00:27+02:00",
          "tree_id": "92ce6df76657fd005d136067b15ede8812521164",
          "url": "https://github.com/casbin/casbin-rs/commit/5abee4044fdad62793ff5399cc366433deb1730a"
        },
        "date": 1588338304784,
        "tool": "cargo",
        "benches": [
          {
            "name": "b_benchmark_abac_model",
            "value": 6856,
            "range": "± 1895",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_basic_model",
            "value": 7547,
            "range": "± 897",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_abac_model",
            "value": 336,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_key_match",
            "value": 367,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_priority_model",
            "value": 351,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model",
            "value": 354,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_large",
            "value": 356,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_medium",
            "value": 346,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_small",
            "value": 343,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_with_domains",
            "value": 377,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_with_deny",
            "value": 357,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_with_resource_roles",
            "value": 334,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_key_match",
            "value": 26000,
            "range": "± 6894",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_priority_model",
            "value": 8812,
            "range": "± 1618",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_raw",
            "value": 8,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model",
            "value": 21641,
            "range": "± 2731",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_large",
            "value": 61441661,
            "range": "± 7403545",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_medium",
            "value": 6188737,
            "range": "± 679474",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_small",
            "value": 640750,
            "range": "± 107304",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_with_domains",
            "value": 12779,
            "range": "± 2450",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_deny",
            "value": 37710,
            "range": "± 4859",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_resource_roles",
            "value": 10106,
            "range": "± 1640",
            "unit": "ns/iter"
          },
          {
            "name": "b_benmark_cached_basic_model",
            "value": 366,
            "range": "± 44",
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
          "id": "77e5ec606fe1236b336c80664ed5a211a94df7f7",
          "message": "fix stackoverflow when circular link detected (#131)",
          "timestamp": "2020-05-05T19:27:18+02:00",
          "tree_id": "dc083b938449cc27cfea769f90d6b793a99f8762",
          "url": "https://github.com/casbin/casbin-rs/commit/77e5ec606fe1236b336c80664ed5a211a94df7f7"
        },
        "date": 1588699832312,
        "tool": "cargo",
        "benches": [
          {
            "name": "b_benchmark_abac_model",
            "value": 7286,
            "range": "± 170",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_basic_model",
            "value": 7706,
            "range": "± 1059",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_abac_model",
            "value": 361,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_key_match",
            "value": 341,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_priority_model",
            "value": 338,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model",
            "value": 338,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_large",
            "value": 368,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_medium",
            "value": 337,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_small",
            "value": 336,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_with_domains",
            "value": 376,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_with_deny",
            "value": 336,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_with_resource_roles",
            "value": 344,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_key_match",
            "value": 25777,
            "range": "± 987",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_priority_model",
            "value": 9191,
            "range": "± 555",
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
            "value": 22012,
            "range": "± 2612",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_large",
            "value": 67360520,
            "range": "± 3306315",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_medium",
            "value": 6360012,
            "range": "± 359752",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_small",
            "value": 637302,
            "range": "± 30620",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_with_domains",
            "value": 13038,
            "range": "± 538",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_deny",
            "value": 37015,
            "range": "± 1667",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_resource_roles",
            "value": 10155,
            "range": "± 2629",
            "unit": "ns/iter"
          },
          {
            "name": "b_benmark_cached_basic_model",
            "value": 346,
            "range": "± 17",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hsluoyz@qq.com",
            "name": "Yang Luo",
            "username": "hsluoyz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6d1e0d639bdb85588b18b2d953ee07073f96bfe7",
          "message": "Merge pull request #132 from casbin/enforce_immutable\n\nmake enforce immutable and add enforce_mut",
          "timestamp": "2020-05-08T14:36:48+08:00",
          "tree_id": "67c79d927ac0c37113670dfbff55c2e39d47adfe",
          "url": "https://github.com/casbin/casbin-rs/commit/6d1e0d639bdb85588b18b2d953ee07073f96bfe7"
        },
        "date": 1588920021672,
        "tool": "cargo",
        "benches": [
          {
            "name": "b_benchmark_abac_model",
            "value": 7331,
            "range": "± 1816",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_basic_model",
            "value": 7813,
            "range": "± 563",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_abac_model",
            "value": 335,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_key_match",
            "value": 342,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_priority_model",
            "value": 335,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model",
            "value": 337,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_large",
            "value": 339,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_medium",
            "value": 334,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_small",
            "value": 337,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_with_domains",
            "value": 391,
            "range": "± 183",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_with_deny",
            "value": 338,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_with_resource_roles",
            "value": 341,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_key_match",
            "value": 26050,
            "range": "± 10081",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_priority_model",
            "value": 9352,
            "range": "± 2058",
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
            "value": 22216,
            "range": "± 368",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_large",
            "value": 67561611,
            "range": "± 4136479",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_medium",
            "value": 6365015,
            "range": "± 559646",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_small",
            "value": 631324,
            "range": "± 31607",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_with_domains",
            "value": 13001,
            "range": "± 1274",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_deny",
            "value": 37835,
            "range": "± 3896",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_resource_roles",
            "value": 10038,
            "range": "± 350",
            "unit": "ns/iter"
          },
          {
            "name": "b_benmark_cached_basic_model",
            "value": 333,
            "range": "± 25",
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
          "id": "84a9d0f94244d07d8357fe469f7a4d2100bba065",
          "message": "remove circular link caused by pattern matching func (#133)",
          "timestamp": "2020-05-08T14:50:25+02:00",
          "tree_id": "a782f6ab5bc3df10a487471fb9f8dafbc4d5247f",
          "url": "https://github.com/casbin/casbin-rs/commit/84a9d0f94244d07d8357fe469f7a4d2100bba065"
        },
        "date": 1588942414990,
        "tool": "cargo",
        "benches": [
          {
            "name": "b_benchmark_abac_model",
            "value": 5984,
            "range": "± 1658",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_basic_model",
            "value": 6648,
            "range": "± 3508",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_abac_model",
            "value": 262,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_key_match",
            "value": 247,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_priority_model",
            "value": 270,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model",
            "value": 264,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_large",
            "value": 237,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_medium",
            "value": 233,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_small",
            "value": 254,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_with_domains",
            "value": 275,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_with_deny",
            "value": 250,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_with_resource_roles",
            "value": 232,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_key_match",
            "value": 18289,
            "range": "± 5172",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_priority_model",
            "value": 6750,
            "range": "± 1980",
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
            "value": 16645,
            "range": "± 2807",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_large",
            "value": 49315561,
            "range": "± 7393386",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_medium",
            "value": 4793411,
            "range": "± 668415",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_small",
            "value": 483140,
            "range": "± 72407",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_with_domains",
            "value": 9099,
            "range": "± 2463",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_deny",
            "value": 28283,
            "range": "± 9529",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_resource_roles",
            "value": 7303,
            "range": "± 1938",
            "unit": "ns/iter"
          },
          {
            "name": "b_benmark_cached_basic_model",
            "value": 254,
            "range": "± 75",
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
          "id": "74adf857b83e180bcbb9d96aef5c701261709c0e",
          "message": "Simple logger (#134)\n\n* define casbin's own rhai package\r\n\r\n* remove transparent error to make casbin error explicit\r\n\r\n* implement TryIntoAdapter for ()\r\n\r\n* add simple logger\r\n\r\n* improve format\r\n\r\n* bump version\r\n\r\n* add mgmt log\r\n\r\n* disable logging by default for better performance\r\n\r\n* fix clippy warnings",
          "timestamp": "2020-05-08T21:05:32+02:00",
          "tree_id": "df615b3d250508898e9fb7848c08542e5df914ec",
          "url": "https://github.com/casbin/casbin-rs/commit/74adf857b83e180bcbb9d96aef5c701261709c0e"
        },
        "date": 1588964972443,
        "tool": "cargo",
        "benches": [
          {
            "name": "b_benchmark_abac_model",
            "value": 7771,
            "range": "± 2534",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_basic_model",
            "value": 7726,
            "range": "± 1071",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_abac_model",
            "value": 331,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_key_match",
            "value": 345,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_priority_model",
            "value": 334,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model",
            "value": 332,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_large",
            "value": 339,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_medium",
            "value": 334,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_small",
            "value": 336,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_with_domains",
            "value": 377,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_with_deny",
            "value": 374,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_with_resource_roles",
            "value": 333,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_key_match",
            "value": 28645,
            "range": "± 5584",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_priority_model",
            "value": 9034,
            "range": "± 3131",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_raw",
            "value": 8,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model",
            "value": 21876,
            "range": "± 8320",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_large",
            "value": 70122919,
            "range": "± 9753708",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_medium",
            "value": 6637428,
            "range": "± 907977",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_small",
            "value": 702596,
            "range": "± 211110",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_with_domains",
            "value": 12784,
            "range": "± 4453",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_deny",
            "value": 41708,
            "range": "± 10487",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_resource_roles",
            "value": 11057,
            "range": "± 1929",
            "unit": "ns/iter"
          },
          {
            "name": "b_benmark_cached_basic_model",
            "value": 377,
            "range": "± 71",
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
          "id": "1824313b31d1247a5c3eeac7c4455bf909628220",
          "message": "Fix: ClearCache log wasn't trigger (#135)",
          "timestamp": "2020-05-08T21:28:37+02:00",
          "tree_id": "c78d26f01158c0cc3265e2702d0ab0a961d7fd25",
          "url": "https://github.com/casbin/casbin-rs/commit/1824313b31d1247a5c3eeac7c4455bf909628220"
        },
        "date": 1588966365597,
        "tool": "cargo",
        "benches": [
          {
            "name": "b_benchmark_abac_model",
            "value": 6978,
            "range": "± 1313",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_basic_model",
            "value": 7023,
            "range": "± 1190",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_abac_model",
            "value": 329,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_key_match",
            "value": 335,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_priority_model",
            "value": 328,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model",
            "value": 316,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_large",
            "value": 336,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_medium",
            "value": 328,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_small",
            "value": 332,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_with_domains",
            "value": 363,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_with_deny",
            "value": 322,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_with_resource_roles",
            "value": 313,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_key_match",
            "value": 25305,
            "range": "± 3271",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_priority_model",
            "value": 8981,
            "range": "± 1303",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_raw",
            "value": 8,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model",
            "value": 22176,
            "range": "± 2143",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_large",
            "value": 66588398,
            "range": "± 4405553",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_medium",
            "value": 6128903,
            "range": "± 865542",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_small",
            "value": 638322,
            "range": "± 60206",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_with_domains",
            "value": 12799,
            "range": "± 1465",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_deny",
            "value": 37412,
            "range": "± 8135",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_resource_roles",
            "value": 9790,
            "range": "± 879",
            "unit": "ns/iter"
          },
          {
            "name": "b_benmark_cached_basic_model",
            "value": 328,
            "range": "± 38",
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
          "id": "23af2bf5da713515425eda4fc9af1a094ce765ed",
          "message": "Split code into features (#137)\n\n* upgrade async-std to 1.6 beta\r\n\r\n* add ip feature\r\n\r\n* add glob feature\r\n\r\n* add cacehd feature\r\n\r\n* fix runtime-tokio clippy warnings\r\n\r\n* add watcher feature\r\n\r\n* don't clone if watcher feature has been disabled\r\n\r\n* use https://github.com/async-rs/async-std/pull/768 for fixing tests\r\n\r\n* activate all features for bench test over previous version\r\n\r\n* benchmark pull_request and decrease the threshold\r\n\r\n* switch to github actions\r\n\r\n* fix typo\r\n\r\n* Fix: cargo test features doesn't like space\r\n\r\n* better management of feature:logging and feature:watcher\r\n\r\n* use async-std/master for testing\r\n\r\n* add basic wasm32 support\r\n\r\n* use runtime-async-std for wasm32 test\r\n\r\n* fix clippy warnings\r\n\r\n* fix typo\r\n\r\n* make other tests avalaible only on no-wasm32 target\r\n\r\n* finish split code into features && bump version",
          "timestamp": "2020-05-10T12:58:56+02:00",
          "tree_id": "452e003504c0fdf73edc42ce7f074da8d13185e8",
          "url": "https://github.com/casbin/casbin-rs/commit/23af2bf5da713515425eda4fc9af1a094ce765ed"
        },
        "date": 1589108556499,
        "tool": "cargo",
        "benches": [
          {
            "name": "b_benchmark_abac_model",
            "value": 6770,
            "range": "± 919",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_basic_model",
            "value": 7086,
            "range": "± 999",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_key_match",
            "value": 23709,
            "range": "± 3191",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_priority_model",
            "value": 8425,
            "range": "± 1024",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_raw",
            "value": 8,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model",
            "value": 20621,
            "range": "± 2827",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_large",
            "value": 61145960,
            "range": "± 6755344",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_medium",
            "value": 5889772,
            "range": "± 1155067",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_small",
            "value": 579908,
            "range": "± 86440",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_with_domains",
            "value": 12167,
            "range": "± 2039",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_deny",
            "value": 34374,
            "range": "± 5191",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_resource_roles",
            "value": 9377,
            "range": "± 1428",
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
          "id": "737ea14e67ce3cd5173d3b0ce3ede544a93dd874",
          "message": "Incremental build rolelinks (#139)\n\n* add missing sec, ptype info in EventData\r\n\r\n* finish incremental role links",
          "timestamp": "2020-05-10T21:42:14+02:00",
          "tree_id": "8ea0c018e90621142ec116f6efb71570bfd5c466",
          "url": "https://github.com/casbin/casbin-rs/commit/737ea14e67ce3cd5173d3b0ce3ede544a93dd874"
        },
        "date": 1589139973797,
        "tool": "cargo",
        "benches": [
          {
            "name": "b_benchmark_abac_model",
            "value": 7550,
            "range": "± 1430",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_basic_model",
            "value": 7556,
            "range": "± 1037",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_key_match",
            "value": 29050,
            "range": "± 5855",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_priority_model",
            "value": 9177,
            "range": "± 1014",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_raw",
            "value": 8,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model",
            "value": 20859,
            "range": "± 4971",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_large",
            "value": 65380665,
            "range": "± 9138076",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_medium",
            "value": 5403711,
            "range": "± 1430612",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_small",
            "value": 617805,
            "range": "± 114122",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_with_domains",
            "value": 11874,
            "range": "± 1987",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_deny",
            "value": 34098,
            "range": "± 7116",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_resource_roles",
            "value": 9213,
            "range": "± 2420",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jiang.cheng@vip.163.com",
            "name": "Cheng JIANG",
            "username": "GopherJ"
          },
          "committer": {
            "email": "jiang.cheng@vip.163.com",
            "name": "Cheng JIANG",
            "username": "GopherJ"
          },
          "distinct": true,
          "id": "b82b00c0cf6d0d309b40ee242a444f1e957acb81",
          "message": "bump version",
          "timestamp": "2020-05-10T21:51:45+02:00",
          "tree_id": "819965b6904fff98235029bc1695775106fd7c75",
          "url": "https://github.com/casbin/casbin-rs/commit/b82b00c0cf6d0d309b40ee242a444f1e957acb81"
        },
        "date": 1589140556352,
        "tool": "cargo",
        "benches": [
          {
            "name": "b_benchmark_abac_model",
            "value": 7493,
            "range": "± 866",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_basic_model",
            "value": 7415,
            "range": "± 899",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_key_match",
            "value": 26861,
            "range": "± 3771",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_priority_model",
            "value": 9341,
            "range": "± 1117",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_raw",
            "value": 8,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model",
            "value": 21547,
            "range": "± 2872",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_large",
            "value": 66732802,
            "range": "± 7803896",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_medium",
            "value": 6448345,
            "range": "± 697954",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_small",
            "value": 630145,
            "range": "± 62871",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_with_domains",
            "value": 12435,
            "range": "± 1477",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_deny",
            "value": 36754,
            "range": "± 3428",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_resource_roles",
            "value": 9664,
            "range": "± 1007",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jiang.cheng@vip.163.com",
            "name": "Cheng JIANG",
            "username": "GopherJ"
          },
          "committer": {
            "email": "jiang.cheng@vip.163.com",
            "name": "Cheng JIANG",
            "username": "GopherJ"
          },
          "distinct": true,
          "id": "f43bb8467554026e28b7a519c06c4bc23de58f4d",
          "message": "Fix: missing incremental feature gate",
          "timestamp": "2020-05-10T22:09:36+02:00",
          "tree_id": "6df30d39c7e7436c9fd7cbce2c02b94626d14d85",
          "url": "https://github.com/casbin/casbin-rs/commit/f43bb8467554026e28b7a519c06c4bc23de58f4d"
        },
        "date": 1589141571938,
        "tool": "cargo",
        "benches": [
          {
            "name": "b_benchmark_abac_model",
            "value": 7296,
            "range": "± 734",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_basic_model",
            "value": 7619,
            "range": "± 486",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_key_match",
            "value": 26698,
            "range": "± 1130",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_priority_model",
            "value": 9119,
            "range": "± 670",
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
            "value": 22340,
            "range": "± 2439",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_large",
            "value": 71028620,
            "range": "± 4060730",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_medium",
            "value": 6731653,
            "range": "± 524153",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_small",
            "value": 662061,
            "range": "± 35882",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_with_domains",
            "value": 12793,
            "range": "± 867",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_deny",
            "value": 37453,
            "range": "± 1646",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_resource_roles",
            "value": 10015,
            "range": "± 515",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jiang.cheng@vip.163.com",
            "name": "Cheng JIANG",
            "username": "GopherJ"
          },
          "committer": {
            "email": "jiang.cheng@vip.163.com",
            "name": "Cheng JIANG",
            "username": "GopherJ"
          },
          "distinct": true,
          "id": "edb35cb4df463ad3dd804b78a29f44d53ba410ce",
          "message": "move _ count check outside of loop",
          "timestamp": "2020-05-10T23:06:41+02:00",
          "tree_id": "10343525cb50768e35b389a69ac08beeacabe7e4",
          "url": "https://github.com/casbin/casbin-rs/commit/edb35cb4df463ad3dd804b78a29f44d53ba410ce"
        },
        "date": 1589145005193,
        "tool": "cargo",
        "benches": [
          {
            "name": "b_benchmark_abac_model",
            "value": 7365,
            "range": "± 5415",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_basic_model",
            "value": 7779,
            "range": "± 2086",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_key_match",
            "value": 25842,
            "range": "± 2251",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_priority_model",
            "value": 9009,
            "range": "± 964",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_raw",
            "value": 8,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model",
            "value": 22233,
            "range": "± 14057",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_large",
            "value": 70838101,
            "range": "± 5314903",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_medium",
            "value": 6651449,
            "range": "± 833509",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_small",
            "value": 647565,
            "range": "± 62181",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_with_domains",
            "value": 13125,
            "range": "± 2928",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_deny",
            "value": 37197,
            "range": "± 2004",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_resource_roles",
            "value": 10076,
            "range": "± 816",
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
          "id": "598a9bd00300ba6f74fefc7387790985dc42930f",
          "message": "Move build role links to internal (#140)\n\n* move build role links process to internal_api\r\n\r\n* bump version",
          "timestamp": "2020-05-11T09:37:34+02:00",
          "tree_id": "650c8102987f4e54f1cc48bf8b8d2fdfc7ea5434",
          "url": "https://github.com/casbin/casbin-rs/commit/598a9bd00300ba6f74fefc7387790985dc42930f"
        },
        "date": 1589182872850,
        "tool": "cargo",
        "benches": [
          {
            "name": "b_benchmark_abac_model",
            "value": 6421,
            "range": "± 1363",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_basic_model",
            "value": 6693,
            "range": "± 1448",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_key_match",
            "value": 24267,
            "range": "± 4058",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_priority_model",
            "value": 7745,
            "range": "± 1304",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_raw",
            "value": 7,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model",
            "value": 19798,
            "range": "± 3247",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_large",
            "value": 56061649,
            "range": "± 6381520",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_medium",
            "value": 5440739,
            "range": "± 911091",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_small",
            "value": 546371,
            "range": "± 76074",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_with_domains",
            "value": 11058,
            "range": "± 1914",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_deny",
            "value": 32953,
            "range": "± 5589",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_resource_roles",
            "value": 8678,
            "range": "± 1428",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jiang.cheng@vip.163.com",
            "name": "Cheng JIANG",
            "username": "GopherJ"
          },
          "committer": {
            "email": "jiang.cheng@vip.163.com",
            "name": "Cheng JIANG",
            "username": "GopherJ"
          },
          "distinct": true,
          "id": "9932d26c4d278c3cab5f4800c3a56dd6243f7718",
          "message": "fix logging feature && bump version",
          "timestamp": "2020-05-11T10:02:29+02:00",
          "tree_id": "e8e32ce9b2c25848be4b1d36504421136af9f3b8",
          "url": "https://github.com/casbin/casbin-rs/commit/9932d26c4d278c3cab5f4800c3a56dd6243f7718"
        },
        "date": 1589184373469,
        "tool": "cargo",
        "benches": [
          {
            "name": "b_benchmark_abac_model",
            "value": 6143,
            "range": "± 983",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_basic_model",
            "value": 5965,
            "range": "± 1255",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_key_match",
            "value": 20185,
            "range": "± 4410",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_priority_model",
            "value": 8437,
            "range": "± 1596",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_raw",
            "value": 7,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model",
            "value": 21118,
            "range": "± 5128",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_large",
            "value": 64145865,
            "range": "± 12196460",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_medium",
            "value": 6331317,
            "range": "± 815518",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_small",
            "value": 601976,
            "range": "± 58379",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_with_domains",
            "value": 12762,
            "range": "± 2115",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_deny",
            "value": 35346,
            "range": "± 5259",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_resource_roles",
            "value": 9205,
            "range": "± 1085",
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
          "id": "1b0c794e76d4f534308e56d4fa467feb315f6a43",
          "message": "Effector stream (#142)\n\n* basic implementation of effector stream on runtime-async-std, runtime-tokio\r\n\r\n* resolve runtime-async-std warnings\r\n\r\n* resolve runtime-tokio warnings\r\n\r\n* fix casbin::error::Error\r\n\r\n* bump version",
          "timestamp": "2020-05-11T12:12:07+02:00",
          "tree_id": "46751ea88fe404ff733159d16a4ac60ea9833915",
          "url": "https://github.com/casbin/casbin-rs/commit/1b0c794e76d4f534308e56d4fa467feb315f6a43"
        },
        "date": 1589192143209,
        "tool": "cargo",
        "benches": [
          {
            "name": "b_benchmark_abac_model",
            "value": 58061,
            "range": "± 6369",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_basic_model",
            "value": 60557,
            "range": "± 17608",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_key_match",
            "value": 106008,
            "range": "± 28468",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_priority_model",
            "value": 79210,
            "range": "± 14248",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_raw",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model",
            "value": 63522,
            "range": "± 21054",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_large",
            "value": 53207476,
            "range": "± 21292239",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_medium",
            "value": 5759372,
            "range": "± 1906025",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_small",
            "value": 586894,
            "range": "± 96950",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_with_domains",
            "value": 72156,
            "range": "± 13846",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_deny",
            "value": 68315,
            "range": "± 13559",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_resource_roles",
            "value": 68146,
            "range": "± 21408",
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
          "id": "199b4fa75b2e13597be0f88c59d1ced7ee673591",
          "message": "Fix: CI (#143)",
          "timestamp": "2020-05-11T12:32:29+02:00",
          "tree_id": "25f245f6b05bba7b9908dcfa2d3729a08e8181a4",
          "url": "https://github.com/casbin/casbin-rs/commit/199b4fa75b2e13597be0f88c59d1ced7ee673591"
        },
        "date": 1589193366955,
        "tool": "cargo",
        "benches": [
          {
            "name": "b_benchmark_abac_model",
            "value": 62951,
            "range": "± 24709",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_basic_model",
            "value": 55024,
            "range": "± 25524",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_key_match",
            "value": 123284,
            "range": "± 36043",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_priority_model",
            "value": 88545,
            "range": "± 8431",
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
            "value": 72106,
            "range": "± 13114",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_large",
            "value": 64615240,
            "range": "± 14392813",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_medium",
            "value": 6485224,
            "range": "± 486283",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_small",
            "value": 685933,
            "range": "± 32001",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_with_domains",
            "value": 85779,
            "range": "± 9473",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_deny",
            "value": 83280,
            "range": "± 47927",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_resource_roles",
            "value": 68465,
            "range": "± 12379",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "casbin",
            "username": "casbin"
          },
          "committer": {
            "name": "casbin",
            "username": "casbin"
          },
          "id": "ef80c15c041e99d3fea6125fd7e24f7f9f0f39f5",
          "message": "Revert \"Fix: CI\"",
          "timestamp": "2020-05-11T10:32:33Z",
          "url": "https://github.com/casbin/casbin-rs/pull/146/commits/ef80c15c041e99d3fea6125fd7e24f7f9f0f39f5"
        },
        "date": 1589242741426,
        "tool": "cargo",
        "benches": [
          {
            "name": "b_benchmark_abac_model",
            "value": 53112,
            "range": "± 8021",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_basic_model",
            "value": 56734,
            "range": "± 18632",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_key_match",
            "value": 109389,
            "range": "± 28814",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_priority_model",
            "value": 87172,
            "range": "± 19820",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_raw",
            "value": 8,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model",
            "value": 71500,
            "range": "± 19090",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_large",
            "value": 60281086,
            "range": "± 8452780",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_medium",
            "value": 5789113,
            "range": "± 977025",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_small",
            "value": 634401,
            "range": "± 111737",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_with_domains",
            "value": 83930,
            "range": "± 9109",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_deny",
            "value": 76311,
            "range": "± 15572",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_resource_roles",
            "value": 66257,
            "range": "± 21951",
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
          "id": "7344df3282d6a9c62fb49440ffbd1549495aedb5",
          "message": "Revert \"Effector stream (#142)\" (#147)\n\nThis reverts commit 1b0c794e76d4f534308e56d4fa467feb315f6a43.",
          "timestamp": "2020-05-12T02:16:11+02:00",
          "tree_id": "e8e32ce9b2c25848be4b1d36504421136af9f3b8",
          "url": "https://github.com/casbin/casbin-rs/commit/7344df3282d6a9c62fb49440ffbd1549495aedb5"
        },
        "date": 1589242764174,
        "tool": "cargo",
        "benches": [
          {
            "name": "b_benchmark_abac_model",
            "value": 7165,
            "range": "± 504",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_basic_model",
            "value": 7647,
            "range": "± 1202",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_key_match",
            "value": 24971,
            "range": "± 3367",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_priority_model",
            "value": 8982,
            "range": "± 893",
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
            "value": 21996,
            "range": "± 3136",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_large",
            "value": 68148724,
            "range": "± 6070231",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_medium",
            "value": 6274166,
            "range": "± 1001440",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_small",
            "value": 641414,
            "range": "± 59352",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_with_domains",
            "value": 12996,
            "range": "± 3928",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_deny",
            "value": 37308,
            "range": "± 3433",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_resource_roles",
            "value": 10106,
            "range": "± 541",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "casbin",
            "username": "casbin"
          },
          "committer": {
            "name": "casbin",
            "username": "casbin"
          },
          "id": "a17966fca27e367fe6f186fc3bb6d2fab913845e",
          "message": "Revert \"Effector stream\"",
          "timestamp": "2020-05-12T00:15:50Z",
          "url": "https://github.com/casbin/casbin-rs/pull/147/commits/a17966fca27e367fe6f186fc3bb6d2fab913845e"
        },
        "date": 1589242775091,
        "tool": "cargo",
        "benches": [
          {
            "name": "b_benchmark_abac_model",
            "value": 6390,
            "range": "± 1547",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_basic_model",
            "value": 6940,
            "range": "± 1096",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_key_match",
            "value": 23457,
            "range": "± 3075",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_priority_model",
            "value": 8069,
            "range": "± 1285",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_raw",
            "value": 8,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model",
            "value": 18756,
            "range": "± 6510",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_large",
            "value": 59002675,
            "range": "± 5430811",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_medium",
            "value": 5451759,
            "range": "± 706711",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_small",
            "value": 577662,
            "range": "± 92214",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_with_domains",
            "value": 11112,
            "range": "± 1818",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_deny",
            "value": 34376,
            "range": "± 7687",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_resource_roles",
            "value": 8726,
            "range": "± 1258",
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
          "id": "1ed84eace72874ff8ad92e4aab216ecbd824cc77",
          "message": "Revert \"Fix: CI (#143)\" (#146)\n\nThis reverts commit 199b4fa75b2e13597be0f88c59d1ced7ee673591.",
          "timestamp": "2020-05-12T02:15:46+02:00",
          "tree_id": "46751ea88fe404ff733159d16a4ac60ea9833915",
          "url": "https://github.com/casbin/casbin-rs/commit/1ed84eace72874ff8ad92e4aab216ecbd824cc77"
        },
        "date": 1589242783067,
        "tool": "cargo",
        "benches": [
          {
            "name": "b_benchmark_abac_model",
            "value": 53309,
            "range": "± 22316",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_basic_model",
            "value": 78163,
            "range": "± 8585",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_key_match",
            "value": 120899,
            "range": "± 9597",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_priority_model",
            "value": 89611,
            "range": "± 11510",
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
            "value": 71003,
            "range": "± 5172",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_large",
            "value": 66814948,
            "range": "± 1921795",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_medium",
            "value": 6420130,
            "range": "± 360340",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_small",
            "value": 683168,
            "range": "± 62901",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_with_domains",
            "value": 85420,
            "range": "± 17004",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_deny",
            "value": 79068,
            "range": "± 9563",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_resource_roles",
            "value": 67024,
            "range": "± 14352",
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
          "id": "e99cfa32e037de3343744c9bb59c921535e543a3",
          "message": "finish effector stream (#145)\n\n* finish effector stream\r\n\r\n* simplify code\r\n\r\n* bump version\r\n\r\n* add assert to make sure that when we call current it's already finished\r\n\r\n* Fix: clippy warnings",
          "timestamp": "2020-05-12T02:36:47+02:00",
          "tree_id": "ee4ca5f34748f4fdff69b300605eb624c2d20ac3",
          "url": "https://github.com/casbin/casbin-rs/commit/e99cfa32e037de3343744c9bb59c921535e543a3"
        },
        "date": 1589244012625,
        "tool": "cargo",
        "benches": [
          {
            "name": "b_benchmark_abac_model",
            "value": 7430,
            "range": "± 505",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_basic_model",
            "value": 7599,
            "range": "± 494",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_key_match",
            "value": 25752,
            "range": "± 1693",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_priority_model",
            "value": 9230,
            "range": "± 865",
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
            "value": 22119,
            "range": "± 2127",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_large",
            "value": 66038660,
            "range": "± 3265971",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_medium",
            "value": 6290208,
            "range": "± 822761",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_small",
            "value": 634671,
            "range": "± 16311",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_with_domains",
            "value": 12935,
            "range": "± 1399",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_deny",
            "value": 37612,
            "range": "± 3101",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_resource_roles",
            "value": 10113,
            "range": "± 556",
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
          "id": "d58d184b5f4e90f1bfe425fbd54d6a7d64bc64f5",
          "message": "Explain (#149)\n\n* improve effector stream and memory usage\r\n\r\n* add cap assert\r\n\r\n* simplify code\r\n\r\n* simplify code\r\n\r\n* finish basic explain feature\r\n\r\n* bump version\r\n\r\n* adjust has_policy condition",
          "timestamp": "2020-05-12T13:45:19+02:00",
          "tree_id": "e013785c6f5fc937537d6802e0fb653cd5e983f9",
          "url": "https://github.com/casbin/casbin-rs/commit/d58d184b5f4e90f1bfe425fbd54d6a7d64bc64f5"
        },
        "date": 1589284091582,
        "tool": "cargo",
        "benches": [
          {
            "name": "b_benchmark_abac_model",
            "value": 6462,
            "range": "± 1919",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_basic_model",
            "value": 6313,
            "range": "± 1956",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_key_match",
            "value": 22280,
            "range": "± 3343",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_priority_model",
            "value": 7063,
            "range": "± 2101",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_raw",
            "value": 6,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model",
            "value": 16206,
            "range": "± 2066",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_large",
            "value": 52831171,
            "range": "± 6944959",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_medium",
            "value": 4926591,
            "range": "± 1034604",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_small",
            "value": 492655,
            "range": "± 223459",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_with_domains",
            "value": 9647,
            "range": "± 1822",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_deny",
            "value": 27970,
            "range": "± 6229",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_resource_roles",
            "value": 7534,
            "range": "± 5593",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jiang.cheng@vip.163.com",
            "name": "Cheng JIANG",
            "username": "GopherJ"
          },
          "committer": {
            "email": "jiang.cheng@vip.163.com",
            "name": "Cheng JIANG",
            "username": "GopherJ"
          },
          "distinct": true,
          "id": "b81c9cf6b721f92f6d458a34413903f61c76b1bc",
          "message": "add missing implemented feature: explain",
          "timestamp": "2020-05-12T14:00:05+02:00",
          "tree_id": "4235cf6422189a08ab736ee704601ffb6307af3c",
          "url": "https://github.com/casbin/casbin-rs/commit/b81c9cf6b721f92f6d458a34413903f61c76b1bc"
        },
        "date": 1589285007192,
        "tool": "cargo",
        "benches": [
          {
            "name": "b_benchmark_abac_model",
            "value": 7340,
            "range": "± 855",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_basic_model",
            "value": 7602,
            "range": "± 387",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_key_match",
            "value": 25299,
            "range": "± 792",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_priority_model",
            "value": 9134,
            "range": "± 1612",
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
            "value": 22061,
            "range": "± 713",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_large",
            "value": 67418242,
            "range": "± 9395181",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_medium",
            "value": 6281580,
            "range": "± 162584",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_small",
            "value": 626906,
            "range": "± 102496",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_with_domains",
            "value": 12773,
            "range": "± 705",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_deny",
            "value": 37597,
            "range": "± 703",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_resource_roles",
            "value": 9989,
            "range": "± 422",
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
          "id": "58ca97a7d6cfae2270e50a6c4177f53e17f02a5c",
          "message": "Delete before",
          "timestamp": "2020-05-12T14:05:36+02:00",
          "tree_id": "31cdafbd7693dc79767d998335ab534069a62f74",
          "url": "https://github.com/casbin/casbin-rs/commit/58ca97a7d6cfae2270e50a6c4177f53e17f02a5c"
        },
        "date": 1589285345306,
        "tool": "cargo",
        "benches": [
          {
            "name": "b_benchmark_abac_model",
            "value": 7030,
            "range": "± 992",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_basic_model",
            "value": 7681,
            "range": "± 1066",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_key_match",
            "value": 26502,
            "range": "± 2466",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_priority_model",
            "value": 9085,
            "range": "± 1379",
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
            "value": 21954,
            "range": "± 4745",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_large",
            "value": 65274963,
            "range": "± 4107688",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_medium",
            "value": 6082538,
            "range": "± 502141",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_small",
            "value": 623305,
            "range": "± 48355",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_with_domains",
            "value": 12960,
            "range": "± 574",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_deny",
            "value": 37068,
            "range": "± 3213",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_resource_roles",
            "value": 10103,
            "range": "± 991",
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
          "id": "39e30d32bb521f8750bbd3dc474f22b717490e96",
          "message": "Delete after",
          "timestamp": "2020-05-12T14:05:26+02:00",
          "tree_id": "6710fef847fd00c6831506d5192e782b01151aa0",
          "url": "https://github.com/casbin/casbin-rs/commit/39e30d32bb521f8750bbd3dc474f22b717490e96"
        },
        "date": 1589285355978,
        "tool": "cargo",
        "benches": [
          {
            "name": "b_benchmark_abac_model",
            "value": 7241,
            "range": "± 1447",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_basic_model",
            "value": 7493,
            "range": "± 1242",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_key_match",
            "value": 26424,
            "range": "± 4366",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_priority_model",
            "value": 8751,
            "range": "± 1845",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_raw",
            "value": 8,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model",
            "value": 22574,
            "range": "± 3474",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_large",
            "value": 67451604,
            "range": "± 7249250",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_medium",
            "value": 6376973,
            "range": "± 1005561",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_small",
            "value": 662333,
            "range": "± 142413",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_with_domains",
            "value": 12877,
            "range": "± 3310",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_deny",
            "value": 38108,
            "range": "± 8433",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_resource_roles",
            "value": 10009,
            "range": "± 1497",
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
          "id": "c74b38255acd1aefdcdfec976a84b312fe97c7f2",
          "message": "general improving (#150)\n\n* make explain usable only when logging has been enabled\r\n\r\n* bench all runtime-async-std + all the other features\r\n\r\n* add bench related files into .gitignore\r\n\r\n* add macros, auto impl InternalApi",
          "timestamp": "2020-05-13T00:23:32+02:00",
          "tree_id": "ae79454ad653d786a0555cf8e8924a30c50aba70",
          "url": "https://github.com/casbin/casbin-rs/commit/c74b38255acd1aefdcdfec976a84b312fe97c7f2"
        },
        "date": 1589322491844,
        "tool": "cargo",
        "benches": [
          {
            "name": "b_benchmark_abac_model",
            "value": 6778,
            "range": "± 3486",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_basic_model",
            "value": 7054,
            "range": "± 690",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_abac_model",
            "value": 376,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_key_match",
            "value": 387,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_priority_model",
            "value": 378,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model",
            "value": 370,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_large",
            "value": 391,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_medium",
            "value": 375,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_small",
            "value": 382,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_with_domains",
            "value": 435,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_with_deny",
            "value": 372,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_with_resource_roles",
            "value": 378,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_key_match",
            "value": 26899,
            "range": "± 3707",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_priority_model",
            "value": 8548,
            "range": "± 7382",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_raw",
            "value": 7,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model",
            "value": 19624,
            "range": "± 1865",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_large",
            "value": 56662686,
            "range": "± 4800634",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_medium",
            "value": 5968089,
            "range": "± 872134",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_small",
            "value": 576149,
            "range": "± 87329",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_with_domains",
            "value": 12999,
            "range": "± 2196",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_deny",
            "value": 36298,
            "range": "± 4712",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_resource_roles",
            "value": 10089,
            "range": "± 3233",
            "unit": "ns/iter"
          },
          {
            "name": "b_benmark_cached_basic_model",
            "value": 415,
            "range": "± 41",
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
          "id": "d7c9fe604a3ee90a406e32695963491bfa7fd6aa",
          "message": "fix cached enforcer mgmt event log (#151)",
          "timestamp": "2020-05-13T00:42:09+02:00",
          "tree_id": "acd82c6308e8dadf82d2aa2d6cb54d84004c5fac",
          "url": "https://github.com/casbin/casbin-rs/commit/d7c9fe604a3ee90a406e32695963491bfa7fd6aa"
        },
        "date": 1589323563004,
        "tool": "cargo",
        "benches": [
          {
            "name": "b_benchmark_abac_model",
            "value": 7152,
            "range": "± 901",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_basic_model",
            "value": 7857,
            "range": "± 1274",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_abac_model",
            "value": 406,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_key_match",
            "value": 419,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_priority_model",
            "value": 411,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model",
            "value": 419,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_large",
            "value": 443,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_medium",
            "value": 407,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_small",
            "value": 396,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_model_with_domains",
            "value": 479,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_with_deny",
            "value": 420,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_cached_rbac_with_resource_roles",
            "value": 418,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_key_match",
            "value": 27912,
            "range": "± 3940",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_priority_model",
            "value": 9368,
            "range": "± 635",
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
            "value": 23476,
            "range": "± 2083",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_large",
            "value": 64638188,
            "range": "± 4500067",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_medium",
            "value": 6181854,
            "range": "± 372296",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_small",
            "value": 603780,
            "range": "± 56609",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_model_with_domains",
            "value": 12531,
            "range": "± 1808",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_deny",
            "value": 38855,
            "range": "± 4372",
            "unit": "ns/iter"
          },
          {
            "name": "b_benchmark_rbac_with_resource_roles",
            "value": 10557,
            "range": "± 963",
            "unit": "ns/iter"
          },
          {
            "name": "b_benmark_cached_basic_model",
            "value": 407,
            "range": "± 47",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}
module.exports = {
    config_1: {
        "flow": [
            {
                "id": "11",
                "match": {
                    "in-port": "1",
                    "ethernet-match": {
                        "ethernet-type": {
                            "type": "34887"
                        }
                    },
                    "protocol-match-fields": {
                        "mpls-label": "37"
                    }
                },
                "instructions": {
                    "instruction": [
                        {
                            "apply-actions": {
                                "action": [
                                    {
                                        "pop-mpls-action": {
                                            "ethernet-type": "2048"
                                        },
                                        "order": "1"
                                    },
                                    {
                                        "output-action": {
                                            "output-node-connector": "2",
                                            "max-length": "60"
                                        },
                                        "order": "2"
                                    }
                                ]
                            },
                            "order": "0"
                        }
                    ]
                },
                "cookie_mask": "255",
                "flow-name": "FooXf10",
                "installHw": "false",
                "strict": "false",
                "priority": "10",
                "idle-timeout": "0",
                "hard-timeout": "0",
                "cookie": "889",
                "table_id": "0"
            }
        ]
    },
    config_2:  {
        "flow": [
            {
                "id": "100",
                "match": {
                    "in-port": "2",
                    "ethernet-match": {
                        "ethernet-type": {
                            "type": "2048"
                        }
                    }
                },
                "instructions": {
                    "instruction": [
                        {
                            "apply-actions": {
                                "action": [
                                    {
                                        "push-mpls-action": {
                                            "ethernet-type": "34887"
                                        },
                                        "order": "0"
                                    },
                                    {
                                        "order": 1,
                                        "set-field": {
                                            "protocol-match-fields": {
                                                "mpls-label": 10
                                            }
                                        }
                                    },
                                    {
                                        "output-action": {
                                            "output-node-connector": "1"
                                        },
                                        "order": "2"
                                    }
                                ]
                            },
                            "order": "3"
                        }
                    ]
                },
                "cookie_mask": "255",
                "flow-name": "push-mpls-action",
                "installHw": "false",
                "strict": "false",
                "priority": "8",
                "idle-timeout": "0",
                "hard-timeout": "0",
                "cookie": "401",
                "table_id": "0"
            }
        ]
    },
}
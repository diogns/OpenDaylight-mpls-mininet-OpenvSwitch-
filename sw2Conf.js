module.exports = {
    config_1: {
        "flow": [
            {
                "id": "101",
                "match": {
                    "in-port": "1",
                    "ethernet-match": {
                        "ethernet-type": {
                            "type": "34887"
                        }
                    },
                    "protocol-match-fields": {
                        "mpls-label": "27"
                    }
                },
                "instructions": {
                    "instruction": [
                        {
                            "apply-actions": {
                                "action": [
                                    {
                                        "set-field": {
                                            "protocol-match-fields": {
                                                "mpls-label": "37"
                                            }
                                        },
                                        "order": "1"
                                    },
                                    {
                                        "output-action": {
                                            "output-node-connector": "2"
                                        },
                                        "order": "2"
                                    }
                                ]
                            },
                            "order": "2"
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
    config_2:  {
        "flow": [
            {
                "id": "110",
                "match": {
                    "in-port": "2",
                    "ethernet-match": {
                        "ethernet-type": {
                            "type": "34887"
                        }
                    },
                    "protocol-match-fields": {
                        "mpls-label": "10"
                    }
                },
                "instructions": {
                    "instruction": [
                        {
                            "apply-actions": {
                                "action": [
                                    {
                                        "set-field": {
                                            "protocol-match-fields": {
                                                "mpls-label": "20"
                                            }
                                        },
                                        "order": "1"
                                    },
                                    {
                                        "output-action": {
                                            "output-node-connector": "1"
                                        },
                                        "order": "2"
                                    }
                                ]
                            },
                            "order": "2"
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
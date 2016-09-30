export default {
  "$schema":"http://json-schema.org/draft-04/schema#",
  "id": "https://gridiron.aptible.com/schemas/software_development_lifecycle_security_controls/0.0.1",
  "type":"object",
  "title":"Software Development Lifecycle",
  "properties":{
    "security_controls": {
      "type": "object",
      "properties": {
        "source_code_management":{
          "type": "object",
          "title":"Source Code Management",
          "_dependencies": {
            "technologies": {"implemented": true },
            "types": {"implemented": true },
            "other": { "technologies": "Other" }
          },
          "required": ["implemented"],
          "properties": {
            "implemented": {
              "type":"boolean",
              "title": "Do you use a source code management system?",
              "displayProperties":{
                "showLabels":true,
                "labels":{
                  "trueLabel":"Yes",
                  "falseLabel":"No"
                }
              }
            },

            "technologies": {
              "type":"string",
              "title": "Which source code management system do you use?",
              "enum":[
                "Github",
                "GitLab",
                "BitBucket",
                "Git",
                "Perforce",
                "Subversion",
                "Other"
              ],
              "displayProperties": {
                "prompt": "Select..."
              }
            },

            "other": {
              "type": "string",
              "title": "What other source control system do you use?"
            }
          }
        },

        "designated_maintainer_per_repo":{
          "type": "object",
          "title":"Designated Maintainer",
          "required": ["implemented"],
          "properties": {
            "implemented": {
              "type":"boolean",
              "title": "Does each code repository have a single designated maintainer?",
              "displayProperties":{
                "showLabels":true,
                "labels":{
                  "trueLabel":"Yes",
                  "falseLabel":"No"
                }
              }
            }
          }
        },

        "issue_tracking":{
          "type": "object",
          "title":"Issue Tracking",
          "_dependencies": {
            "technologies": {"implemented": true },
            "types": {"implemented": true },
            "other": { "technologies": "Other" }
          },
          "required": ["implemented"],
          "properties": {
            "implemented": {
              "type":"boolean",
              "title": "Do you use an issue tracker?",
              "displayProperties":{
                "showLabels":true,
                "labels":{
                  "trueLabel":"Yes",
                  "falseLabel":"No"
                }
              }
            },

            "technologies": {
              "type":"array",
              "uniqueItems": true,
              "minItems": 1,
              "title": "Which issue tracker do you use?",
              "items": {
                "type": "string",
                "enum":[
                  "GitHub Issues",
                  "Jira",
                  "Trello",
                  "BugHerd",
                  "Bugzilla",
                  "FogBugz",
                  "Lighthouse",
                  "Trac",
                  "PivotalTracker",
                  "Sifter",
                  "Other"
                ]
              }
            },

            "other": {
              "type": "string",
              "title": "Which other issue tracker do you use?"
            }
          }
        },

        "require_code_reviews":{
          "type": "object",
          "title":"Code Reviews",
          "_dependencies": {
            "technologies": {"implemented": true },
            "allow_other_reviewers": {"implemented": true },
            "type": {"implemented": true },
            "documentation": {"implemented": true },
            "other": { "documentation": "Other" }
          },
          "required": ["implemented"],
          "properties": {
            "implemented": {
              "type":"boolean",
              "title": "Do perform code reviews prior to merging changes?",
              "displayProperties": {
                "showLabels":true,
                "labels":{
                  "trueLabel":"Yes",
                  "falseLabel":"No"
                }
              }
            },

            "type": {
              "type": "string",
              "title": "What type of code changes do you review?",
              "description": "We recommend code reviews for all substantive changes.",
              "enum":[
                "Security-related changes",
                "All substantive changes",
                "All code changes including minor changes"
              ],
              "displayProperties": {
                "prompt": "Select..."
              }
            },

            "allow_other_reviewers": {
              "type":"boolean",
              "title": "Are other developers, other than the repository's maintainer, authorized to approve code changes?",
              "displayProperties": {
                "showLabels":true,
                "labels":{
                  "trueLabel":"Yes",
                  "falseLabel":"No"
                }
              }
            },

            "documentation": {
              "type": "string",
              "title": "How is the code change approval documented?",
              "enum": [
                "GitHub Pull Request Comment",
                "Jira Issue",
                "Other"
              ],
              "displayProperties": {
                "prompt": "Select..."
              }
            },

            "other": {
              "type": "string",
              "title": "What other system do you use to document code change approval?"
            }
          }
        },

        "maintain_dependency_list_per_repo": {
          "type": "object",
          "title":"Dependency Management",
          "required": ["implemented"],
          "properties": {
            "implemented": {
              "type":"boolean",
              "title": "Does each code repository have an easily accessible list of components and dependencies?",
              "description": "E.g. a Gemfile, requirements.txt, or package.json",
              "displayProperties": {
                "showLabels":true,
                "labels":{
                  "trueLabel":"Yes",
                  "falseLabel":"No"
                }
              }
            }
          }
        },

        "continuous_integration_or_delivery":{
          "type": "object",
          "title":"Continuous Integration/Delivery",
          "_dependencies": {
            "technologies": {"implemented": true },
            "types": {"implemented": true },
            "other": { "technologies": "Other" },
            "cd_destination": { "types": "Continuous Delivery"}
          },
          "required": ["implemented"],
          "properties": {
            "implemented": {
              "type":"boolean",
              "title": "Do you use a Continuous Integration or Continuous Delivery system?",
              "displayProperties":{
                "showLabels":true,
                "labels":{
                  "trueLabel":"Yes",
                  "falseLabel":"No"
                }
              }
            },

            "types": {
              "type":"array",
              "title": "Which do you use?",
              "minItems": 1,
              "uniqueItems": true,
              "items": {
                "type": "string",
                "enum":[
                  "Continuous Integration",
                  "Continuous Delivery"
                ]
              }
            },

            "cd_destination": {
              "type": "array",
              "title": "What environments does your Continuous Delivery system deploy to?",
              "minItems": 1,
              "uniqueItems": true,
              "items": {
                "type": "string",
                "enum":[
                  "Test",
                  "Staging",
                  "Production"
                ]
              }
            },

            "technologies": {
              "type":"string",
              "title": "Which system do you use for CI/CD?",
              "description": "E.g. Travis CI",
              "enum":[
                "Travis CI",
                "Circle CI",
                "GitLab CI",
                "Codeship",
                "Jenkins",
                "Other"
              ],
              "displayProperties": {
                "prompt": "Select..."
              }
            },

            "other": {
              "type": "string",
              "title": "Which other CI/CD system do you use?"
            }
          }
        },

        "automated_testing":{
          "type": "object",
          "title":"Automated Testing",
          "_dependencies": {
            "technologies": {"implemented": true },
            "types": {"implemented": true },
            "document_test_policies": { "implemented": true },
            "test_documentation_system": { "document_test_policies": true },
            "other": { "test_documentation_system": "Other" }
          },
          "required": ["implemented"],
          "properties": {
            "implemented": {
              "type":"boolean",
              "title": "Do you perform automated testing?",
              "displayProperties":{
                "showLabels":true,
                "labels":{
                  "trueLabel":"Yes",
                  "falseLabel":"No"
                }
              }
            },

            "types": {
              "type":"array",
              "title": "Which types of automated tests do you perform?",
              "minItems": 1,
              "uniqueItems": true,
              "items": {
                "type": "string",
                "enum":[
                  "Unit",
                  "Acceptance",
                  "User Acceptance",
                  "Integration",
                  "QA"
                ]
              }
            },

            "document_test_policies": {
              "type":"boolean",
              "title": "Have you documented your test policies and procedures?",
              "displayProperties":{
                "showLabels":true,
                "labels":{
                  "trueLabel":"Yes",
                  "falseLabel":"No"
                }
              }
            },

            "test_documentation_system": {
              "type": "string",
              "title": "Where are your test policies and procedures stored?",
              "enum": [
                "Wiki",
                "Google Drive",
                "GitHub",
                "Other"
              ],
              "displayProperties": {
                "prompt": "Select..."
              }
            },

            "other": {
              "type": "string",
              "title": "What other system(s) store your testing policies and procedures?"
            }
          }
        }
      },
      "required": [
        "source_code_management", "designated_maintainer_per_repo", "issue_tracking",
        "require_code_reviews", "maintain_dependency_list_per_repo", "continuous_integration_or_delivery",
        "automated_testing"
      ]
    }
  },

  "required":["security_controls"]
}
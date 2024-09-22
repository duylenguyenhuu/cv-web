export const RESOURCE_KEYS = {
  application: {
    header: {
      userinfo1: {
        labels: {
          loggedInAs: "application.header.userinfo1.label...",
          logoutButton: "",
          them: "application.header.userinfo",
        },
      },
    },
  },
  keycloak: {
    processing: {
      messageeee: "",
    },
    error: {
      message: "",
    },
  },
  veto: {
    title: "",
    message: "",
    buttonDiscard: "",
    buttonAbort: "",
    unsavedOrLockedActivties: "",
  },
  features: {
    notification: {
      title: {
        info: "",
        error: "",
        success: "",
        warning: "",
      },
      description: {
        info: "",
        success: "",
        warning: "",
        error: "",
      },
      content: "",
    },
    pageNotFound: {
      content: "",
    },
  },
  clerk: {
    dashboard: {
      training: {
        currentTraining: "",
      },
      messages: "",
      information: "",
      recentlyViewedPersons: "",
      notes: "",
      actions: {
        returnGWG: "",
        openApplications: "",
      },
    },
    person: {
      trainingPersonTitle: "",
    },
  },
  gwg: {
    moneyLaundering: "",
    tool: "",
    bundle: {
      workItem: {
        createCoverLetters: {
          inProgress: "",
          success: "",
          failed: "",
          alreadyCreated: "",
        },
        sendQuestionnaires: {
          inProgress: "",
          success: "",
          failed: "",
          alreadySent: "",
          noWorkItemCanBeSent: "",
        },
        markWorkItemAsDone: {
          success: "",
        },
      },
    },
  },
  error: {
    unknown: "",
    gwg: {
      bundle: {
        attachment: {
          csvInvalid: "",
          coverLetters: {
            invalidMimeType: "",
          },
        },
      },
    },
    clerk: {
      application: {
        notFound: "",
      },
      training: {
        notFound: "",
        alreadyExist: "",
      },
      person: {
        notFound: "",
      },
    },
  },
};

type ResourceKeysTypeTest = {
  application: {
    header: {
      userinfo1: {
        labels: {
          loggedInAs: string;
          logoutButton: string;
          them: string;
        };
      };
    };
  };
  keycloak: {
    processing: {
      message: string;
    };
    error: {
      message: string;
    };
  };
  veto: {
    title: string;
    message: string;
    buttonDiscard: string;
    buttonAbort: string;
    unsavedOrLockedActivties: string;
  };
  features: {
    notification: {
      title: {
        info: string;
        error: string;
        success: string;
        warning: string;
      };
      description: {
        info: string;
        success: string;
        warning: string;
        error: string;
      };
      content: string;
    };
    pageNotFound: {
      content: string;
    };
  };
  clerk: {
    dashboard: {
      training: {
        currentTraining: string;
      };
      messages: string;
      information: string;
      recentlyViewedPersons: string;
      notes: string;
      actions: {
        returnGWG: string;
        openApplications: string;
      };
    };
    person: {
      trainingPersonTitle: string;
    };
  };
  gwg: {
    moneyLaundering: string;
    tool: string;
    bundle: {
      workItem: {
        createCoverLetters: {
          inProgress: string;
          success: string;
          failed: string;
          alreadyCreated: string;
        };
        sendQuestionnaires: {
          inProgress: string;
          success: string;
          failed: string;
          alreadySent: string;
          noWorkItemCanBeSent: string;
        };
        markWorkItemAsDone: {
          success: string;
        };
      };
    };
  };
  error: {
    unknown: string;
    gwg: {
      bundle: {
        attachment: {
          csvInvalid: string;
          coverLetters: {
            invalidMimeType: string;
          };
        };
      };
    };
    clerk: {
      application: {
        notFound: string;
      };
      training: {
        notFound: string;
        alreadyExist: string;
      };
      person: {
        notFound: string;
      };
    };
  };
};

const a = RESOURCE_KEYS.application.header.userinfo1.labels.loggedInAs;
const b = "application.header.userinfo1.labels.loggedInAs";

type LanguageKeys = typeof RESOURCE_KEYS;

const en: LanguageKeys = {
  application: {
    header: {
      userinfo1: {5
        labels: {
          loggedInAs: "loggedInAs",
          logoutButton: "",
          them: "Them test",
        },
      },
    },
  },
  keycloak: {
    processing: {
      messageeee: "",
    },
    error: {
      message: "",
    },
  },
  veto: {
    title: "",
    message: "",
    buttonDiscard: "",
    buttonAbort: "",
    unsavedOrLockedActivties: "",
  },
  features: {
    notification: {
      title: {
        info: "",
        error: "",
        success: "",
        warning: "",
      },
      description: {
        info: "",
        success: "",
        warning: "",
        error: "",
      },
      content: "",
    },
    pageNotFound: {
      content: "",
    },
  },
  clerk: {
    dashboard: {
      training: {
        currentTraining: "",
      },
      messages: "",
      information: "",
      recentlyViewedPersons: "",
      notes: "",
      actions: {
        returnGWG: "",
        openApplications: "",
      },
    },
    person: {
      trainingPersonTitle: "",
    },
  },
  gwg: {
    moneyLaundering: "",
    tool: "",
    bundle: {
      workItem: {
        createCoverLetters: {
          inProgress: "",
          success: "",
          failed: "",
          alreadyCreated: "",
        },
        sendQuestionnaires: {
          inProgress: "",
          success: "",
          failed: "",
          alreadySent: "",
          noWorkItemCanBeSent: "",
        },
        markWorkItemAsDone: {
          success: "",
        },
      },
    },
  },
  error: {
    unknown: "",
    gwg: {
      bundle: {
        attachment: {
          csvInvalid: "",
          coverLetters: {
            invalidMimeType: "",
          },
        },
      },
    },
    clerk: {
      application: {
        notFound: "",
      },
      training: {
        notFound: "",
        alreadyExist: "",
      },
      person: {
        notFound: "",
      },
    },
  },
};
const vn = {"index.hi" : "xin chào"};

const de = {"index.hi" : "hello"};

const RESOURCES = {
    en,
    vn,
    de
}
const { t } = useTranslation("translation", { lng: "de" });
const lange = "en";
const test = RESOURCES[lange].application.header.userinfo1.labels.them
const text = t("application.header.userinfo1.labels.loggedInAs");
const text = t(en.application.header.userinfo1.labels.them);

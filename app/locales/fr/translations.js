export default {
  dashboard: {
    title: 'Que voulez-vous faire?'
  },
  navigation: {
    imaging: 'Imagerie',
    inventory: 'Inventaire',
    patients: 'Patients',
    appointments: 'Rendez-vous',
    medication: 'Médicament',
    labs: 'Labos',
    billing: 'Facturation',
    administration: 'Administration',
    subnav: {
      requests: 'Demandes',
      items: 'Articles',
      completed: 'Traité',
      newRequest: 'Nouvelle demande',
      inventoryReceived: 'Inventaire reçu',
      reports: 'Rapports',
      patientListing: 'Liste des patients',
      newPatient: 'Nouveau patient',
      thisWeek: 'Cette semaine',
      today: 'Aujourd\'hui',
      search: 'Rechercher',
      addAppointment: 'Ajouter un rendez-vous',
      dispense: 'Dispenser',
      returnMedication: 'Retourner un Médicament',
      invoices: 'Factures',
      newInvoice: 'Nouvelle facture',
      prices: 'Prix',
      priceProfiles: 'Profils de prix',
      lookupLists: 'Listes de référence',
      addressFields: 'Champs d\'adresse',
      loadDb: 'Importer une BD',
      users: 'Utilisateurs',
      newUser: 'Nouvel utilisateur',
      admittedPatients: 'patients admis',
      missed: 'Manqué',
      userRoles: 'Rôles de l\'utilisateur'
    },
    actions: {
      logout: 'Deconnexion',
      login: 'Connexion'
    },
    about: 'À propos de HospitalRun'
  },
  user: {
    plusNewUser: '+ nouvel utilisateur',
    usersPageTile: 'Liste des Utilisateurs'
  },
  admin: {
    addressOptions: 'Options d\'adresse',
    lookupLists: 'Listes de référence',
    loadDb: 'Importer une BD',
    users: 'Utilisateurs',
    address: {
      address1Label: 'Label de l\'adresse 1',
      address2Label: 'Label de l\'adresse 2',
      address3Label: 'Label de l\'adresse 3',
      address4Label: 'Label de l\'adresse 4',
      include1Label: 'Label de l\'include 1',
      include2Label: 'Label de l\'include 2',
      include3Label: 'Label de l\'include 3',
      include4Label: 'Label de l\'include 4',
      titles: {
        optionsSaved: 'Options enregistrées'
      },
      messages: {
        addressSaved: 'Les options d\'adresse ont été enregistrées'
      },

      newTitle: 'Options d\'adresse',
      editTitle: 'Options d\'adresse',
      addressLabel: 'Adresse'
    },
    loaddb: {
      progressMessage: 'Veuillez patienter durant le chargement de la base de données.',
      progressTitle: 'Chargement de la base de données en cours',
      displayAlertTitle: 'Sélectionner le fichier à télécharger.',
      displayAlertMessage: 'Veuillez sélectionner le fichier à télécharger.',
      errorDisplayAlertTitle: 'Erreur de chargement',
      errorDisplayAlertMessage: 'La base de données ne pouvait pas être importée. L\'erreur etait: {{error}}',
      editTitle: 'Importer une BD'
    },
    lookup: {
      deleteValueInventoryTypeMedicationTitle: 'Impossible de supprimer le médicament',
      deleteValueInventoryTypeMedicationMessage: 'Impossible de supprimer le type d\'inventaire de médicaments car il est requis par le module Médicament.',
      deleteValueLabPricingTypeProcedureTitle: 'Impossible de supprimer le type de prix de Labo',
      deleteValueLabPricingTypeProcedureMessage: 'Impossible de supprimer le type de prix de procédure de Labo car il est requis par le module Labos.',
      deleteValueImagingPricingTypeProcedureTitle: 'Impossible de supprimer le type de prix d\'imagerie',
      deleteValueImagingPricingTypeProcedureMessage: 'Impossible de supprimer le type de prix de procédure d\'imagerie car il est requis par le module Imagerie.',
      deleteValueVisitTypeAdmissionTitle: 'Impossible de supprimer la visite de type Admission',
      deleteValueVisitTypeAdmissionMessage: 'Impossible de supprimer la visite de type Admission car il est requis par le module Visites.',
      deleteValueVisitTypeImagingTitle: 'Impossible de supprimer la visite de type Imagerie',
      deleteValueVisitTypeImagingMessage: 'Impossible de supprimer la visite de type Imagerie car il est requis par le module Imagerie.',
      deleteValueVisitTypeLabTitle: 'Impossible de supprimer la visite de type Labo',
      deleteValueVisitTypeLabMessage: 'Impossible de supprimer la visite de type Labo car il est requis par le module Labo.',
      deleteValueVisitTypePharmacyTitle: 'Impossible de supprimer la visite de type Pharmacie',
      deleteValueVisitTypePharmacyMessage: 'Impossible de supprimer la visite de type Labo car il est requis par le module Médicament.',
      alertImportListTitle: 'Sélectionner le fichier à importer',
      alertImportListMessage: 'Veuillez sélectionner le fichier à importer.',
      alertImportListSaveTitle: 'Liste importée',
      alertImportListSaveMessage: 'La liste de référence a été importée.',
      alertImportListUpdateTitle: 'Liste enregistrée',
      alertImportListUpdateMessage: 'La liste de référence a été enregistrée.',
      pageTitle: 'Listes de référence',
      edit: {
        template: {
          addTitle: 'Ajouter une valeur',
          editTitle: 'Modifier la valeur',
          updateButtonTextAdd: 'Ajouter',
          updateButtonTextUpdate: 'Mettre à jour',
          labelTitle: 'Valeur'
        }
      },
      anesthesiaTypes: 'Types d\'Anesthésie',
      anesthesiologists: 'Anesthésiologistes',
      billingCategories: 'Catégories de facturation',
      clinicList: 'Emplacements de la clinique',
      countryList: 'Pays',
      diagnosisList: 'Diagnostics',
      cptCodeList: 'Codes CPT',
      expenseAccountList: 'Comptes de dépense',
      aisleLocationList: 'Emplacements de rayon d\'inventaire',
      warehouseList: 'Emplacements d\'inventaire',
      inventoryTypes: 'Types d\'inventaire',
      imagingPricingTypes: 'Types de prix d\'imagerie',
      labPricingTypes: 'Types de prix de labo',
      patientStatusList: 'Liste de statut de patient',
      physicianList: 'Médécins',
      procedureList: 'Procédures',
      procedureLocations: 'Emplacements des procédures',
      procedurePricingTypes: 'Types de prix de procédure',
      radiologists: 'Radiologistes',
      unitTypes: 'Types d\'unité',
      vendorList: 'Fournisseur',
      visitLocationList: 'Emplacements de visite',
      visitTypes: 'Types de visite',
      wardPricingTypes: 'Types de prix de service'
    },
    roles: {
      capability: {
        admin: 'Administration',
        loadDb: 'Charger la Base de données',
        updateConfig: 'Mettre à jour les Configurations',
        appointments: 'Rendez-vous',
        addAppointment: 'Ajouter un Rendez-vous',
        billing: 'Facturation',
        addCharge: 'Ajouter une charge',
        addPricing: 'Ajouter un Prix',
        addPricingProfile: 'Ajouter le profil de prix',
        addInvoice: 'Ajouter une facture',
        addPayment: 'Ajouter un paiement',
        deleteInvoice: 'Supprimer une facture',
        deletePricing: 'Supprimer un Prix',
        deletePricingProfile: 'Supprimer le profil de prix',
        editInvoice: 'Modifier la facture',
        invoices: 'Factures',
        overrideInvoice: 'Remplacer la facture',
        pricing: 'Tarification',
        patients: 'Patients',
        addDiagnosis: 'Ajouter un diagnostic',
        addPhoto: 'Ajouter une photo',
        addPatient: 'Ajouter un patient',
        addVisit: 'Ajouter une visite',
        addVitals: 'Ajouter les signes vitaux',
        admitPatient: 'Admettre un patient',
        deletePhoto: 'Supprimer une photo',
        deletePatient: 'Supprimer un patient',
        deleteAppointment: 'Supprimer un rendez-vous',
        deleteDiagnosis: 'Supprimer un diagnostic',
        deleteProcedure: 'Supprimer une procédure',
        deleteSocialwork: 'Supprimer un travail social',
        deleteVitals: 'Supprimer des signes vitaux',
        deleteVisit: 'Supprimer une Visite',
        dischargePatient: 'Liberer un patient',
        patientReports: 'Rapports des patients',
        visits: 'Visites',
        medication: 'Médicament',
        addMedication: 'Ajouter un médicament',
        deleteMedication: 'Supprimer un médicament',
        fulfillMedication: 'Traiter une demande de médicaments',
        labs: 'Test Labo',
        addLab: 'Ajouter un test labo',
        completeLab: 'Completer un test labo',
        deleteLab: 'Supprimer un test labo',
        imaging: 'Imagerie',
        addImaging: 'Ajouter une imagerie',
        completeImaging: 'Completer une imagerie',
        deleteImaging: 'Supprimer une Imagerie',
        inventory: 'Inventaire',
        addInventoryRequest: 'Ajouter une demande d\'inventaire',
        addInventoryItem: 'Ajouter un article d\'inventaire',
        addInventoryPurchase: 'Ajouter un achat d\'inventaire',
        adjustInventoryLocation: 'Ajuster la localisation de l\'inventaire',
        deleteInventoryItem: 'Supprimer un article d\'inventaire',
        deleteInventoryPurchase: 'Supprimer un achat d\'inventaire',
        fulfillInventory: 'Traiter l\'inventaire',
        defineUserRoles: 'Rôles d\'utilisateur'
      },
      messages: {
        roleSaved: 'Le rôle {{roleName}}  a été enregistré.'
      },
      titles: {
        roleSaved: 'Rôle enregistré'
      }
    }
  },
  labels: {
    cptcode: 'Code CPT',
    loading: 'Chargement',
    name: 'Nom',
    patient: 'Patient',
    prescriber: 'prescripteur',
    quantity: 'Quantité',
    requestedOn: 'Demandé le',
    date: 'Date',
    dateOfBirth: 'Date de naissance',
    dateOfBirthShort: 'DdN',
    dateRequested: 'Date de demande',
    dateCompleted: 'Date de traitement',
    description: 'Description',
    requestedBy: 'Demandé par',
    fulfill: 'Traiter',
    fulfillRequest: 'Traiter la demande',
    fulfillRequestNow: 'Traiter la demande maintenant',
    actions: 'Actions',
    action: 'Action',
    notes: 'Notes',
    edit: 'Modifier',
    imageOrders: 'Demandes d\'imagerie',
    labOrders: 'Demandes de labo',
    imagingType: 'Type d\'imagerie',
    result: 'Resultat',
    results: 'Resultats',
    visit: 'Visite',
    requests: 'Demandes',
    completed: 'Traité',
    id: 'Id',
    on: 'sur',
    type: 'Type',
    sex: 'Sexe',
    age: 'Age',
    username: 'Nom d\'utilisateur',
    email: 'Email',
    role: 'Rôle',
    delete: 'Supprimer',
    userCanAddNewValue: 'Utilisateur peut ajouter de nouvelles valeurs',
    value: 'Valeur',
    lookupType: 'Type de référence',
    importFile: 'Importer un fichier',
    fileLoadSuccessful: 'Téléchargement reussi',
    fileToLoad: 'Téléchargement de fichier',
    startTime: 'Heure de debut',
    startDate: 'Date de debut',
    endTime: 'Heure de fin',
    endDate: 'Date de fin',
    docRead: 'Documents lus',
    docWritten: 'Documents écrits',
    displayName: 'Nom à afficher',
    password: 'Mot de passe',
    editUser: 'Modifier un utilisateur',
    newUser: 'Nouvel utilisateur',
    deleteUser: 'Supprimer un utilisateur',
    medication: 'Médicament',
    status: 'Statut',
    addNewOutpatientVisit: '--Ajouter une nouvelle consultation externe--',
    prescription: 'Ordonnance',
    prescriptionDate: 'Date de prescription',
    billTo: 'Facturer à',
    pullFrom: 'Tirer de',
    fulfilled: 'Traité',
    deleteRequest: 'Supprimer la demande',
    location: 'Emplacement',
    provider: 'Fournisseur',
    with: 'Avec',
    allDay: 'Toute la journée',
    physician: 'Médecin',
    assisting: 'Assistant',
    anesthesia: 'Anesthésie',
    procedures: 'Procédures'
  },
  messages: {
    noItemsFound: 'Aucun article retrouvé.',
    noHistoryAvailable: 'Aucune historique disponible.',
    createNewRecord: 'Créer un nouveau dossier?',
    createNewUser: 'Créer un nouvel utilisateur?',
    noUsersFound: 'Aucun utilisateur retrouvé.',
    areYouSureDelete: 'Êtes-vous sûr de vouloir supprimer l\'utilisateur {{user}}?',
    userHasBeenSaved: 'L\'utilisateur a été enregistré.',
    userSaved: 'Utilisateur enregistré',
    onBehalfOf: 'de la part de',
    newPatientHasToBeCreated: 'Un nouveau patient doit être crée...Veuillez attendre...',
    noNotesAvailable: 'Aucune note clinique supplémentaire disponible pour cette visite.',
    sorry: 'Désolé, quelque chose a mal tourné ...',
    forAuthorizedPersons: 'Ce rapport est destiné uniquement aux personnes autorisées.'
  },
  alerts: {
    pleaseWait: 'Veuillez attendre'
  },
  buttons: {
    complete: 'Traiter',
    cancel: 'Annuler',
    close: 'Fermer',
    returnButton: 'Retourner',
    barcode: 'Code barre',
    add: 'Ajouter',
    update: 'Mettre à jour',
    ok: 'Ok',
    fulfill: 'Traiter',
    remove: 'Retirer',
    delete: 'Supprimer',
    newUser: 'Nouvel utilisateur',
    addValue: 'Ajouter une valeur',
    newNote: 'Nouvelle note',
    import: 'Importer',
    loadFile: 'Télécharger le fichier',
    newRequest: 'Nouvelle demande',
    allRequests: 'Toutes les demandes',
    dispense: 'Dispenser',
    newItem: '+ nouvel article',
    newRequestPlus: '+ nouvelle demande',
    addVisit: 'Ajouter une visite',
    search: 'Rechercher'
  },
  login: {
    messages: {
      signIn: 'veuillez-vous connecter',
      error: 'Nom d\'utilisateur ou mot de passe est incorrect.'
    },
    labels: {
      password: 'Mot de passe',
      username: 'Nom d\'utilisateur',
      signIn: 'Connexion'
    }
  },
  inventory: {
    edit: {
      cost: 'Coût par unité:',
      delivered: 'Livré à:',
      location: 'Emplacement ajusté:',
      prescription: 'Ordonnance pour:',
      pulled: 'Tiré de:',
      quantity: 'Quantité après traitement:',
      reason: 'Motif:',
      returned: 'Retourné par le patient:',
      transferredFrom: 'Transféré de:',
      transferredTo: 'Transféré à:'
    },
    labels: {
      action: 'Action',
      add: 'Ajouter',
      adjust: 'Ajuster',
      adjustmentDate: 'Date d\'ajustement',
      adjustmentFor: 'Ajustement pour',
      adjustmentType: 'Type d\'ajustement',
      aisle: 'Rayon',
      aisleLocation: 'Emplacement du rayon',
      allInventory: 'Toute l\'inventaire',
      billTo: 'Facturer à',
      consumePurchases: 'Utiliser les achats',
      consumptionRate: 'Taux d\'utilisation',
      cost: 'Coût',
      costPerUnit: 'Coût par unité',
      crossReference: 'Reference',
      currentQuantity: 'Quantité actuelle',
      dateCompleted: 'Date de traitement',
      dateEffective: 'Date d\'effet',
      dateEnd: 'Date de fin',
      dateStart: 'Date de debut',
      dateReceived: 'Date de réception',
      dateTransferred: 'Date  de transfert',
      daysLeft: 'Nombre de jours restant',
      deliveryAisle: 'Rayon de livraison',
      deliveryLocation: 'Emplacement de livraison',
      distributionUnit: 'Unité de distribution',
      deleteItem: 'Supprimer l\'article',
      details: 'Détails',
      editItem: 'Modifier l\'article',
      expense: 'Dépenses pour',
      expirationDate: 'Date d\'expiration',
      fulfillRequest: 'Traiter la demande',
      fulfillRequestNow: 'Traiter la demande maintenant',
      gift: 'Don en nature',
      giftUsage: 'Utilisation de don en nature',
      giftInKindNo: 'N',
      giftInKindYes: 'O',
      inventoryConsumed: 'Inventaire utilisé',
      inventoryItem: 'Article à inventorier',
      inventoryObsolence: 'Inventory Obsolence',
      invoiceItems: 'Articles de facture',
      invoiceLineItem: 'Article de facture',
      invoiceNumber: 'Numero de facture',
      item: 'Article',
      items: 'Articles',
      itemNumber: 'Numero d\'article',
      location: 'Emplacement',
      locations: 'Emplacements',
      name: 'Nom',
      markAsConsumed: 'Marqué comme utilisé',
      newItem: 'Nouvel article',
      originalQuantity: 'Quantité originale',
      print: 'Imprimer',
      printBarcode: 'Imprimer le code barre',
      printer: 'Imprimante',
      pullFrom: 'Tirer de',
      purchases: 'Achats',
      purchaseCost: 'Coût d\'achat',
      purchaseInfo: 'Détails de l\'achat',
      quantity: 'Quantité ({{unit}})',
      quantityAvailable: 'Quantité disponible',
      quantityOnHand: 'Quantité en main',
      quantityRequested: 'Quantité demandée',
      rank: 'Rang',
      reason: 'Motif',
      remove: 'Retirer',
      reorderPoint: 'Point de commande',
      requestedItems: 'Articles demandés',
      salePricePerUnit: 'Prix de vente unitaire',
      save: 'Enregistrer',
      serialNumber: 'Numéro de série / lot',
      total: 'Total',
      totalCost: 'Coût total',
      totalReceived: 'Total reçu: {{total}}',
      transaction: 'Transaction',
      transactions: 'Transactions',
      transfer: 'Transférer',
      transferFrom: 'Transféré de',
      transferTo: 'Transférer à l\'emplacement',
      transferToAisle: 'Transférer à l\'emplacement du rayon',
      unit: 'Unité',
      unitCost: 'Coût unitaire',
      vendor: 'Fournisseur',
      vendorItemNumber: 'Numéro d\'article fournisseur',
      xref: 'XRef'
    },
    messages: {
      adjust: 'Veuillez ajuster les quantités sur le ou les emplacement(s) appropriée(s) pour tenir compte de la différence de {{difference}}.',
      createRequest: 'Créer une nouvelle demande?',
      delete: 'Etes-vous sûr que vous souhaitez supprimer {{name}}?',
      itemNotFound: 'L\'article d\'inventaire <strong>{{item}}</strong> ne pouvait pas être retrouvé.<br>Si vous voulez créer un nouvel article d\'inventaire, veuillez saisir les informations ci-dessous. <br>Sinon, appuyez sur le bouton Annuler pour retourner.',
      loading: 'Chargement des transactions en cours…',
      purchaseSaved: 'Les achats d\'inventaire ont été enregistrés avec succès.',
      noRequests: 'Aucune demande retrouvée.',
      noItems: 'Aucun article retrouvé.',
      quantity: 'La quantité totale de <strong>({{quantity}})</strong> ne correspond pas à la quantité totale dans les emplacements <strong>({{locationQuantity}})</strong>.',
      removeItem: 'Etes-vous sûr de vouloir retirer cet article de cette facture?',
      removeItemRequest: 'Etes-vous sûr de vouloir supprimer cet article de cette demande?',
      requestFulfilled: 'La demande d\'inventaire a été traitée.',
      requestUpdated: 'La demande d\'inventaire a été mis à jour.',
      warning: 'Veuillez remplir les champs obligatoires (marqués d\'un *) et corriger les erreurs avant d\'ajouter.'
    },
    reports: {
      rows: {
        adjustments: 'Ajustements',
        adjustmentsTotal: 'Ajustements totaux',
        balanceBegin: 'Solde d\'ouverture',
        balanceEnd: 'Solde de clôture',
        category: 'Catégorie',
        consumed: 'Utilisé',
        consumedGik: 'GiK utilisé',
        consumedGikTotal: 'GiK total utilisé',
        consumedPuchases: 'Achats utilisés',
        consumedPurchasesTotal: 'Achats totaux utilisés',
        consumedTotal: 'Total utilisé',
        errInFinSum: 'Erreur dans _generateFinancialSummaryReport: ',
        errInFindPur: 'Erreur dans _findInventoryItemsByPurchase: ',
        errInFindReq: 'Erreur dans _findInventoryItemsByRequest: ',
        expensesFor: 'Dépenses pour: ',
        noAccount: '(Pas de compte)',
        subtotal: 'Sous-total: ',
        subtotalFor: 'Sous-total pour {{category}} - {{account}}: ',
        total: 'Total: ',
        totalFor: 'Total pour {{var}}: ',
        totalPurchases: 'Achats totaux',
        transfer1: '{{quantity}} de {{location}}',
        trasnfer2: 'De: {{source}} A: {{target}}'
      },
      adjustment: 'Ajustement détaillée',
      daysSupply: 'Stock restant (en nombre de jours)',
      expenseDetail: 'Détails des dépenses',
      expenseSum: 'Résumé des dépenses',
      expiration: 'Date d\'expiration',
      export: 'Exporter un rapport',
      fields: 'Champs à inclure',
      finance: 'Résumé des finances',
      generate: 'Créer un rapport',
      invLocation: 'Inventaire par emplacement',
      invValuation: 'Valorisation de l\'inventaire',
      purchaseDetail: 'Détails de l\'achat',
      purchaseSum: 'Résumé de l\'achat',
      reportType: 'Type de rapport',
      stockTransferDetail: 'Transfert détaillé du stock',
      stockTransferSum: 'Résumé du transfert du stock',
      stockUsageDetail: 'Utilisation détaillée du stock',
      stockUsageSum: 'Résumé de l\'utilisation du stock'
    },
    titles: {
      addPurchase: 'Ajouter un achat',
      addRequest: 'Nouvelle demande',
      adjustment: 'Ajustement',
      editPurchase: 'Modifier l\'achat',
      editRequest: 'Modifier la demande',
      inventoryItem: 'Nouvel article d\'inventaire',
      inventoryReport: 'Rapport d\'inventaire',
      purchaseSaved: 'Achats d\'inventaire enregistrés',
      quickAddTitle: 'Nouvel article d\'inventaire',
      removeItem: 'Retirer l\'article',
      requestFulfilled: 'Demande traitée',
      requestUpdated: 'Demande mis à jour',
      transfer: 'Transférer les articles',
      warning: 'Attention!!!!!'
    }
  },
  imaging: {
    pageTitle: 'Demandes d\'imagerie',
    sectionTitle: 'Imagerie',
    buttons: {
      newButton: '+ nouvelle imagerie'
    },
    labels: {
      radiologist: 'Radiologiste',
      addNewVisit: '--Ajouter une nouvelle visite--'
    },
    messages: {
      noCompleted: 'Aucun article traité retrouvé.'
    },
    titles: {
      completedImaging: 'Imagerie traitée',
      editTitle: 'Modifier la demande d\'imagerie',
      newTitle: 'Nouvelle demande d\'imagerie'
    },
    alerts: {
      completedTitle: 'Demande d\'imagerie traitée',
      completedMessage: 'La demande d\'imagerie a été traitée.',
      savedTitle: 'Demande d\'imagerie enregistrée',
      savedMessage: 'La demande d\'imagerie a été enregistrée.'
    }
  },
  medication: {
    pageTitle: 'Demandes de médicament',
    sectionTitle: 'Médicament',
    returnMedication: 'Retourner un médicament',
    buttons: {
      dispenseMedication: 'dispenser un médicament',
      newButton: '+ nouvelle demande',
      returnMedication: 'retourner un médicament'
    },
    titles: {
      completedMedication: 'Médicament traitée',
      editMedicationRequest: 'Modifier une demande de médicament',
      newMedicationRequest: 'Nouvelle demande de médicament'
    },
    messages: {
      createNew: 'Créer une nouvelle demande de médicament?',
      confirmDeletion: 'Êtes-vous sûr de vouloir supprimer cette demande de médicaments?'
    },
    labels: {
      refills: 'Renouvellements',
      quantityRequested: 'Quantité demandé',
      quantityDispensed: 'Quantité dispensé',
      quantityDistributed: 'Quantité distribué',
      quantityToReturn: 'Quantité à retourner',
      returnLocation: 'Emplacement de retour',
      returnAisle: 'Rayon de retour',
      returnReason: 'Motif/notes du retour',
      adjustmentDate: 'Date d\'ajustement',
      creditToAccount: 'Créditer le compte'
    },
    alerts: {
      returnedTitle: 'Médicament retourné',
      returnedMessage: 'Le médicament a été marqué comme retourné.',
      savedTitle: 'Demande de médicament enregistrée',
      savedMessage: 'Le dossier de médicament a été enregistré.',
      fulfilledTitle: 'Demande de médicament traitée'
    }
  },
  appointments: {
    currentScreenTitle: 'Liste des rendez-vous',
    editTitle: 'Modifier le rendez-vous',
    newTitle: 'Nouveau rendez-vous',
    sectionTitle: 'Rendez-vous',
    thisWeek: 'Rendez-vous de la semaine',
    missed: 'Rendez-vous manqués',
    searchTitle: 'Rechercher les rendez-vous',
    todayTitle: 'Rendez-vous d\'aujourd\'hui',
    messages: {
      deleteAppointmentMessage: 'Etes-vous sûr de vouloir supprimer ce rendez-vous?',
      endTimeLaterThanStart: 'Veuillez sélectionnez une heure de fin plus tard que l\'heure de début.'
    },
    buttons: {
      newButton: '+ nouveau rendez-vous'
    }
  },
  visits: {
    edit: {
      buttons: {
        newAppointment: 'Nouveau rendez-vous',
        addDiagnosis: 'Ajoute un diagnostic',
        newProcedure: 'Nouvelle procédure',
        newLab: 'Nouveau labo',
        newImaging: 'Nouvelle imagerie',
        newMedication: 'Nouveau médicament'
      },
      labels: {
        diagnosis: 'Diagnostic',
        procedure: 'Procédure',
        authoredBy: 'Crée par',
        labs: 'Labos',
        imaging: 'Imagerie',
        visitInformation: 'Détails de la visite'
      }
    }
  },
  labs: {
    sectionTitle: 'Labos',
    requestsTitle: 'Demandes de labo',
    editTitle: 'Modifier la demande de labo',
    newTitle: 'Nouvelle demande de labo',
    deleteTitle: 'Supprimer la demande',
    completedTitle: 'Labos traités',
    labels: {
      labType: 'Type de labo',
      addNewVisit: '--Ajouter une nouvelle visite--'
    },
    messages: {
      noItemsFound: 'Aucun labo retrouvé.',
      createNewRecord: 'Créer un nouveau dossier?',
      confirmDeletion: 'Etes-vous sûr de vouloir supprimer cette demande de labo?',
      noCompleted: 'Aucun article traité retrouvé.'
    },
    buttons: {
      newButton: '+ nouveau labo'
    },
    alerts: {
      requestCompletedTitle: 'Demande de labo traitée',
      requestCompletedMessage: 'La demande de labo a été traitée.',
      requestSavedTitle: 'Demande de labo enregistrée',
      requestSavedMessage: 'La demande de labo a été enregistrée.'
    }
  },
  common: {
    actions: 'Actions'
  },
  patients: {
    notes: {
      onBehalfOfLabel: 'De la part de',
      onBehalfOfCopy: 'de la part de',
      pleaseSelectAVisit: 'Veuillez sélectionner une visite',
      noteLabel: 'Note'
    }
  }
};

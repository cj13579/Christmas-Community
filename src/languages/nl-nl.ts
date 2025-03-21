export const momentLocale = 'nl'

export const strings = {
  _NOT_LOCALIZED: (key) => `${key} hasn't been translated to Dutch yet.`,
  ADMIN_CLEAR_WISHLISTS_BUTTON: 'Leeg all verlanglijstjes',
  ADMIN_CLEAR_WISHLISTS_DESCRIPTION:
    'Dit leegt <b>direct en permament alle verlanglijstjes!</b> Overweeg om een backup te maken van de database voordat je dit doet',
  ADMIN_CLEAR_WISHLISTS_HEADER: 'Verlanglijst verwijderen',
  ADMIN_SETTINGS_CLEARDB_BUTTON: 'Leeg verlanglijstjes',
  ADMIN_SETTINGS_CLEARDB_DESCRIPTION:
    '<b>Waarschuwing</b>: Deze opties <b>vernietigen data</b>! Overweeg om een backup te maken van de database voordat je ze gebruikt.',
  ADMIN_SETTINGS_CLEARDB_HEADER: 'Data vernietiging',
  ADMIN_SETTINGS_CLEARDB_SUCCESS: 'Alle verlanglijstjes zijn geleegd.',
  ADMIN_SETTINGS_HEADER: 'Administrator instellingen',
  ADMIN_SETTINGS_USERS_ADD_BUTTON: 'Voeg gebruiker toe',
  ADMIN_SETTINGS_USERS_ADD_HEADER: 'Voeg gebruiker toe',
  ADMIN_SETTINGS_USERS_ADD_PLACEHOLDER: 'henk',
  ADMIN_SETTINGS_USERS_ADD_USERNAME: 'Gebruikersnaam',
  ADMIN_SETTINGS_USERS_ADD_ERROR_USERNAME_EMPTY:
    'Gebruikersnaam mag niet leeg zijn.',
  ADMIN_SETTINGS_USERS_EDIT_DELETE_FAIL_ADMIN:
    'Verwijderen mislukt: gebruiker is een administrator.',
  ADMIN_SETTINGS_USERS_EDIT_DELETE_SUCCESS: (name) =>
    `Gebruiker ${name} is verwijderd.`,
  ADMIN_SETTINGS_USERS_EDIT_DEMOTE_NOT_ADMIN: 'gebruiker is geen administrator',
  ADMIN_SETTINGS_USERS_EDIT_DEMOTE_SELF: 'Je kunt jezelf niet demoveren.',
  ADMIN_SETTINGS_USERS_EDIT_DEMOTE_SUCCESS: (name) =>
    `${name} is geen administrator meer.`,
  ADMIN_SETTINGS_USERS_EDIT_IMPERSONATE_SUCCESS: (name) =>
    `Je heet nu ${name}.`,
  ADMIN_SETTINGS_USERS_EDIT_NO_USERNAME_PROVIDED:
    'Geen gebruikersnaam opgegeven',
  ADMIN_SETTINGS_USERS_EDIT_PROMOTE_ALREADY_ADMIN:
    'gebruiker is al een administrator',
  ADMIN_SETTINGS_USERS_EDIT_PROMOTE_DEMOTE_NOT_FOUND:
    'Gebruiker niet gevonden.',
  ADMIN_SETTINGS_USERS_EDIT_PROMOTE_SUCCESS: (name) =>
    `${name} is nu een administrator.`,
  ADMIN_SETTINGS_USERS_EDIT_RENAMED_USER: 'Gebruiker hernoemd!',
  ADMIN_SETTINGS_USERS_EDIT_SAME_NAME:
    'Nieuwe gebruikersnaam is hetzelfde als de vorige.',
  ADMIN_SETTINGS_USERS_EDIT: 'Aanpassen',
  ADMIN_SETTINGS_USERS_HEADER: 'Gebruikers',
  ADMIN_SETTINGS_VERSION_INFO: 'Versie informatie',
  ADMIN_USER_EDIT_ACCOUNT_UNCONFIRMED: 'Dit account is nog niet bevestigd.',
  ADMIN_USER_EDIT_ADMIN_ISADMIN: (name) => `${name} is een administrator.`,
  ADMIN_USER_EDIT_ADMIN_NOTADMIN: (name) => `${name} is geen administrator.`,
  ADMIN_USER_EDIT_ADMIN: 'Administrator',
  ADMIN_USER_EDIT_CHANGE_NAME: 'Verander naam',
  ADMIN_USER_EDIT_CHANGE_USERNAME: 'Verander gebruikersnaam',
  ADMIN_USER_EDIT_CONFIRMATION_LINK: 'Bevestigingslink',
  ADMIN_USER_EDIT_DELETE_ADMIN: 'Gebruiker is een administrator',
  ADMIN_USER_EDIT_DELETE_HEADER: 'Onomkeerbare verwijdering',
  ADMIN_USER_EDIT_DELETE_USER: (name) => `Verwijder gebruiker "${name}"`,
  ADMIN_USER_EDIT_DEMOTE_SELF: 'Je kunt jezelf niet demoveren',
  ADMIN_USER_EDIT_DEMOTE: (name) => `Demoveer ${name}`,
  ADMIN_USER_EDIT_EDITING_USER: (name) =>
    `Gebruiker "${name}" aan het aanpassen`,
  ADMIN_USER_EDIT_GENERATE_NEW_LINK: 'Genereer nieuwe link',
  ADMIN_USER_EDIT_IMPERSONATE_BUTTON: (name) => `Log in als ${name}`,
  ADMIN_USER_EDIT_IMPERSONATE_HEADER: 'Imiteer',
  ADMIN_USER_EDIT_LINK_EXPIRY_FUTURE: (fromNow) =>
    `De onderstaande link vervalt over ${fromNow}`, // fromNow is localized by moment
  ADMIN_USER_EDIT_LINK_EXPIRY_PAST: (fromNow) =>
    `De onderstaande link verviel ${fromNow} geleden`,
  ADMIN_USER_EDIT_PROMOTE: (name) => `Promoveer ${name}`,
  ADMIN_USER_EDIT_RESET_PASSWORD_HASLINK_EXPIRY_FUTURE: (fromNow) =>
    `Het vervalt over ${fromNow}`,
  ADMIN_USER_EDIT_RESET_PASSWORD_HASLINK_EXPIRY_PAST: (fromNow) =>
    `Het verviel ${fromNow} geleden`,
  ADMIN_USER_EDIT_RESET_PASSWORD_HASLINK:
    'Er is een reset wachtwoord link voor deze gebruiker',
  ADMIN_USER_EDIT_RESET_PASSWORD_HEADER: 'Reset wachtwoord',
  ADMIN_USER_EDIT_RESET_PASSWORD_LINK_CANCEL: 'Annuleer wachtwoord reset link',
  ADMIN_USER_EDIT_RESET_PASSWORD_LINK_CREATE: 'Maak wachtwoord reset link',
  ADMIN_USER_EDIT_RESET_PASSWORD_LINK_REFRESH: 'Ververs wachtwoord reset link',
  ADMIN_USER_EDIT_USERNAME: 'Gebruikersnaam',
  BACK_BUTTON: 'Terug',
  CONFIRM_ACCOUNT_EXPIRED:
    'Je bevestigingslink is vervallen. Vraag alsjeblieft om een nieuwe.',
  CONFIRM_ACCOUNT_HEADER_INVALID: `${_CC.config.siteTitle} | Bevestingslink ongeldig`,
  CONFIRM_ACCOUNT_HEADER_VALID: `${_CC.config.siteTitle} | Bevestig account`,
  CONFIRM_ACCOUNT_INVALID:
    'Deze bevestingslink is ongeldig. Misschien is het account verwijderd of zijn er wat karakters aan het einde weggevallen?',
  CONFIRM_ACCOUNT_SET_PW_BUTTON: `Maakaccount ${_CC.config.siteTitle}`,
  CONFIRM_ACCOUNT_SET_PW_PLACEHOLDER: 'W@chtw00rd!',
  CONFIRM_ACCOUNT_SET_PW_TEXT: (name) =>
    `Hallo ${name}! Reset je wachtwoord hier, alsjeblieft.`,
  CONFIRM_ACCOUNT_SUCCESS: `Welkom op ${_CC.config.siteTitle}!`,
  LOGIN_BUTTON: 'Log in',
  LOGIN_PASSWORD_PLACEHOLDER: 'W@chtw00rd!',
  LOGIN_PASSWORD: 'Wachtwoord',
  LOGIN_USERNAME_PLACEHOLDER: 'henk',
  LOGIN_USERNAME: 'Gebruikersnaam',
  LOGOUT_BUTTON: 'Log uit',
  NAVBAR_ADMIN: 'Administrator instellingen',
  NAVBAR_LOGIN: 'Log in',
  NAVBAR_LOGOUT: 'Log uit',
  NAVBAR_PROFILE: 'Profiel',
  NAVBAR_WISHLIST: 'Mijn verlanglijstje',
  NOTE_BACK: (name) => `Terug naar ${name}'s verlanglijst`,
  NOTE_GET_PRODUCT_DATA: 'Haal product data op',
  NOTE_GUARD: 'Ongeldige gebruiker',
  NOTE_IMAGE_URL: 'Foto URL',
  NOTE_MISSING_PROP: (prop) => `Missing property ${prop}`, // not really possible to localize this unfortunately
  NOTE_NAME: 'Naam',
  NOTE_NOTE: 'Opmerking',
  NOTE_PRICE: 'Prijs',
  NOTE_REFRESH_DATA: 'Ververs data',
  NOTE_REMOVE_GUARD: 'Ongeldige user',
  NOTE_REMOVE_MISSING: 'Geen opmerkingen',
  NOTE_REMOVE_SUCCESS: 'Opmerking is verwijderd',
  NOTE_SAVE_BUTTON: 'Sla op',
  NOTE_SUCCESS: 'Opgeslagen!',
  NOTE_URL: 'URL',
  PROFILE_HEADER: 'Profiel',
  PROFILE_PASSWORD_BUTTON: 'Opslaan',
  PROFILE_PASSWORD_NEW: 'Nieuw wachtwoord',
  PROFILE_PASSWORD_OLD_MISMATCH: 'Ongeldig vorig wachtwoord',
  PROFILE_PASSWORD_OLD: 'Oud wachtwoord',
  PROFILE_PASSWORD_PLACEHOLDER: 'W@chtw00rd!',
  PROFILE_PASSWORD_REQUIRED_NEW: 'Nieuw wachtwoord is verplicht',
  PROFILE_PASSWORD_REQUIRED_OLD: 'Oud wachtwoord is verplicht',
  PROFILE_PASSWORD_SUCCESS: 'Aanpassingen opgeslagen!',
  PROFILE_PASSWORD_TITLE: (name) =>
    `Profielinstellingen - Wachtwoord - ${name}`,
  PROFILE_SAVE_PFP_DISABLED: "Profielfoto's zijn uitgeschakeld.",
  PROFILE_SAVE_PFP_SUCCESS: 'Profielfoto opgeslagen!',
  PROFILE_SECURITY_CHANGE_PASSWORD: 'Verander wachtwoord',
  PROFILE_SECURITY: 'Beveiliging',
  PROFILE_TITLE: (name) => `Profielinstellingen - ${name}`,
  RESET_PASSWORD_BUTTON: 'Reset wachtwoord',
  RESET_PASSWORD_GREETING_EXPIRED:
    'Je reset link is vervallen. Vraag alsjeblieft om een nieuwe.',
  RESET_PASSWORD_GREETING_INVALID:
    'Deze reset link is ongeldig. Misschien is het account verwijderd of zijn er wat karakters aan het einde weggevallen?',
  RESET_PASSWORD_GREETING_VALID: (name) =>
    `Hallo ${name}! Stel hier je wachtwoord in, alsjeblieft.`,
  RESET_PASSWORD_HEADER_INVALID: `${_CC.config.siteTitle} | Reset link ongeldig`,
  RESET_PASSWORD_HEADER_VALID: `${_CC.config.siteTitle} | Reset wachtwoord`,
  RESET_PASSWORD_PASSWORD_PLACEHOLDER: 'W@chtw00rd!',
  RESET_PASSWORD_PASSWORD: 'Wachtwoord',
  RESET_PASSWORD_SUCCESS: 'Wachtwoord is gereset!',
  SETUP_ADMIN_USER: 'Admininistrator gebruiker',
  SETUP_BUTTON: 'Stel in!',
  SETUP_HEADER: 'Instellen',
  SETUP_PASSWORD_PLACEHOLDER: 'W@chtw00rd!',
  SETUP_PASSWORD: 'Wachtwoord',
  SETUP_USERNAME_PLACEHOLDER: 'henk',
  SETUP_USERNAME: 'Gebruikersnaam',
  SUPPORTED_SITES_HEADER: 'Ondersteunde sites',
  SUPPORTED_SITES_TEXT:
    'Ontbreekt er een website of is er een kapot? Open een issue <a href="https://github.com/Wingysam/get-product-data/issues/new">hier</a>! :)',
  UPDATE_NOTICE: (current, latest) => `
    <span class="has-text-danger is-size-4 has-text-weight-bold">
      Christmas Community is niet meer up to date. Misschien zijn er nieuwe functies of bugfixes. Overweeg om te updaten :)
    </span>
    <br>
    <span>(je kan dit uitzetten met <code>UPDATE_CHECK=false</code>)</span>
    <br><br>
    <span>Huidige: ${current}</span>
    <br>
    <span>Nieuwste: ${latest}</span>
    <span class="has-text-info" style="float: right;">Dit bericht is alleen zichtbaar voor administrators</span>`,
  WISHLIST_ADD: 'Voeg item toe aan verlanglijst',
  WISHLIST_ADDED_BY_USER: (addedBy) => `Toegevoegd door: ${addedBy}`,
  WISHLIST_ADDED_BY_GUEST: 'Gastgebruiker',
  WISHLIST_ADDED_BY: 'Toegevoegd door',
  WISHLIST_ADDED_ITEM_TO_OWN_WISHLIST: 'Item toegevoegd aan verlanglijst.',
  WISHLIST_CONFLICT:
    'Items worden te snel toegevoegd. Probeer het nog een keer.',
  WISHLIST_DELETE: 'Verwijder',
  WISHLIST_EDIT_ITEM: 'Pas item aan',
  WISHLIST_FETCH_FAIL: 'Verlanglijst niet gevonden -- bestaat de gebruiker?',
  WISHLIST_IMAGE: 'Foto',
  WISHLIST_ITEM_MISSING: 'Item niet gevonden',
  WISHLIST_MOVE_DOWN: 'Verplaats naar beneden',
  WISHLIST_MOVE_GUARD: 'Verkeerde gebruiker',
  WISHLIST_MOVE_INVALID: 'Ongeldige verplaatsing',
  WISHLIST_MOVE_ITEM_DOWN: 'Verplaats item naar beneden',
  WISHLIST_MOVE_ITEM_TOP: 'Verplaats item naar bovenkant',
  WISHLIST_MOVE_ITEM_UP: 'Verplaats item naar boven',
  WISHLIST_MOVE_SUCCESS: 'Item verplaatst!',
  WISHLIST_MOVE_TOP: 'Zet bovenaan',
  WISHLIST_MOVE_UNKNOWN_DIRECTION: 'Onbekende richting',
  WISHLIST_MOVE_UP: 'Verplaats omhoog',
  WISHLIST_NAME: 'Naam',
  WISHLIST_NOTE: 'Opmerking',
  WISHLIST_OPTIONAL: 'Optioneel',
  WISHLIST_PLEDGE_DUPLICATE: 'Item is al door iemand beloofd',
  WISHLIST_PLEDGE_ITEM: 'Beloof item',
  WISHLIST_PLEDGE_SUCCESS: 'Item is door je beloofd!',
  WISHLIST_PLEDGE: 'Beloof',
  WISHLIST_PLEDGED: (pledgedBy) => `Beloofd door ${pledgedBy}`,
  WISHLIST_PLEDGED_GUEST: 'Beloofd door een gast',
  WISHLIST_PLEDGED_ITEM_FOR_USER: (user) => `Item beloofd voor ${user}.`,
  WISHLIST_PRICE: 'Prijs',
  WISHLIST_REFRESH_GUARD: 'Ongeldige gebruiker',
  WISHLIST_REFRESH_NO_URL: 'Item heeft geen URL.',
  WISHLIST_REFRESH_SUCCESS: 'Data is ververst!',
  WISHLIST_REMOVE_GUARD: 'Verkeerde gebruiker',
  WISHLIST_REMOVE_SUCCESS: 'Verwijderd van verlanglijst',
  WISHLIST_SUGGEST: 'Stel item voor',
  WISHLIST_TITLE: (name) => `${_CC.config.siteTitle} - Verlanglijst - ${name}`,
  WISHLIST_UNPLEDGE_GUARD: 'Dit heb jij niet beloofd', // should never happen unless someone makes their own http requests
  WISHLIST_UNPLEDGE_SUCCESS: 'Belofte voor item verwijderd!',
  WISHLIST_UNPLEDGE: 'Verwijder belofte',
  WISHLIST_URL_LABEL: `Item URL of naam (<a href="${_CC.config.base}supported-sites">Ondersteunde websites</a>)`,
  WISHLIST_URL_PLACEHOLDER:
    'https://www.bol.com/nl/nl/p/mens-erger-je-niet-dobbelautomaat-bordspel/1004004000017412/',
  WISHLIST_URL_REQUIRED: 'Item URL of naam is verplicht',
  WISHLISTS_COUNTS_SELF: (name) => `${name}: ???/???`,
  WISHLISTS_COUNTS: (name, pledged, total) => `${name}: ${pledged}/${total}`,
  WISHLISTS_TITLE: `${_CC.config.siteTitle} - Verlanglijstjes`,
} as const

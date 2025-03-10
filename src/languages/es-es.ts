export const momentLocale = 'es'

export const strings = {
  _NOT_LOCALIZED: (key) => `${key} todavía no ha sido traducido al español.`,
  ADMIN_CLEAR_WISHLISTS_BUTTON: 'Borrar todas las listas de deseos',
  ADMIN_CLEAR_WISHLISTS_DESCRIPTION:
    'Esto va a, inmediatamente, <b>irreversiblemente borrar todas las listas de deseo!</b> Considere hacer una copia de la base de datos antes de hacer esto.',
  ADMIN_CLEAR_WISHLISTS_HEADER: 'Eliminación de las listas de deseos',
  ADMIN_SETTINGS_CLEARDB_BUTTON: 'Borrar listas de deseos',
  ADMIN_SETTINGS_CLEARDB_DESCRIPTION:
    '<b>Advertencia</b>: Estas opciones ¡<b>destruyen datos</b>! Tal vez va a querer hacer una copia de la base de datos antes de usar estas opciones.',
  ADMIN_SETTINGS_CLEARDB_HEADER: 'Destrucción de datos',
  ADMIN_SETTINGS_CLEARDB_SUCCESS: 'Todas las listas de deseos fueron borrados.',
  ADMIN_SETTINGS_HEADER: 'Ajustes de administrador',
  ADMIN_SETTINGS_USERS_ADD_BUTTON: 'Agregar usuario',
  ADMIN_SETTINGS_USERS_ADD_HEADER: 'Agregar usuario',
  ADMIN_SETTINGS_USERS_ADD_PLACEHOLDER: 'juan',
  ADMIN_SETTINGS_USERS_ADD_USERNAME: 'Nombre de usuario',
  ADMIN_SETTINGS_USERS_ADD_ERROR_USERNAME_EMPTY:
    'El nombre de usuario no puede estar vacío.',
  ADMIN_SETTINGS_USERS_EDIT_DELETE_FAIL_ADMIN:
    'No se pudo eliminar: este usuario es administrador.',
  ADMIN_SETTINGS_USERS_EDIT_DELETE_SUCCESS: (name) =>
    `Se pudo eliminar ${name}`,
  ADMIN_SETTINGS_USERS_EDIT_DEMOTE_NOT_ADMIN:
    'Este usuario no es administrador.',
  ADMIN_SETTINGS_USERS_EDIT_DEMOTE_SELF: 'No puede degradarse a usted mismo.',
  ADMIN_SETTINGS_USERS_EDIT_DEMOTE_SUCCESS: (name) =>
    `${name} ya no es administrador.`,
  ADMIN_SETTINGS_USERS_EDIT_IMPERSONATE_SUCCESS: (name) =>
    `Ahora eres ${name}.`,
  ADMIN_SETTINGS_USERS_EDIT_NO_USERNAME_PROVIDED:
    'No se ha proporcionado un nombre de usuario.',
  ADMIN_SETTINGS_USERS_EDIT_PROMOTE_ALREADY_ADMIN:
    'Este usuario ya es administrador.',
  ADMIN_SETTINGS_USERS_EDIT_PROMOTE_DEMOTE_NOT_FOUND:
    'No se encuentra este usuario.',
  ADMIN_SETTINGS_USERS_EDIT_PROMOTE_SUCCESS: (name) =>
    `${name} ahora es administrador.`,
  ADMIN_SETTINGS_USERS_EDIT_RENAMED_USER: '¡Nombre cambiado!',
  ADMIN_SETTINGS_USERS_EDIT_SAME_NAME:
    'Nombre de usuario nuevo es igual al nombre actual.',
  ADMIN_SETTINGS_USERS_EDIT: 'Editar',
  ADMIN_SETTINGS_USERS_HEADER: 'Usuarios',
  ADMIN_SETTINGS_VERSION_INFO: 'Información de versión',
  ADMIN_USER_EDIT_ACCOUNT_UNCONFIRMED: 'Esta cuenta ha sido confirmada.',
  ADMIN_USER_EDIT_ADMIN_ISADMIN: (name) => `${name} es administrador`,
  ADMIN_USER_EDIT_ADMIN_NOTADMIN: (name) => `${name} no es administrador`,
  ADMIN_USER_EDIT_ADMIN: 'Administrador',
  ADMIN_USER_EDIT_CHANGE_NAME: 'Cambiar nombre',
  ADMIN_USER_EDIT_CHANGE_USERNAME: 'Cambiar nombre de usuario',
  ADMIN_USER_EDIT_CONFIRMATION_LINK: 'Enlace de confirmación',
  ADMIN_USER_EDIT_DELETE_ADMIN: 'Este usuario es adminstrador',
  ADMIN_USER_EDIT_DELETE_HEADER: 'Eliminación irreversible',
  ADMIN_USER_EDIT_DELETE_USER: (name) => `Eliminar usuario ${name}`,
  ADMIN_USER_EDIT_DEMOTE_SELF: 'No puede degradarse a usted mismo',
  ADMIN_USER_EDIT_DEMOTE: (name) => `Rebajar ${name}`,
  ADMIN_USER_EDIT_EDITING_USER: (name) => `Editando usuario "${name}"`,
  ADMIN_USER_EDIT_GENERATE_NEW_LINK: 'Generar un nuevo enlace',
  ADMIN_USER_EDIT_IMPERSONATE_BUTTON: (name) => `Iniciar sesión ${name}`,
  ADMIN_USER_EDIT_IMPERSONATE_HEADER: 'Imitar',
  ADMIN_USER_EDIT_LINK_EXPIRY_FUTURE: (fromNow) =>
    `El siguente enlace se expira ${fromNow}`, // fromNow is localized by moment
  ADMIN_USER_EDIT_LINK_EXPIRY_PAST: (fromNow) =>
    `El siguente enlace se expiró ${fromNow}`,
  ADMIN_USER_EDIT_PROMOTE: (name) => `Promover ${name}`,
  ADMIN_USER_EDIT_RESET_PASSWORD_HASLINK_EXPIRY_FUTURE: (fromNow) =>
    `Se expira ${fromNow}`,
  ADMIN_USER_EDIT_RESET_PASSWORD_HASLINK_EXPIRY_PAST: (fromNow) =>
    `Se expiró ${fromNow}`,
  ADMIN_USER_EDIT_RESET_PASSWORD_HASLINK:
    'Hay un enlace de restablecimiento de contraseña para este usuario',
  ADMIN_USER_EDIT_RESET_PASSWORD_HEADER: 'Restablecer la contraseña',
  ADMIN_USER_EDIT_RESET_PASSWORD_LINK_CANCEL:
    'Cancelar enlace de restablecimiento de contraseña',
  ADMIN_USER_EDIT_RESET_PASSWORD_LINK_CREATE:
    'Crear enlace de restablecimiento de contraseña',
  ADMIN_USER_EDIT_RESET_PASSWORD_LINK_REFRESH:
    'Actualizar enlace de restablecimiento de contraseña',
  ADMIN_USER_EDIT_USERNAME: 'Nombre de usuario',
  BACK_BUTTON: 'Volver atrás',
  CONFIRM_ACCOUNT_EXPIRED:
    'Su enlace de confirmación se expiró. Por favor pide otra.',
  CONFIRM_ACCOUNT_HEADER_INVALID: `${_CC.config.siteTitle} | Enlace de confirmación inválido`,
  CONFIRM_ACCOUNT_HEADER_VALID: `${_CC.config.siteTitle} | Confirmar cuenta`,
  CONFIRM_ACCOUNT_INVALID:
    'Este enlace de confirmación no es válido, ¿tal vez esta cuenta se borró o algunos carácteres al final se cortaron?',
  CONFIRM_ACCOUNT_SET_PW_BUTTON: `Une ${_CC.config.siteTitle}`,
  CONFIRM_ACCOUNT_SET_PW_PLACEHOLDER: 'pa$$word!',
  CONFIRM_ACCOUNT_SET_PW_TEXT: (name) =>
    `Hola ${name}! Por favor escribe su contraseña aquí.`,
  CONFIRM_ACCOUNT_SUCCESS: `¡Bienvenidos a ${_CC.config.siteTitle}!`,
  LOGIN_BUTTON: 'Iniciar sesión',
  LOGIN_PASSWORD_PLACEHOLDER: 'pa$$word!',
  LOGIN_PASSWORD: 'Contraseña',
  LOGIN_USERNAME_PLACEHOLDER: 'juan',
  LOGIN_USERNAME: 'Nombre de usuario',
  LOGOUT_BUTTON: 'Cerrar sesión',
  NAVBAR_ADMIN: 'Ajustes de administrador',
  NAVBAR_LOGIN: 'Iniciar sesión',
  NAVBAR_LOGOUT: 'Cerrar sesión',
  NAVBAR_PROFILE: 'Perfil',
  NAVBAR_WISHLIST: 'Mi lista de deseos',
  NOTE_BACK: (name) => `Volver a la lista de deseos de ${name}`,
  NOTE_GET_PRODUCT_DATA: 'Obtener los datos del producto',
  NOTE_GUARD: 'Usuario inválido',
  NOTE_IMAGE_URL: 'URL de imagen',
  NOTE_MISSING_PROP: (prop) => `Propiedad ausente ${prop}`, // not really possible to localize this unfortunately
  NOTE_NAME: 'Nombre',
  NOTE_NOTE: 'Nota',
  NOTE_PRICE: 'Precio',
  NOTE_REFRESH_DATA: 'Actualizar datos',
  NOTE_REMOVE_GUARD: 'Usuario inválido',
  NOTE_REMOVE_MISSING: 'No tiene nota',
  NOTE_REMOVE_SUCCESS: 'Nota completamente elimidado',
  NOTE_SAVE_BUTTON: 'Guardar producto',
  NOTE_SUCCESS: '¡Guardado!',
  NOTE_URL: 'URL',
  PROFILE_HEADER: 'Perfil',
  PROFILE_PASSWORD_BUTTON: 'Guardar',
  PROFILE_PASSWORD_NEW: 'Nueva contraseña',
  PROFILE_PASSWORD_OLD_MISMATCH: 'Contraseña antigua incorrecta',
  PROFILE_PASSWORD_OLD: 'Contraseña antigua',
  PROFILE_PASSWORD_PLACEHOLDER: 'pa$$word!',
  PROFILE_PASSWORD_REQUIRED_NEW: 'Nueva contraseña es necesario',
  PROFILE_PASSWORD_REQUIRED_OLD: 'Contraseña antiguo es necesario',
  PROFILE_PASSWORD_SUCCESS: '¡Cambios guardados!',
  PROFILE_PASSWORD_TITLE: (name) => `Ajustes de perfil - Contraseña - ${name}`,
  PROFILE_SAVE_PFP_DISABLED: 'Foto del perfil deshabilitado.',
  PROFILE_SAVE_PFP_SUCCESS: '¡Foto de perfil guardado!',
  PROFILE_SECURITY_CHANGE_PASSWORD: 'Cambiar contraseña',
  PROFILE_SECURITY: 'Seguridad',
  PROFILE_TITLE: (name) => `Ajustes de perfil - ${name}`,
  RESET_PASSWORD_BUTTON: 'Restablecer contraseñá',
  RESET_PASSWORD_GREETING_EXPIRED:
    'Su enlace de restablecimiento se expiró. Por favor pide otra.',
  RESET_PASSWORD_GREETING_INVALID:
    'Este enlace de restablecimiento no es válido, ¿tal vez el enlace se canceló o algunos carácteres se cortaron?',
  RESET_PASSWORD_GREETING_VALID: (name) =>
    `Hola ${name}! Por favor escribe su contraseña aquí.`,
  RESET_PASSWORD_HEADER_INVALID: `${_CC.config.siteTitle} | Enlace de restablecimiento inválido`,
  RESET_PASSWORD_HEADER_VALID: `${_CC.config.siteTitle} | Restablecer contraseña`,
  RESET_PASSWORD_PASSWORD_PLACEHOLDER: 'pa$$word!',
  RESET_PASSWORD_PASSWORD: 'Contraseña',
  RESET_PASSWORD_SUCCESS: '¡Contraseña restablecido!',
  SETUP_ADMIN_USER: 'Usuario administrador',
  SETUP_BUTTON: '¡Configurar!',
  SETUP_HEADER: 'Configurar',
  SETUP_PASSWORD_PLACEHOLDER: 'pa$$word!',
  SETUP_PASSWORD: 'Contraseña',
  SETUP_USERNAME_PLACEHOLDER: 'juan',
  SETUP_USERNAME: 'Nombre de usuario',
  SUPPORTED_SITES_HEADER: 'Sitios web compatibles',
  SUPPORTED_SITES_TEXT:
    '¿Hay un sitio ausente o roto? Abra una propuesta <a href="https://github.com/Wingysam/get-product-data/issues/new">aquí</a>! :)',
  UPDATE_NOTICE: (current, latest) => `
    <span class="has-text-danger is-size-4 has-text-weight-bold">
      Christmas Community es desactualizado. Puede haber nuevas functiones o correcciones. ¡Considera actualizar! :)
    </span>
    <br>
    <span>(puede apagar esto con <code>UPDATE_CHECK=false</code>)</span>
    <br><br>
    <span>Actual: ${current}</span>
    <br>
    <span>Más reciente: ${latest}</span>
    <span class="has-text-info" style="float: right;">Este mensaje sólo es accesible para administradores</span>`,
  WISHLIST_ADD: 'Agregar producto a la lista de deseos',
  WISHLIST_ADDED_BY_USER: (addedBy) => `Agregado por: ${addedBy}`,
  WISHLIST_ADDED_BY_GUEST: 'Usuario Invitado',
  WISHLIST_ADDED_BY: 'Agregado por',
  WISHLIST_CONFLICT:
    'Los productos se están agregando desmasiado rápido. Por favor intenta otra vez.',
  WISHLIST_DELETE: 'Borrar',
  WISHLIST_EDIT_ITEM: 'Editar producto',
  WISHLIST_IMAGE: 'Imagen',
  WISHLIST_MOVE_DOWN: 'Mover hacia abajo',
  WISHLIST_MOVE_GUARD: 'Usuario no es correcto',
  WISHLIST_MOVE_INVALID: 'Movimiento inválido',
  WISHLIST_MOVE_ITEM_DOWN: 'Mover producto hacia abajo',
  WISHLIST_MOVE_ITEM_TOP: 'Mover producto hacia al principio',
  WISHLIST_MOVE_ITEM_UP: 'Mover producto hacia arriba',
  WISHLIST_MOVE_SUCCESS: '¡Producto movido!',
  WISHLIST_MOVE_TOP: 'Mover hacia al principio',
  WISHLIST_MOVE_UP: 'Mover hacia arriba',
  WISHLIST_NAME: 'Nombre',
  WISHLIST_NOTE: 'Notas',
  WISHLIST_OPTIONAL: 'Opcional',
  WISHLIST_PLEDGE_DUPLICATE: 'Producto ya está comprometido',
  WISHLIST_PLEDGE_ITEM: 'Comprometer producto',
  WISHLIST_PLEDGE_SUCCESS: '¡Producto comprometido!',
  WISHLIST_PLEDGE: 'Comprometer',
  WISHLIST_PLEDGED: (pledgedBy) => `Comprometido por ${pledgedBy}`,
  WISHLIST_PLEDGED_GUEST: 'Comprometido por un usuario invitado',
  WISHLIST_PRICE: 'Precio',
  WISHLIST_REFRESH_GUARD: 'Usuario inválido',
  WISHLIST_REFRESH_NO_URL: 'Este producto no tiene URL.',
  WISHLIST_REFRESH_SUCCESS: '¡Datos acualizados!',
  WISHLIST_REMOVE_GUARD: 'Usuario no es correcto',
  WISHLIST_REMOVE_MISSING: 'No se pudo encontrar este producto',
  WISHLIST_REMOVE_SUCCESS: '¡Eliminado de la lista de deseos!',
  WISHLIST_SUGGEST: 'Sugerir producto',
  WISHLIST_TITLE: (name) =>
    `${_CC.config.siteTitle} - Lista de deseos - ${name}`,
  WISHLIST_UNPLEDGE_GUARD: 'No se comprometió a esto', // should never happen unless someone makes their own http requests
  WISHLIST_UNPLEDGE_MISSING: 'No se pudo encontrar producto',
  WISHLIST_UNPLEDGE_SUCCESS: '¡Comprometido para producto eliminado!',
  WISHLIST_UNPLEDGE: 'Eliminar comprometido',
  WISHLIST_URL_LABEL: `Nombre de producto o URL (<a href="${_CC.config.base}supported-sites">Sitios web compatibles</a>)`,
  WISHLIST_URL_PLACEHOLDER: 'https://www.amazon.com/dp/B00ZV9RDKK',
  WISHLIST_URL_REQUIRED: 'Necesita un nombre de producto o URL',
  WISHLISTS_COUNTS_SELF: (name) => `${name}: ???/???`,
  WISHLISTS_COUNTS: (name, pledged, total) => `${name}: ${pledged}/${total}`,
  WISHLISTS_TITLE: `${_CC.config.siteTitle} - Listas de deseo`,
} as const

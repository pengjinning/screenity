/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/localbase/index.js":
/*!*****************************************!*\
  !*** ./node_modules/localbase/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _localbase_localbase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localbase/localbase */ "./node_modules/localbase/localbase/localbase.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_localbase_localbase__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/localbase/localbase/api-utils/error.js":
/*!*************************************************************!*\
  !*** ./node_modules/localbase/localbase/api-utils/error.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ error)
/* harmony export */ });
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/logger */ "./node_modules/localbase/localbase/utils/logger.js");
/* harmony import */ var _api_utils_reset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api-utils/reset */ "./node_modules/localbase/localbase/api-utils/reset.js");



function error(message) {
  _api_utils_reset__WEBPACK_IMPORTED_MODULE_1__["default"].call(this)
  _utils_logger__WEBPACK_IMPORTED_MODULE_0__["default"].error.call(this, message)
  return (`Error: ${ message }`)
}

/***/ }),

/***/ "./node_modules/localbase/localbase/api-utils/reset.js":
/*!*************************************************************!*\
  !*** ./node_modules/localbase/localbase/api-utils/reset.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ reset)
/* harmony export */ });
function reset() {
  this.collectionName = null
  this.orderByProperty = null
  this.orderByDirection = null
  this.limitBy = null
  this.docSelectionCriteria = null
  this.userErrors = []
}

/***/ }),

/***/ "./node_modules/localbase/localbase/api-utils/selectionLevel.js":
/*!**********************************************************************!*\
  !*** ./node_modules/localbase/localbase/api-utils/selectionLevel.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ selectionLevel)
/* harmony export */ });
function selectionLevel() {
  let level
  if (!this.collectionName && !this.docSelectionCriteria) level = 'db'
  else if (this.collectionName && !this.docSelectionCriteria) level = 'collection'
  else if (this.collectionName && this.docSelectionCriteria) level = 'doc'
  return level
}

/***/ }),

/***/ "./node_modules/localbase/localbase/api-utils/showUserErrors.js":
/*!**********************************************************************!*\
  !*** ./node_modules/localbase/localbase/api-utils/showUserErrors.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ showUserErrors)
/* harmony export */ });
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/logger */ "./node_modules/localbase/localbase/utils/logger.js");
/* harmony import */ var _reset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset */ "./node_modules/localbase/localbase/api-utils/reset.js");



function showUserErrors() {
  for (let i = 0; i < this.userErrors.length; i++) {
    _utils_logger__WEBPACK_IMPORTED_MODULE_0__["default"].error.call(this, this.userErrors[i])
  }
  _reset__WEBPACK_IMPORTED_MODULE_1__["default"].call(this)
}

/***/ }),

/***/ "./node_modules/localbase/localbase/api-utils/success.js":
/*!***************************************************************!*\
  !*** ./node_modules/localbase/localbase/api-utils/success.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ success)
/* harmony export */ });
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/logger */ "./node_modules/localbase/localbase/utils/logger.js");
/* harmony import */ var _api_utils_reset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api-utils/reset */ "./node_modules/localbase/localbase/api-utils/reset.js");



function success(message, data) {
  _api_utils_reset__WEBPACK_IMPORTED_MODULE_1__["default"].call(this)
  _utils_logger__WEBPACK_IMPORTED_MODULE_0__["default"].log.call(this, message, data)
  return  {
    success: true,
    message: message,
    data: data
  }
}


/***/ }),

/***/ "./node_modules/localbase/localbase/api/actions/add.js":
/*!*************************************************************!*\
  !*** ./node_modules/localbase/localbase/api/actions/add.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ add)
/* harmony export */ });
/* harmony import */ var _api_utils_success__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api-utils/success */ "./node_modules/localbase/localbase/api-utils/success.js");
/* harmony import */ var _api_utils_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api-utils/error */ "./node_modules/localbase/localbase/api-utils/error.js");
/* harmony import */ var _api_utils_showUserErrors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api-utils/showUserErrors */ "./node_modules/localbase/localbase/api-utils/showUserErrors.js");
let UUID = __webpack_require__(/*! ordered-uuid */ "./node_modules/ordered-uuid/index.js")
;



function add(data, keyProvided) {
  // check for user errors
  if (!data) {
    this.userErrors.push('No data specified in add() method. You must use an object, e.g { id: 1, name: "Bill", age: 47 }')
  }
  else if (!(typeof data == 'object' && data instanceof Array == false)) {
    this.userErrors.push('Data passed to .add() must be an object. Not an array, string, number or boolean.')
  }

  // no user errors, do the add
  if (!this.userErrors.length) {
    let collectionName = this.collectionName
  
    return new Promise((resolve, reject) => {
      let key = null

      // if no key provided, generate random, ordered key
      if (!keyProvided) {
        key = UUID.generate()
      }
      else {
        key = keyProvided
      }

      return this.lf[collectionName].setItem(key, data).then(() => {
        resolve(
          _api_utils_success__WEBPACK_IMPORTED_MODULE_0__["default"].call(
            this,
            `Document added to "${ collectionName }" collection.`,
            { key, data }
          )
        )
      }).catch(err => {
        reject(
          _api_utils_error__WEBPACK_IMPORTED_MODULE_1__["default"].call(
            this,
            `Could not add Document to ${ collectionName } collection.`
          )
        )
      })
    })
  }
  else {
    _api_utils_showUserErrors__WEBPACK_IMPORTED_MODULE_2__["default"].call(this)
  }
}

/***/ }),

/***/ "./node_modules/localbase/localbase/api/actions/delete.js":
/*!****************************************************************!*\
  !*** ./node_modules/localbase/localbase/api/actions/delete.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ deleteIt)
/* harmony export */ });
/* harmony import */ var _utils_isSubset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/isSubset */ "./node_modules/localbase/localbase/utils/isSubset.js");
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/logger */ "./node_modules/localbase/localbase/utils/logger.js");
/* harmony import */ var _api_utils_selectionLevel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api-utils/selectionLevel */ "./node_modules/localbase/localbase/api-utils/selectionLevel.js");
/* harmony import */ var _api_utils_success__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api-utils/success */ "./node_modules/localbase/localbase/api-utils/success.js");
/* harmony import */ var _api_utils_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api-utils/error */ "./node_modules/localbase/localbase/api-utils/error.js");
/* harmony import */ var _api_utils_showUserErrors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api-utils/showUserErrors */ "./node_modules/localbase/localbase/api-utils/showUserErrors.js");







function deleteIt() {

  return new Promise((resolve, reject) => {

    // delete database
    this.deleteDatabase = () => {
      let dbName = this.dbName

      indexedDB.deleteDatabase(dbName)
      resolve(
        _api_utils_success__WEBPACK_IMPORTED_MODULE_3__["default"].call(
          this,
          `Database "${ dbName }" deleted.`,
          { database: dbName }
        )
      )
    }

    // delete collection
    this.deleteCollection = () => {
      let dbName = this.dbName
      let collectionName = this.collectionName

      // we can only delete one collection at a time, which is why we need a queue

      this.addToDeleteCollectionQueue = (collectionName) => {
        this.deleteCollectionQueue.queue.push(collectionName)
        this.runDeleteCollectionQueue()
      }

      this.runDeleteCollectionQueue = () => {
        if (this.deleteCollectionQueue.running == false) {
          this.deleteCollectionQueue.running = true
          this.deleteNextCollectionFromQueue()
        }
      }

      this.deleteNextCollectionFromQueue = () => {
        if (this.deleteCollectionQueue.queue.length) {
          let collectionToDelete = this.deleteCollectionQueue.queue[0]
          this.deleteCollectionQueue.queue.shift()

          this.lf[collectionToDelete].dropInstance({
            name        : dbName,
            storeName   : collectionToDelete
          }).then(() => {
            this.deleteNextCollectionFromQueue()
            resolve(
              _api_utils_success__WEBPACK_IMPORTED_MODULE_3__["default"].call(
                this,
                `Collection "${ collectionToDelete }" deleted.`,
                { collection: collectionToDelete }
              )
            )
          }).catch(error => {
            reject(
              error.call(
                this,
                `Collection "${ collectionToDelete }" could not be deleted.`
              )
            )
          })
        }
        else {
          this.deleteCollectionQueue.running = false
        }
      }

      this.addToDeleteCollectionQueue(collectionName)
    }

    // delete document
    this.deleteDocument = () => {

      let collectionName = this.collectionName
      let docSelectionCriteria = this.docSelectionCriteria

      // delete document by criteria
      this.deleteDocumentByCriteria = () => {
        let keysForDeletion = []
        this.lf[collectionName].iterate((value, key) => {
          if ((0,_utils_isSubset__WEBPACK_IMPORTED_MODULE_0__["default"])(value, docSelectionCriteria)) {
            keysForDeletion.push(key)
          }
        }).then(() => {
          if (!keysForDeletion.length) {
            reject(
              _api_utils_error__WEBPACK_IMPORTED_MODULE_4__["default"].call(
                this,
                `No Documents found in "${ collectionName }" Collection with criteria ${ JSON.stringify(docSelectionCriteria) }. No documents deleted.`
              )
            )
          }
          if (keysForDeletion.length > 1) {
            _utils_logger__WEBPACK_IMPORTED_MODULE_1__["default"].warn.call(this, `Multiple documents (${ keysForDeletion.length }) with ${ JSON.stringify(docSelectionCriteria) } found.`)
          }
        }).then(() => {
          keysForDeletion.forEach((key, index) => {
            this.lf[collectionName].removeItem(key).then(() => {
              if (index === (keysForDeletion.length - 1)) {
                resolve(
                  _api_utils_success__WEBPACK_IMPORTED_MODULE_3__["default"].call(
                    this,
                    `${ keysForDeletion.length } Document${ keysForDeletion.length > 1 ? 's' : '' } with ${ JSON.stringify(docSelectionCriteria) } deleted.`,
                    { keys: keysForDeletion }
                  )
                )
              }
            }).catch(err => {
              reject(
                _api_utils_error__WEBPACK_IMPORTED_MODULE_4__["default"].call(
                  this,
                  `Could not delete ${ keysForDeletion.length } Documents in ${ collectionName } Collection.`
                )
              )
            })
          })
        })
      }

      // delete document by key
      this.deleteDocumentByKey = () => {
        this.lf[collectionName].getItem(docSelectionCriteria).then(value => {
          if (value) {
            this.lf[collectionName].removeItem(docSelectionCriteria).then(() => {
              resolve(
                _api_utils_success__WEBPACK_IMPORTED_MODULE_3__["default"].call(
                  this,
                  `Document with key ${ JSON.stringify(docSelectionCriteria) } deleted.`,
                  { key: docSelectionCriteria }
                )
              )
            }).catch(function(err) {
              reject(
                _api_utils_error__WEBPACK_IMPORTED_MODULE_4__["default"].call(
                  this,
                  `No Document found in "${ collectionName }" Collection with key ${ JSON.stringify(docSelectionCriteria) }. No document was deleted.`
                )
              )
            });
          }
          else {
            reject(
              _api_utils_error__WEBPACK_IMPORTED_MODULE_4__["default"].call(
                this,
                `No Document found in "${ collectionName }" Collection with key ${ JSON.stringify(docSelectionCriteria) }. No document was deleted.`
              )
            )
          }
        });

      }

      if (typeof docSelectionCriteria == 'object') {
        return this.deleteDocumentByCriteria()
      }
      else {
        return this.deleteDocumentByKey()
      }
    }
    
    if (!this.userErrors.length) {
      let currentSelectionLevel = _api_utils_selectionLevel__WEBPACK_IMPORTED_MODULE_2__["default"].call(this)
  
      if (currentSelectionLevel == 'db') {
        return this.deleteDatabase()
      }
      else if (currentSelectionLevel == 'collection') {
        return this.deleteCollection()
      }
      else if (currentSelectionLevel == 'doc') {
        return this.deleteDocument()
      }
    }
    else {
      _api_utils_showUserErrors__WEBPACK_IMPORTED_MODULE_5__["default"].call(this)
    }

  })

}

/***/ }),

/***/ "./node_modules/localbase/localbase/api/actions/get.js":
/*!*************************************************************!*\
  !*** ./node_modules/localbase/localbase/api/actions/get.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ get)
/* harmony export */ });
/* harmony import */ var _utils_isSubset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/isSubset */ "./node_modules/localbase/localbase/utils/isSubset.js");
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/logger */ "./node_modules/localbase/localbase/utils/logger.js");
/* harmony import */ var _api_utils_reset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api-utils/reset */ "./node_modules/localbase/localbase/api-utils/reset.js");
/* harmony import */ var _api_utils_selectionLevel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api-utils/selectionLevel */ "./node_modules/localbase/localbase/api-utils/selectionLevel.js");
/* harmony import */ var _api_utils_showUserErrors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api-utils/showUserErrors */ "./node_modules/localbase/localbase/api-utils/showUserErrors.js");






function get(options = { keys: false }) {

  // get collection
  this.getCollection = () => {
    let collectionName = this.collectionName
    let orderByProperty = this.orderByProperty
    let orderByDirection = this.orderByDirection
    let limitBy = this.limitBy

    let collection = []
    return this.lf[collectionName].iterate((value, key) => {
      let collectionItem = {}
      if (!options.keys) {
        collectionItem = value
      }
      else {
        collectionItem = {
          key: key,
          data: value
        }
      }
      collection.push(collectionItem)
    }).then(() => {
      let logMessage = `Got "${ collectionName }" collection`
      // orderBy
      if (orderByProperty) {
        logMessage += `, ordered by "${ orderByProperty }"`
        if (!options.keys) {
          collection.sort((a, b) => {
            return a[orderByProperty].toString().localeCompare(b[orderByProperty].toString())
          })
        }
        else {
          collection.sort((a, b) => {
            return a.data[orderByProperty].toString().localeCompare(b.data[orderByProperty].toString())
          })
        }
      }
      if (orderByDirection == 'desc') {
        logMessage += ` (descending)`
        collection.reverse()
      }
      // limit
      if (limitBy) {
        logMessage += `, limited to ${ limitBy }`
        collection = collection.splice(0,limitBy)
      }
      logMessage += `:`
      _utils_logger__WEBPACK_IMPORTED_MODULE_1__["default"].log.call(this, logMessage, collection)
      _api_utils_reset__WEBPACK_IMPORTED_MODULE_2__["default"].call(this)
      return collection
    })
  }

  // get document
  this.getDocument = () => {
    let collectionName = this.collectionName
    let docSelectionCriteria = this.docSelectionCriteria

    let collection = []
    let document = {}

    // get document by criteria
    this.getDocumentByCriteria = () => {
      return this.lf[collectionName].iterate((value, key) => {
        if ((0,_utils_isSubset__WEBPACK_IMPORTED_MODULE_0__["default"])(value, docSelectionCriteria)) {
          collection.push(value)
        }
      }).then(() => {
        if (!collection.length) {
          _utils_logger__WEBPACK_IMPORTED_MODULE_1__["default"].error.call(this, `Could not find Document in "${ collectionName }" collection with criteria: ${ JSON.stringify(docSelectionCriteria)}`)
        }
        else {
          document = collection[0]
          _utils_logger__WEBPACK_IMPORTED_MODULE_1__["default"].log.call(this, `Got Document with ${ JSON.stringify(docSelectionCriteria) }:`, document)
          _api_utils_reset__WEBPACK_IMPORTED_MODULE_2__["default"].call(this)
          return document
        }
      })
    }

    // get document by key
    this.getDocumentByKey = () => {
      return this.lf[collectionName].getItem(docSelectionCriteria).then((value) => {
        document = value
        if (document) {
          _utils_logger__WEBPACK_IMPORTED_MODULE_1__["default"].log.call(this, `Got Document with key ${ JSON.stringify(docSelectionCriteria) }:`, document)
        }
        else {
          _utils_logger__WEBPACK_IMPORTED_MODULE_1__["default"].error.call(this, `Could not find Document in "${ collectionName }" collection with Key: ${ JSON.stringify(docSelectionCriteria)}`)
        }
        _api_utils_reset__WEBPACK_IMPORTED_MODULE_2__["default"].call(this)
        return document
      }).catch(err => {
        _utils_logger__WEBPACK_IMPORTED_MODULE_1__["default"].error.call(this, `Could not find Document in "${ collectionName }" collection with Key: ${ JSON.stringify(docSelectionCriteria)}`)
        _api_utils_reset__WEBPACK_IMPORTED_MODULE_2__["default"].call(this)
      });
    }

    if (typeof docSelectionCriteria == 'object') {
      return this.getDocumentByCriteria()
    }
    else {
      return this.getDocumentByKey()
    }
  }

  // check for user errors
  if (!(typeof options == 'object' && options instanceof Array == false)) {
    this.userErrors.push('Data passed to .get() must be an object. Not an array, string, number or boolean. The object must contain a "keys" property set to true or false, e.g. { keys: true }')
  }
  else {
    if (!options.hasOwnProperty('keys')) {
      this.userErrors.push('Object passed to get() method must contain a "keys" property set to boolean true or false, e.g. { keys: true }')
    }
    else {
      if (typeof options.keys !== 'boolean') {
        this.userErrors.push('Property "keys" passed into get() method must be assigned a boolean value (true or false). Not a string or integer.')
      }
    }
  }

  if (!this.userErrors.length) {
    let currentSelectionLevel = _api_utils_selectionLevel__WEBPACK_IMPORTED_MODULE_3__["default"].call(this)

    if (currentSelectionLevel == 'collection') {
      return this.getCollection()
    }
    else if (currentSelectionLevel == 'doc') {
      return this.getDocument()
    }
  }
  else {
    _api_utils_showUserErrors__WEBPACK_IMPORTED_MODULE_4__["default"].call(this)
    return null
  }

}

/***/ }),

/***/ "./node_modules/localbase/localbase/api/actions/set.js":
/*!*************************************************************!*\
  !*** ./node_modules/localbase/localbase/api/actions/set.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ set)
/* harmony export */ });
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/logger */ "./node_modules/localbase/localbase/utils/logger.js");
/* harmony import */ var _utils_isSubset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/isSubset */ "./node_modules/localbase/localbase/utils/isSubset.js");
/* harmony import */ var _api_utils_success__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api-utils/success */ "./node_modules/localbase/localbase/api-utils/success.js");
/* harmony import */ var _api_utils_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api-utils/error */ "./node_modules/localbase/localbase/api-utils/error.js");
/* harmony import */ var _api_utils_showUserErrors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api-utils/showUserErrors */ "./node_modules/localbase/localbase/api-utils/showUserErrors.js");
/* harmony import */ var _api_utils_selectionLevel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api-utils/selectionLevel */ "./node_modules/localbase/localbase/api-utils/selectionLevel.js");







function set(newDocument, options = { keys: false }) {

  let collectionName = this.collectionName
  let docSelectionCriteria = this.docSelectionCriteria
  let currentSelectionLevel = _api_utils_selectionLevel__WEBPACK_IMPORTED_MODULE_5__["default"].call(this)

  return new Promise((resolve, reject) => {

    // set collection
    this.setCollection = () => {
      this.lf[collectionName].clear().then(() => {
        if (!options.keys) {
          newDocument.forEach(doc => {
            this.add(doc)
          })
          resolve(
            _api_utils_success__WEBPACK_IMPORTED_MODULE_2__["default"].call(
              this,
              `Collection "${ collectionName }" set with ${ newDocument.length } Documents.`, 
              newDocument
            )
          )
        }
        else {
          console.log('keys provided')
          // check that every document in array has a _key property
          let docsWithoutKey = 0
          newDocument.forEach(doc => {
            if (!doc.hasOwnProperty('_key')) {
              docsWithoutKey++
            }
          })
          if (docsWithoutKey) {
            reject(
              _api_utils_error__WEBPACK_IMPORTED_MODULE_3__["default"].call(
                this,
                `Documents provided to .set() in an array must each have a _key property set to a string.`
              )
            )
          }
          else {
            newDocument.forEach(doc => {
              let key = doc._key
              delete doc._key
              this.add(doc, key)
            })
            resolve(
              _api_utils_success__WEBPACK_IMPORTED_MODULE_2__["default"].call(
                this,
                `Collection "${ collectionName }" set with ${ newDocument.length } Documents.`, 
                newDocument
              )
            )
          }
        }
      }).catch(err => {
        reject(
          _api_utils_error__WEBPACK_IMPORTED_MODULE_3__["default"].call(
            this,
            `Could not set ${ collectionName } Collection with data ${ JSON.stringify(newDocument) }.`
          )
        )
      });
    }

    // set document
    this.setDocument = () => {
      
      // set document by criteria
      this.setDocumentByCriteria = () => {
        let docsToSet = []
        this.lf[collectionName].iterate((value, key) => {
          if ((0,_utils_isSubset__WEBPACK_IMPORTED_MODULE_1__["default"])(value, docSelectionCriteria)) {
            docsToSet.push({ key, newDocument })
          }
        }).then(() => {
          if (!docsToSet.length) {
            reject(
              _api_utils_error__WEBPACK_IMPORTED_MODULE_3__["default"].call(
                this,
                `No Documents found in ${ collectionName } Collection with criteria ${ JSON.stringify(docSelectionCriteria) }.`
              )
            )
          }
          if (docsToSet.length > 1) {
            _utils_logger__WEBPACK_IMPORTED_MODULE_0__["default"].warn.call(this, `Multiple documents (${ docsToSet.length }) with ${ JSON.stringify(docSelectionCriteria) } found for setting.`)
          }
        }).then(() => {
          docsToSet.forEach((docToSet, index) => {
            this.lf[collectionName].setItem(docToSet.key, docToSet.newDocument).then(value => {
  
              if (index === (docsToSet.length - 1)) {
                resolve(
                  _api_utils_success__WEBPACK_IMPORTED_MODULE_2__["default"].call(
                    this,
                    `${ docsToSet.length } Document${ docsToSet.length > 1 ? 's' : '' } in "${ collectionName }" collection with ${ JSON.stringify(docSelectionCriteria) } was set.`, 
                    newDocument
                  )
                )
              }
            }).catch(err => {
              reject(
                _api_utils_error__WEBPACK_IMPORTED_MODULE_3__["default"].call(
                  this,
                  `Could not set ${ docsToSet.length } Documents in ${ collectionName } Collection.`
                )
              )
            })
          })
        })
      }
  
      // set document by key
      this.setDocumentByKey = () => {
        this.lf[collectionName].setItem(docSelectionCriteria, newDocument).then(value => {
          resolve(
            _api_utils_success__WEBPACK_IMPORTED_MODULE_2__["default"].call(
              this,
              `Document in "${ collectionName }" collection with key ${ JSON.stringify(docSelectionCriteria) } was set.`,
              newDocument
            )
          )
        }).catch(err => {
          reject(
            _api_utils_error__WEBPACK_IMPORTED_MODULE_3__["default"].call(
              this,
              `Document in "${ collectionName }" collection with key ${ JSON.stringify(docSelectionCriteria) } could not be set.`
            )
          )
        })
      }

      if (typeof docSelectionCriteria == 'object') {
        return this.setDocumentByCriteria()
      }
      else {
        return this.setDocumentByKey()
      }
    }

    // check for user errors
    if (!newDocument) {
      this.userErrors.push('No new Document object provided to set() method. Use an object e.g. { id: 1, name: "Bill", age: 47 }')
    }
    else if (currentSelectionLevel === 'doc') {
      if (!(typeof newDocument == 'object' && newDocument instanceof Array == false)) {
        this.userErrors.push('Data passed to .set() must be an object. Not an array, string, number or boolean.')
      }
    }
    else if (currentSelectionLevel === 'collection') {
      if (!(typeof newDocument == 'object' && newDocument instanceof Array == true)) {
        this.userErrors.push('Data passed to .set() must be an array of objects. Not an object, string, number or boolean.')
      }
    }

    if (!this.userErrors.length) {
      if (currentSelectionLevel == 'collection') {
        return this.setCollection()
      }
      else if (currentSelectionLevel == 'doc') {
        return this.setDocument()
      }
    }
    else {
      _api_utils_showUserErrors__WEBPACK_IMPORTED_MODULE_4__["default"].call(this)
    }

  })
}

/***/ }),

/***/ "./node_modules/localbase/localbase/api/actions/update.js":
/*!****************************************************************!*\
  !*** ./node_modules/localbase/localbase/api/actions/update.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ update)
/* harmony export */ });
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/logger */ "./node_modules/localbase/localbase/utils/logger.js");
/* harmony import */ var _utils_isSubset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/isSubset */ "./node_modules/localbase/localbase/utils/isSubset.js");
/* harmony import */ var _utils_updateObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/updateObject */ "./node_modules/localbase/localbase/utils/updateObject.js");
/* harmony import */ var _api_utils_success__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api-utils/success */ "./node_modules/localbase/localbase/api-utils/success.js");
/* harmony import */ var _api_utils_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api-utils/error */ "./node_modules/localbase/localbase/api-utils/error.js");
/* harmony import */ var _api_utils_showUserErrors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api-utils/showUserErrors */ "./node_modules/localbase/localbase/api-utils/showUserErrors.js");







function update(docUpdates) {
  let collectionName = this.collectionName
  let docSelectionCriteria = this.docSelectionCriteria

  return new Promise((resolve, reject) => {

    // update document by criteria
    this.updateDocumentByCriteria = () => {
      let docsToUpdate = []
      this.lf[collectionName].iterate((value, key) => {
        if ((0,_utils_isSubset__WEBPACK_IMPORTED_MODULE_1__["default"])(value, docSelectionCriteria)) {
          let newDocument = (0,_utils_updateObject__WEBPACK_IMPORTED_MODULE_2__["default"])(value, docUpdates)
          docsToUpdate.push({ key, newDocument })
        }
      }).then(() => {
        if (!docsToUpdate.length) {
          reject(
            _api_utils_error__WEBPACK_IMPORTED_MODULE_4__["default"].call(
              this,
              `No Documents found in ${ collectionName } Collection with criteria ${ JSON.stringify(docSelectionCriteria) }.`
            )
          )
        }
        if (docsToUpdate.length > 1) {
          _utils_logger__WEBPACK_IMPORTED_MODULE_0__["default"].warn.call(this, `Multiple documents (${ docsToUpdate.length }) with ${ JSON.stringify(docSelectionCriteria) } found for updating.`)
        }
      }).then(() => {
        docsToUpdate.forEach((docToUpdate, index) => {
          this.lf[collectionName].setItem(docToUpdate.key, docToUpdate.newDocument).then(value => {

            if (index === (docsToUpdate.length - 1)) {
              resolve(
                _api_utils_success__WEBPACK_IMPORTED_MODULE_3__["default"].call(
                  this,
                  `${ docsToUpdate.length } Document${ docsToUpdate.length > 1 ? 's' : '' } in "${ collectionName }" collection with ${ JSON.stringify(docSelectionCriteria) } updated.`,
                  docUpdates
                )
              )
            }

          }).catch(err => {
            reject(
              _api_utils_error__WEBPACK_IMPORTED_MODULE_4__["default"].call(
                this,
                `Could not update ${ docsToUpdate.length } Documents in ${ collectionName } Collection.`
              )
            )
          })
        })
      })
    }
  
    // update document by key
    this.updateDocumentByKey = () => {
      let newDocument = {}
      this.lf[collectionName].getItem(docSelectionCriteria).then(value => {
        newDocument = (0,_utils_updateObject__WEBPACK_IMPORTED_MODULE_2__["default"])(value, docUpdates)
        this.lf[collectionName].setItem(docSelectionCriteria, newDocument)
        resolve(
          _api_utils_success__WEBPACK_IMPORTED_MODULE_3__["default"].call(
            this,
            `Document in "${ collectionName }" collection with key ${ JSON.stringify(docSelectionCriteria) } updated.`,
            newDocument
          )
        )
      }).catch(err => {
        reject(
          _api_utils_error__WEBPACK_IMPORTED_MODULE_4__["default"].call(
            this,
            `No Document found in "${ collectionName }" collection with key ${ JSON.stringify(docSelectionCriteria) }`
          )
        )
      })
    }

    // check for user errors
    if (!docUpdates) {
      this.userErrors.push('No update object provided to update() method. Use an object e.g. { name: "William" }')
    }
    else if (!(typeof docUpdates == 'object' && docUpdates instanceof Array == false)) {
      this.userErrors.push('Data passed to .update() must be an object. Not an array, string, number or boolean.')
    }

    if (!this.userErrors.length) {
      if (typeof docSelectionCriteria == 'object') {
        this.updateDocumentByCriteria()
      }
      else {
        this.updateDocumentByKey()
      }
    }
    else {
      _api_utils_showUserErrors__WEBPACK_IMPORTED_MODULE_5__["default"].call(this)
    }

  })

}

/***/ }),

/***/ "./node_modules/localbase/localbase/api/filters/limit.js":
/*!***************************************************************!*\
  !*** ./node_modules/localbase/localbase/api/filters/limit.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ limit)
/* harmony export */ });
function limit(limitBy) {
  if (!limitBy) {
    this.userErrors.push("No integer specified in limit() method.")
  }
  else if (!Number.isInteger(limitBy)) {
    this.userErrors.push("Limit parameter in limit() method must be an integer (e.g. 3) and not a float, boolean, string or object.")
  }
  else {
    this.limitBy = limitBy
  }
  return this
}

/***/ }),

/***/ "./node_modules/localbase/localbase/api/filters/orderBy.js":
/*!*****************************************************************!*\
  !*** ./node_modules/localbase/localbase/api/filters/orderBy.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ orderBy)
/* harmony export */ });
function orderBy(property, direction) {
  if (!property) {
    this.userErrors.push("No field name specified in orderBy() method. Use a string e.g. 'name'")
  }
  else if (typeof property !== 'string') {
    this.userErrors.push("First parameter in orderBy() method must be a string (a field name) e.g. 'name'")
  }
  else {
    this.orderByProperty = property
  }
  if (direction) {
    if (direction !== 'asc' && direction !== 'desc') {
      this.userErrors.push("Second parameter in orderBy() method must be a string set to 'asc' or 'desc'.")
    }
    else {
      this.orderByDirection = direction
    }
  }
  return this
}

/***/ }),

/***/ "./node_modules/localbase/localbase/api/selectors/collection.js":
/*!**********************************************************************!*\
  !*** ./node_modules/localbase/localbase/api/selectors/collection.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ collection)
/* harmony export */ });
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! localforage */ "./node_modules/localforage/dist/localforage.js");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(localforage__WEBPACK_IMPORTED_MODULE_0__);


function collection(collectionName) {
  if (!collectionName) {
    this.userErrors.push('No collection name specified in collection() method.')
    return this
  }
  else if (typeof collectionName !== 'string') {
    this.userErrors.push('Collection name in collection() method must be a string and not an object, number or boolean.')
    return this
  }
  else {
    this.collectionName = collectionName

    let dbName = this.dbName

    // if we've not created a localForage instance 
    // for this collection, create one
    if (!(collectionName in this.lf)) {
      this.lf[collectionName] = localforage__WEBPACK_IMPORTED_MODULE_0___default().createInstance({
        driver      : (localforage__WEBPACK_IMPORTED_MODULE_0___default().INDEXEDDB),
        name        : dbName,
        storeName   : collectionName
      })
    }
    return this
  }

}

/***/ }),

/***/ "./node_modules/localbase/localbase/api/selectors/doc.js":
/*!***************************************************************!*\
  !*** ./node_modules/localbase/localbase/api/selectors/doc.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ doc)
/* harmony export */ });
function doc(docSelectionCriteria) {
  if (!docSelectionCriteria) {
    this.userErrors.push('No document criteria specified in doc() method. Use a string (with a key) or an object (with criteria) e.g. { id: 1 }')
  }
  else if (typeof docSelectionCriteria !== 'string' && typeof docSelectionCriteria !== 'object') {
    this.userErrors.push('Document criteria specified in doc() method must not be a number or boolean. Use a string (with a key) or an object (with criteria) e.g. { id: 1 }')
  }
  else {
    this.docSelectionCriteria = docSelectionCriteria
  }
  return this
}

/***/ }),

/***/ "./node_modules/localbase/localbase/localbase.js":
/*!*******************************************************!*\
  !*** ./node_modules/localbase/localbase/localbase.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Localbase)
/* harmony export */ });
/* harmony import */ var _api_selectors_collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/selectors/collection */ "./node_modules/localbase/localbase/api/selectors/collection.js");
/* harmony import */ var _api_selectors_doc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/selectors/doc */ "./node_modules/localbase/localbase/api/selectors/doc.js");
/* harmony import */ var _api_filters_orderBy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/filters/orderBy */ "./node_modules/localbase/localbase/api/filters/orderBy.js");
/* harmony import */ var _api_filters_limit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/filters/limit */ "./node_modules/localbase/localbase/api/filters/limit.js");
/* harmony import */ var _api_actions_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api/actions/get */ "./node_modules/localbase/localbase/api/actions/get.js");
/* harmony import */ var _api_actions_add__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api/actions/add */ "./node_modules/localbase/localbase/api/actions/add.js");
/* harmony import */ var _api_actions_update__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./api/actions/update */ "./node_modules/localbase/localbase/api/actions/update.js");
/* harmony import */ var _api_actions_set__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./api/actions/set */ "./node_modules/localbase/localbase/api/actions/set.js");
/* harmony import */ var _api_actions_delete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./api/actions/delete */ "./node_modules/localbase/localbase/api/actions/delete.js");


// import api methods
;











// Localbase
class Localbase {
  constructor(dbName) {

    // properties
    this.dbName = dbName
    this.lf = {} // where we store our localForage instances
    this.collectionName = null
    this.orderByProperty = null
    this.orderByDirection = null
    this.limitBy = null
    this.docSelectionCriteria = null

    // queues
    this.deleteCollectionQueue = {
      queue: [],
      running: false
    }

    // config
    this.config = {
      debug: true
    }

    // user errors - e.g. wrong type or no value passed to a method
    this.userErrors = []

    // api - selectors
    this.collection = _api_selectors_collection__WEBPACK_IMPORTED_MODULE_0__["default"].bind(this)
    this.doc = _api_selectors_doc__WEBPACK_IMPORTED_MODULE_1__["default"].bind(this)

    // api - filters
    this.orderBy = _api_filters_orderBy__WEBPACK_IMPORTED_MODULE_2__["default"].bind(this)
    this.limit = _api_filters_limit__WEBPACK_IMPORTED_MODULE_3__["default"].bind(this)

    // api - actions
    this.get = _api_actions_get__WEBPACK_IMPORTED_MODULE_4__["default"].bind(this)
    this.add = _api_actions_add__WEBPACK_IMPORTED_MODULE_5__["default"].bind(this)
    this.update = _api_actions_update__WEBPACK_IMPORTED_MODULE_6__["default"].bind(this)
    this.set = _api_actions_set__WEBPACK_IMPORTED_MODULE_7__["default"].bind(this)
    this.delete = _api_actions_delete__WEBPACK_IMPORTED_MODULE_8__["default"].bind(this)

  }
}

/***/ }),

/***/ "./node_modules/localbase/localbase/utils/isSubset.js":
/*!************************************************************!*\
  !*** ./node_modules/localbase/localbase/utils/isSubset.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSubset)
/* harmony export */ });
function isSubset(superObj, subObj) {
  return Object.keys(subObj).every(ele => {
      if (typeof subObj[ele] == 'object') {
          return isSubset(superObj[ele], subObj[ele]);
      }
      return subObj[ele] === superObj[ele]
  });
}

/***/ }),

/***/ "./node_modules/localbase/localbase/utils/logger.js":
/*!**********************************************************!*\
  !*** ./node_modules/localbase/localbase/utils/logger.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let logger = {
  baseStyle: `
    padding: 2px 5px;
    background-color: #124F5C;
    border-radius: 4px;
    color: white; 
  `,
  colors: {
    log: '#124F5C',
    error: '#ed2939',
    warn: '#f39c12'
  },
  log(message, secondary) {
    if ( true && this.config.debug) {
      let style = logger.baseStyle + `background-color: ${ logger.colors.log }`
      if (secondary) {
        console.log('%clocalbase', style, message, secondary)
      }
      else {
        console.log('%clocalbase', style, message)
      }
    }
  },
  error(message, secondary) {
    if ( true && this.config.debug) {
      let style = logger.baseStyle + `background-color: ${ logger.colors.error }`
      console.error('%clocalbase', style, message)
    }
  },  
  warn(message, secondary) {
    if ( true && this.config.debug) {
      let style = logger.baseStyle + `background-color: ${ logger.colors.warn }`
      console.warn('%clocalbase', style, message)
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (logger);

/***/ }),

/***/ "./node_modules/localbase/localbase/utils/updateObject.js":
/*!****************************************************************!*\
  !*** ./node_modules/localbase/localbase/utils/updateObject.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateObject)
/* harmony export */ });
function updateObject(obj/*, …*/) {
  for (var i=1; i<arguments.length; i++) {
      for (var prop in arguments[i]) {
          var val = arguments[i][prop];
          // if (typeof val == "object") // this also applies to arrays or null!
          //   updateObject(obj[prop], val);
          // else
          //    obj[prop] = val;
          obj[prop] = val;
      }
  }
  return obj;
}

/***/ }),

/***/ "./node_modules/localforage/dist/localforage.js":
/*!******************************************************!*\
  !*** ./node_modules/localforage/dist/localforage.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/
(function(f){if(true){module.exports=f()}else { var g; }})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=undefined;if(!u&&a)return require(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw (f.code="MODULE_NOT_FOUND", f)}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=undefined;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
(function (global){
'use strict';
var Mutation = global.MutationObserver || global.WebKitMutationObserver;

var scheduleDrain;

{
  if (Mutation) {
    var called = 0;
    var observer = new Mutation(nextTick);
    var element = global.document.createTextNode('');
    observer.observe(element, {
      characterData: true
    });
    scheduleDrain = function () {
      element.data = (called = ++called % 2);
    };
  } else if (!global.setImmediate && typeof global.MessageChannel !== 'undefined') {
    var channel = new global.MessageChannel();
    channel.port1.onmessage = nextTick;
    scheduleDrain = function () {
      channel.port2.postMessage(0);
    };
  } else if ('document' in global && 'onreadystatechange' in global.document.createElement('script')) {
    scheduleDrain = function () {

      // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
      // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
      var scriptEl = global.document.createElement('script');
      scriptEl.onreadystatechange = function () {
        nextTick();

        scriptEl.onreadystatechange = null;
        scriptEl.parentNode.removeChild(scriptEl);
        scriptEl = null;
      };
      global.document.documentElement.appendChild(scriptEl);
    };
  } else {
    scheduleDrain = function () {
      setTimeout(nextTick, 0);
    };
  }
}

var draining;
var queue = [];
//named nextTick for less confusing stack traces
function nextTick() {
  draining = true;
  var i, oldQueue;
  var len = queue.length;
  while (len) {
    oldQueue = queue;
    queue = [];
    i = -1;
    while (++i < len) {
      oldQueue[i]();
    }
    len = queue.length;
  }
  draining = false;
}

module.exports = immediate;
function immediate(task) {
  if (queue.push(task) === 1 && !draining) {
    scheduleDrain();
  }
}

}).call(this,typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(_dereq_,module,exports){
'use strict';
var immediate = _dereq_(1);

/* istanbul ignore next */
function INTERNAL() {}

var handlers = {};

var REJECTED = ['REJECTED'];
var FULFILLED = ['FULFILLED'];
var PENDING = ['PENDING'];

module.exports = Promise;

function Promise(resolver) {
  if (typeof resolver !== 'function') {
    throw new TypeError('resolver must be a function');
  }
  this.state = PENDING;
  this.queue = [];
  this.outcome = void 0;
  if (resolver !== INTERNAL) {
    safelyResolveThenable(this, resolver);
  }
}

Promise.prototype["catch"] = function (onRejected) {
  return this.then(null, onRejected);
};
Promise.prototype.then = function (onFulfilled, onRejected) {
  if (typeof onFulfilled !== 'function' && this.state === FULFILLED ||
    typeof onRejected !== 'function' && this.state === REJECTED) {
    return this;
  }
  var promise = new this.constructor(INTERNAL);
  if (this.state !== PENDING) {
    var resolver = this.state === FULFILLED ? onFulfilled : onRejected;
    unwrap(promise, resolver, this.outcome);
  } else {
    this.queue.push(new QueueItem(promise, onFulfilled, onRejected));
  }

  return promise;
};
function QueueItem(promise, onFulfilled, onRejected) {
  this.promise = promise;
  if (typeof onFulfilled === 'function') {
    this.onFulfilled = onFulfilled;
    this.callFulfilled = this.otherCallFulfilled;
  }
  if (typeof onRejected === 'function') {
    this.onRejected = onRejected;
    this.callRejected = this.otherCallRejected;
  }
}
QueueItem.prototype.callFulfilled = function (value) {
  handlers.resolve(this.promise, value);
};
QueueItem.prototype.otherCallFulfilled = function (value) {
  unwrap(this.promise, this.onFulfilled, value);
};
QueueItem.prototype.callRejected = function (value) {
  handlers.reject(this.promise, value);
};
QueueItem.prototype.otherCallRejected = function (value) {
  unwrap(this.promise, this.onRejected, value);
};

function unwrap(promise, func, value) {
  immediate(function () {
    var returnValue;
    try {
      returnValue = func(value);
    } catch (e) {
      return handlers.reject(promise, e);
    }
    if (returnValue === promise) {
      handlers.reject(promise, new TypeError('Cannot resolve promise with itself'));
    } else {
      handlers.resolve(promise, returnValue);
    }
  });
}

handlers.resolve = function (self, value) {
  var result = tryCatch(getThen, value);
  if (result.status === 'error') {
    return handlers.reject(self, result.value);
  }
  var thenable = result.value;

  if (thenable) {
    safelyResolveThenable(self, thenable);
  } else {
    self.state = FULFILLED;
    self.outcome = value;
    var i = -1;
    var len = self.queue.length;
    while (++i < len) {
      self.queue[i].callFulfilled(value);
    }
  }
  return self;
};
handlers.reject = function (self, error) {
  self.state = REJECTED;
  self.outcome = error;
  var i = -1;
  var len = self.queue.length;
  while (++i < len) {
    self.queue[i].callRejected(error);
  }
  return self;
};

function getThen(obj) {
  // Make sure we only access the accessor once as required by the spec
  var then = obj && obj.then;
  if (obj && (typeof obj === 'object' || typeof obj === 'function') && typeof then === 'function') {
    return function appyThen() {
      then.apply(obj, arguments);
    };
  }
}

function safelyResolveThenable(self, thenable) {
  // Either fulfill, reject or reject with error
  var called = false;
  function onError(value) {
    if (called) {
      return;
    }
    called = true;
    handlers.reject(self, value);
  }

  function onSuccess(value) {
    if (called) {
      return;
    }
    called = true;
    handlers.resolve(self, value);
  }

  function tryToUnwrap() {
    thenable(onSuccess, onError);
  }

  var result = tryCatch(tryToUnwrap);
  if (result.status === 'error') {
    onError(result.value);
  }
}

function tryCatch(func, value) {
  var out = {};
  try {
    out.value = func(value);
    out.status = 'success';
  } catch (e) {
    out.status = 'error';
    out.value = e;
  }
  return out;
}

Promise.resolve = resolve;
function resolve(value) {
  if (value instanceof this) {
    return value;
  }
  return handlers.resolve(new this(INTERNAL), value);
}

Promise.reject = reject;
function reject(reason) {
  var promise = new this(INTERNAL);
  return handlers.reject(promise, reason);
}

Promise.all = all;
function all(iterable) {
  var self = this;
  if (Object.prototype.toString.call(iterable) !== '[object Array]') {
    return this.reject(new TypeError('must be an array'));
  }

  var len = iterable.length;
  var called = false;
  if (!len) {
    return this.resolve([]);
  }

  var values = new Array(len);
  var resolved = 0;
  var i = -1;
  var promise = new this(INTERNAL);

  while (++i < len) {
    allResolver(iterable[i], i);
  }
  return promise;
  function allResolver(value, i) {
    self.resolve(value).then(resolveFromAll, function (error) {
      if (!called) {
        called = true;
        handlers.reject(promise, error);
      }
    });
    function resolveFromAll(outValue) {
      values[i] = outValue;
      if (++resolved === len && !called) {
        called = true;
        handlers.resolve(promise, values);
      }
    }
  }
}

Promise.race = race;
function race(iterable) {
  var self = this;
  if (Object.prototype.toString.call(iterable) !== '[object Array]') {
    return this.reject(new TypeError('must be an array'));
  }

  var len = iterable.length;
  var called = false;
  if (!len) {
    return this.resolve([]);
  }

  var i = -1;
  var promise = new this(INTERNAL);

  while (++i < len) {
    resolver(iterable[i]);
  }
  return promise;
  function resolver(value) {
    self.resolve(value).then(function (response) {
      if (!called) {
        called = true;
        handlers.resolve(promise, response);
      }
    }, function (error) {
      if (!called) {
        called = true;
        handlers.reject(promise, error);
      }
    });
  }
}

},{"1":1}],3:[function(_dereq_,module,exports){
(function (global){
'use strict';
if (typeof global.Promise !== 'function') {
  global.Promise = _dereq_(2);
}

}).call(this,typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"2":2}],4:[function(_dereq_,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function getIDB() {
    /* global indexedDB,webkitIndexedDB,mozIndexedDB,OIndexedDB,msIndexedDB */
    try {
        if (typeof indexedDB !== 'undefined') {
            return indexedDB;
        }
        if (typeof webkitIndexedDB !== 'undefined') {
            return webkitIndexedDB;
        }
        if (typeof mozIndexedDB !== 'undefined') {
            return mozIndexedDB;
        }
        if (typeof OIndexedDB !== 'undefined') {
            return OIndexedDB;
        }
        if (typeof msIndexedDB !== 'undefined') {
            return msIndexedDB;
        }
    } catch (e) {
        return;
    }
}

var idb = getIDB();

function isIndexedDBValid() {
    try {
        // Initialize IndexedDB; fall back to vendor-prefixed versions
        // if needed.
        if (!idb || !idb.open) {
            return false;
        }
        // We mimic PouchDB here;
        //
        // We test for openDatabase because IE Mobile identifies itself
        // as Safari. Oh the lulz...
        var isSafari = typeof openDatabase !== 'undefined' && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform);

        var hasFetch = typeof fetch === 'function' && fetch.toString().indexOf('[native code') !== -1;

        // Safari <10.1 does not meet our requirements for IDB support
        // (see: https://github.com/pouchdb/pouchdb/issues/5572).
        // Safari 10.1 shipped with fetch, we can use that to detect it.
        // Note: this creates issues with `window.fetch` polyfills and
        // overrides; see:
        // https://github.com/localForage/localForage/issues/856
        return (!isSafari || hasFetch) && typeof indexedDB !== 'undefined' &&
        // some outdated implementations of IDB that appear on Samsung
        // and HTC Android devices <4.4 are missing IDBKeyRange
        // See: https://github.com/mozilla/localForage/issues/128
        // See: https://github.com/mozilla/localForage/issues/272
        typeof IDBKeyRange !== 'undefined';
    } catch (e) {
        return false;
    }
}

// Abstracts constructing a Blob object, so it also works in older
// browsers that don't support the native Blob constructor. (i.e.
// old QtWebKit versions, at least).
// Abstracts constructing a Blob object, so it also works in older
// browsers that don't support the native Blob constructor. (i.e.
// old QtWebKit versions, at least).
function createBlob(parts, properties) {
    /* global BlobBuilder,MSBlobBuilder,MozBlobBuilder,WebKitBlobBuilder */
    parts = parts || [];
    properties = properties || {};
    try {
        return new Blob(parts, properties);
    } catch (e) {
        if (e.name !== 'TypeError') {
            throw e;
        }
        var Builder = typeof BlobBuilder !== 'undefined' ? BlobBuilder : typeof MSBlobBuilder !== 'undefined' ? MSBlobBuilder : typeof MozBlobBuilder !== 'undefined' ? MozBlobBuilder : WebKitBlobBuilder;
        var builder = new Builder();
        for (var i = 0; i < parts.length; i += 1) {
            builder.append(parts[i]);
        }
        return builder.getBlob(properties.type);
    }
}

// This is CommonJS because lie is an external dependency, so Rollup
// can just ignore it.
if (typeof Promise === 'undefined') {
    // In the "nopromises" build this will just throw if you don't have
    // a global promise object, but it would throw anyway later.
    _dereq_(3);
}
var Promise$1 = Promise;

function executeCallback(promise, callback) {
    if (callback) {
        promise.then(function (result) {
            callback(null, result);
        }, function (error) {
            callback(error);
        });
    }
}

function executeTwoCallbacks(promise, callback, errorCallback) {
    if (typeof callback === 'function') {
        promise.then(callback);
    }

    if (typeof errorCallback === 'function') {
        promise["catch"](errorCallback);
    }
}

function normalizeKey(key) {
    // Cast the key to a string, as that's all we can set as a key.
    if (typeof key !== 'string') {
        console.warn(key + ' used as a key, but it is not a string.');
        key = String(key);
    }

    return key;
}

function getCallback() {
    if (arguments.length && typeof arguments[arguments.length - 1] === 'function') {
        return arguments[arguments.length - 1];
    }
}

// Some code originally from async_storage.js in
// [Gaia](https://github.com/mozilla-b2g/gaia).

var DETECT_BLOB_SUPPORT_STORE = 'local-forage-detect-blob-support';
var supportsBlobs = void 0;
var dbContexts = {};
var toString = Object.prototype.toString;

// Transaction Modes
var READ_ONLY = 'readonly';
var READ_WRITE = 'readwrite';

// Transform a binary string to an array buffer, because otherwise
// weird stuff happens when you try to work with the binary string directly.
// It is known.
// From http://stackoverflow.com/questions/14967647/ (continues on next line)
// encode-decode-image-with-base64-breaks-image (2013-04-21)
function _binStringToArrayBuffer(bin) {
    var length = bin.length;
    var buf = new ArrayBuffer(length);
    var arr = new Uint8Array(buf);
    for (var i = 0; i < length; i++) {
        arr[i] = bin.charCodeAt(i);
    }
    return buf;
}

//
// Blobs are not supported in all versions of IndexedDB, notably
// Chrome <37 and Android <5. In those versions, storing a blob will throw.
//
// Various other blob bugs exist in Chrome v37-42 (inclusive).
// Detecting them is expensive and confusing to users, and Chrome 37-42
// is at very low usage worldwide, so we do a hacky userAgent check instead.
//
// content-type bug: https://code.google.com/p/chromium/issues/detail?id=408120
// 404 bug: https://code.google.com/p/chromium/issues/detail?id=447916
// FileReader bug: https://code.google.com/p/chromium/issues/detail?id=447836
//
// Code borrowed from PouchDB. See:
// https://github.com/pouchdb/pouchdb/blob/master/packages/node_modules/pouchdb-adapter-idb/src/blobSupport.js
//
function _checkBlobSupportWithoutCaching(idb) {
    return new Promise$1(function (resolve) {
        var txn = idb.transaction(DETECT_BLOB_SUPPORT_STORE, READ_WRITE);
        var blob = createBlob(['']);
        txn.objectStore(DETECT_BLOB_SUPPORT_STORE).put(blob, 'key');

        txn.onabort = function (e) {
            // If the transaction aborts now its due to not being able to
            // write to the database, likely due to the disk being full
            e.preventDefault();
            e.stopPropagation();
            resolve(false);
        };

        txn.oncomplete = function () {
            var matchedChrome = navigator.userAgent.match(/Chrome\/(\d+)/);
            var matchedEdge = navigator.userAgent.match(/Edge\//);
            // MS Edge pretends to be Chrome 42:
            // https://msdn.microsoft.com/en-us/library/hh869301%28v=vs.85%29.aspx
            resolve(matchedEdge || !matchedChrome || parseInt(matchedChrome[1], 10) >= 43);
        };
    })["catch"](function () {
        return false; // error, so assume unsupported
    });
}

function _checkBlobSupport(idb) {
    if (typeof supportsBlobs === 'boolean') {
        return Promise$1.resolve(supportsBlobs);
    }
    return _checkBlobSupportWithoutCaching(idb).then(function (value) {
        supportsBlobs = value;
        return supportsBlobs;
    });
}

function _deferReadiness(dbInfo) {
    var dbContext = dbContexts[dbInfo.name];

    // Create a deferred object representing the current database operation.
    var deferredOperation = {};

    deferredOperation.promise = new Promise$1(function (resolve, reject) {
        deferredOperation.resolve = resolve;
        deferredOperation.reject = reject;
    });

    // Enqueue the deferred operation.
    dbContext.deferredOperations.push(deferredOperation);

    // Chain its promise to the database readiness.
    if (!dbContext.dbReady) {
        dbContext.dbReady = deferredOperation.promise;
    } else {
        dbContext.dbReady = dbContext.dbReady.then(function () {
            return deferredOperation.promise;
        });
    }
}

function _advanceReadiness(dbInfo) {
    var dbContext = dbContexts[dbInfo.name];

    // Dequeue a deferred operation.
    var deferredOperation = dbContext.deferredOperations.pop();

    // Resolve its promise (which is part of the database readiness
    // chain of promises).
    if (deferredOperation) {
        deferredOperation.resolve();
        return deferredOperation.promise;
    }
}

function _rejectReadiness(dbInfo, err) {
    var dbContext = dbContexts[dbInfo.name];

    // Dequeue a deferred operation.
    var deferredOperation = dbContext.deferredOperations.pop();

    // Reject its promise (which is part of the database readiness
    // chain of promises).
    if (deferredOperation) {
        deferredOperation.reject(err);
        return deferredOperation.promise;
    }
}

function _getConnection(dbInfo, upgradeNeeded) {
    return new Promise$1(function (resolve, reject) {
        dbContexts[dbInfo.name] = dbContexts[dbInfo.name] || createDbContext();

        if (dbInfo.db) {
            if (upgradeNeeded) {
                _deferReadiness(dbInfo);
                dbInfo.db.close();
            } else {
                return resolve(dbInfo.db);
            }
        }

        var dbArgs = [dbInfo.name];

        if (upgradeNeeded) {
            dbArgs.push(dbInfo.version);
        }

        var openreq = idb.open.apply(idb, dbArgs);

        if (upgradeNeeded) {
            openreq.onupgradeneeded = function (e) {
                var db = openreq.result;
                try {
                    db.createObjectStore(dbInfo.storeName);
                    if (e.oldVersion <= 1) {
                        // Added when support for blob shims was added
                        db.createObjectStore(DETECT_BLOB_SUPPORT_STORE);
                    }
                } catch (ex) {
                    if (ex.name === 'ConstraintError') {
                        console.warn('The database "' + dbInfo.name + '"' + ' has been upgraded from version ' + e.oldVersion + ' to version ' + e.newVersion + ', but the storage "' + dbInfo.storeName + '" already exists.');
                    } else {
                        throw ex;
                    }
                }
            };
        }

        openreq.onerror = function (e) {
            e.preventDefault();
            reject(openreq.error);
        };

        openreq.onsuccess = function () {
            var db = openreq.result;
            db.onversionchange = function (e) {
                // Triggered when the database is modified (e.g. adding an objectStore) or
                // deleted (even when initiated by other sessions in different tabs).
                // Closing the connection here prevents those operations from being blocked.
                // If the database is accessed again later by this instance, the connection
                // will be reopened or the database recreated as needed.
                e.target.close();
            };
            resolve(db);
            _advanceReadiness(dbInfo);
        };
    });
}

function _getOriginalConnection(dbInfo) {
    return _getConnection(dbInfo, false);
}

function _getUpgradedConnection(dbInfo) {
    return _getConnection(dbInfo, true);
}

function _isUpgradeNeeded(dbInfo, defaultVersion) {
    if (!dbInfo.db) {
        return true;
    }

    var isNewStore = !dbInfo.db.objectStoreNames.contains(dbInfo.storeName);
    var isDowngrade = dbInfo.version < dbInfo.db.version;
    var isUpgrade = dbInfo.version > dbInfo.db.version;

    if (isDowngrade) {
        // If the version is not the default one
        // then warn for impossible downgrade.
        if (dbInfo.version !== defaultVersion) {
            console.warn('The database "' + dbInfo.name + '"' + " can't be downgraded from version " + dbInfo.db.version + ' to version ' + dbInfo.version + '.');
        }
        // Align the versions to prevent errors.
        dbInfo.version = dbInfo.db.version;
    }

    if (isUpgrade || isNewStore) {
        // If the store is new then increment the version (if needed).
        // This will trigger an "upgradeneeded" event which is required
        // for creating a store.
        if (isNewStore) {
            var incVersion = dbInfo.db.version + 1;
            if (incVersion > dbInfo.version) {
                dbInfo.version = incVersion;
            }
        }

        return true;
    }

    return false;
}

// encode a blob for indexeddb engines that don't support blobs
function _encodeBlob(blob) {
    return new Promise$1(function (resolve, reject) {
        var reader = new FileReader();
        reader.onerror = reject;
        reader.onloadend = function (e) {
            var base64 = btoa(e.target.result || '');
            resolve({
                __local_forage_encoded_blob: true,
                data: base64,
                type: blob.type
            });
        };
        reader.readAsBinaryString(blob);
    });
}

// decode an encoded blob
function _decodeBlob(encodedBlob) {
    var arrayBuff = _binStringToArrayBuffer(atob(encodedBlob.data));
    return createBlob([arrayBuff], { type: encodedBlob.type });
}

// is this one of our fancy encoded blobs?
function _isEncodedBlob(value) {
    return value && value.__local_forage_encoded_blob;
}

// Specialize the default `ready()` function by making it dependent
// on the current database operations. Thus, the driver will be actually
// ready when it's been initialized (default) *and* there are no pending
// operations on the database (initiated by some other instances).
function _fullyReady(callback) {
    var self = this;

    var promise = self._initReady().then(function () {
        var dbContext = dbContexts[self._dbInfo.name];

        if (dbContext && dbContext.dbReady) {
            return dbContext.dbReady;
        }
    });

    executeTwoCallbacks(promise, callback, callback);
    return promise;
}

// Try to establish a new db connection to replace the
// current one which is broken (i.e. experiencing
// InvalidStateError while creating a transaction).
function _tryReconnect(dbInfo) {
    _deferReadiness(dbInfo);

    var dbContext = dbContexts[dbInfo.name];
    var forages = dbContext.forages;

    for (var i = 0; i < forages.length; i++) {
        var forage = forages[i];
        if (forage._dbInfo.db) {
            forage._dbInfo.db.close();
            forage._dbInfo.db = null;
        }
    }
    dbInfo.db = null;

    return _getOriginalConnection(dbInfo).then(function (db) {
        dbInfo.db = db;
        if (_isUpgradeNeeded(dbInfo)) {
            // Reopen the database for upgrading.
            return _getUpgradedConnection(dbInfo);
        }
        return db;
    }).then(function (db) {
        // store the latest db reference
        // in case the db was upgraded
        dbInfo.db = dbContext.db = db;
        for (var i = 0; i < forages.length; i++) {
            forages[i]._dbInfo.db = db;
        }
    })["catch"](function (err) {
        _rejectReadiness(dbInfo, err);
        throw err;
    });
}

// FF doesn't like Promises (micro-tasks) and IDDB store operations,
// so we have to do it with callbacks
function createTransaction(dbInfo, mode, callback, retries) {
    if (retries === undefined) {
        retries = 1;
    }

    try {
        var tx = dbInfo.db.transaction(dbInfo.storeName, mode);
        callback(null, tx);
    } catch (err) {
        if (retries > 0 && (!dbInfo.db || err.name === 'InvalidStateError' || err.name === 'NotFoundError')) {
            return Promise$1.resolve().then(function () {
                if (!dbInfo.db || err.name === 'NotFoundError' && !dbInfo.db.objectStoreNames.contains(dbInfo.storeName) && dbInfo.version <= dbInfo.db.version) {
                    // increase the db version, to create the new ObjectStore
                    if (dbInfo.db) {
                        dbInfo.version = dbInfo.db.version + 1;
                    }
                    // Reopen the database for upgrading.
                    return _getUpgradedConnection(dbInfo);
                }
            }).then(function () {
                return _tryReconnect(dbInfo).then(function () {
                    createTransaction(dbInfo, mode, callback, retries - 1);
                });
            })["catch"](callback);
        }

        callback(err);
    }
}

function createDbContext() {
    return {
        // Running localForages sharing a database.
        forages: [],
        // Shared database.
        db: null,
        // Database readiness (promise).
        dbReady: null,
        // Deferred operations on the database.
        deferredOperations: []
    };
}

// Open the IndexedDB database (automatically creates one if one didn't
// previously exist), using any options set in the config.
function _initStorage(options) {
    var self = this;
    var dbInfo = {
        db: null
    };

    if (options) {
        for (var i in options) {
            dbInfo[i] = options[i];
        }
    }

    // Get the current context of the database;
    var dbContext = dbContexts[dbInfo.name];

    // ...or create a new context.
    if (!dbContext) {
        dbContext = createDbContext();
        // Register the new context in the global container.
        dbContexts[dbInfo.name] = dbContext;
    }

    // Register itself as a running localForage in the current context.
    dbContext.forages.push(self);

    // Replace the default `ready()` function with the specialized one.
    if (!self._initReady) {
        self._initReady = self.ready;
        self.ready = _fullyReady;
    }

    // Create an array of initialization states of the related localForages.
    var initPromises = [];

    function ignoreErrors() {
        // Don't handle errors here,
        // just makes sure related localForages aren't pending.
        return Promise$1.resolve();
    }

    for (var j = 0; j < dbContext.forages.length; j++) {
        var forage = dbContext.forages[j];
        if (forage !== self) {
            // Don't wait for itself...
            initPromises.push(forage._initReady()["catch"](ignoreErrors));
        }
    }

    // Take a snapshot of the related localForages.
    var forages = dbContext.forages.slice(0);

    // Initialize the connection process only when
    // all the related localForages aren't pending.
    return Promise$1.all(initPromises).then(function () {
        dbInfo.db = dbContext.db;
        // Get the connection or open a new one without upgrade.
        return _getOriginalConnection(dbInfo);
    }).then(function (db) {
        dbInfo.db = db;
        if (_isUpgradeNeeded(dbInfo, self._defaultConfig.version)) {
            // Reopen the database for upgrading.
            return _getUpgradedConnection(dbInfo);
        }
        return db;
    }).then(function (db) {
        dbInfo.db = dbContext.db = db;
        self._dbInfo = dbInfo;
        // Share the final connection amongst related localForages.
        for (var k = 0; k < forages.length; k++) {
            var forage = forages[k];
            if (forage !== self) {
                // Self is already up-to-date.
                forage._dbInfo.db = dbInfo.db;
                forage._dbInfo.version = dbInfo.version;
            }
        }
    });
}

function getItem(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.get(key);

                    req.onsuccess = function () {
                        var value = req.result;
                        if (value === undefined) {
                            value = null;
                        }
                        if (_isEncodedBlob(value)) {
                            value = _decodeBlob(value);
                        }
                        resolve(value);
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// Iterate over all items stored in database.
function iterate(iterator, callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.openCursor();
                    var iterationNumber = 1;

                    req.onsuccess = function () {
                        var cursor = req.result;

                        if (cursor) {
                            var value = cursor.value;
                            if (_isEncodedBlob(value)) {
                                value = _decodeBlob(value);
                            }
                            var result = iterator(value, cursor.key, iterationNumber++);

                            // when the iterator callback returns any
                            // (non-`undefined`) value, then we stop
                            // the iteration immediately
                            if (result !== void 0) {
                                resolve(result);
                            } else {
                                cursor["continue"]();
                            }
                        } else {
                            resolve();
                        }
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);

    return promise;
}

function setItem(key, value, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        var dbInfo;
        self.ready().then(function () {
            dbInfo = self._dbInfo;
            if (toString.call(value) === '[object Blob]') {
                return _checkBlobSupport(dbInfo.db).then(function (blobSupport) {
                    if (blobSupport) {
                        return value;
                    }
                    return _encodeBlob(value);
                });
            }
            return value;
        }).then(function (value) {
            createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);

                    // The reason we don't _save_ null is because IE 10 does
                    // not support saving the `null` type in IndexedDB. How
                    // ironic, given the bug below!
                    // See: https://github.com/mozilla/localForage/issues/161
                    if (value === null) {
                        value = undefined;
                    }

                    var req = store.put(value, key);

                    transaction.oncomplete = function () {
                        // Cast to undefined so the value passed to
                        // callback/promise is the same as what one would get out
                        // of `getItem()` later. This leads to some weirdness
                        // (setItem('foo', undefined) will return `null`), but
                        // it's not my fault localStorage is our baseline and that
                        // it's weird.
                        if (value === undefined) {
                            value = null;
                        }

                        resolve(value);
                    };
                    transaction.onabort = transaction.onerror = function () {
                        var err = req.error ? req.error : req.transaction.error;
                        reject(err);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function removeItem(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    // We use a Grunt task to make this safe for IE and some
                    // versions of Android (including those used by Cordova).
                    // Normally IE won't like `.delete()` and will insist on
                    // using `['delete']()`, but we have a build step that
                    // fixes this for us now.
                    var req = store["delete"](key);
                    transaction.oncomplete = function () {
                        resolve();
                    };

                    transaction.onerror = function () {
                        reject(req.error);
                    };

                    // The request will be also be aborted if we've exceeded our storage
                    // space.
                    transaction.onabort = function () {
                        var err = req.error ? req.error : req.transaction.error;
                        reject(err);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function clear(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.clear();

                    transaction.oncomplete = function () {
                        resolve();
                    };

                    transaction.onabort = transaction.onerror = function () {
                        var err = req.error ? req.error : req.transaction.error;
                        reject(err);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function length(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.count();

                    req.onsuccess = function () {
                        resolve(req.result);
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function key(n, callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        if (n < 0) {
            resolve(null);

            return;
        }

        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var advanced = false;
                    var req = store.openKeyCursor();

                    req.onsuccess = function () {
                        var cursor = req.result;
                        if (!cursor) {
                            // this means there weren't enough keys
                            resolve(null);

                            return;
                        }

                        if (n === 0) {
                            // We have the first key, return it if that's what they
                            // wanted.
                            resolve(cursor.key);
                        } else {
                            if (!advanced) {
                                // Otherwise, ask the cursor to skip ahead n
                                // records.
                                advanced = true;
                                cursor.advance(n);
                            } else {
                                // When we get here, we've got the nth key.
                                resolve(cursor.key);
                            }
                        }
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function keys(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.openKeyCursor();
                    var keys = [];

                    req.onsuccess = function () {
                        var cursor = req.result;

                        if (!cursor) {
                            resolve(keys);
                            return;
                        }

                        keys.push(cursor.key);
                        cursor["continue"]();
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function dropInstance(options, callback) {
    callback = getCallback.apply(this, arguments);

    var currentConfig = this.config();
    options = typeof options !== 'function' && options || {};
    if (!options.name) {
        options.name = options.name || currentConfig.name;
        options.storeName = options.storeName || currentConfig.storeName;
    }

    var self = this;
    var promise;
    if (!options.name) {
        promise = Promise$1.reject('Invalid arguments');
    } else {
        var isCurrentDb = options.name === currentConfig.name && self._dbInfo.db;

        var dbPromise = isCurrentDb ? Promise$1.resolve(self._dbInfo.db) : _getOriginalConnection(options).then(function (db) {
            var dbContext = dbContexts[options.name];
            var forages = dbContext.forages;
            dbContext.db = db;
            for (var i = 0; i < forages.length; i++) {
                forages[i]._dbInfo.db = db;
            }
            return db;
        });

        if (!options.storeName) {
            promise = dbPromise.then(function (db) {
                _deferReadiness(options);

                var dbContext = dbContexts[options.name];
                var forages = dbContext.forages;

                db.close();
                for (var i = 0; i < forages.length; i++) {
                    var forage = forages[i];
                    forage._dbInfo.db = null;
                }

                var dropDBPromise = new Promise$1(function (resolve, reject) {
                    var req = idb.deleteDatabase(options.name);

                    req.onerror = function () {
                        var db = req.result;
                        if (db) {
                            db.close();
                        }
                        reject(req.error);
                    };

                    req.onblocked = function () {
                        // Closing all open connections in onversionchange handler should prevent this situation, but if
                        // we do get here, it just means the request remains pending - eventually it will succeed or error
                        console.warn('dropInstance blocked for database "' + options.name + '" until all open connections are closed');
                    };

                    req.onsuccess = function () {
                        var db = req.result;
                        if (db) {
                            db.close();
                        }
                        resolve(db);
                    };
                });

                return dropDBPromise.then(function (db) {
                    dbContext.db = db;
                    for (var i = 0; i < forages.length; i++) {
                        var _forage = forages[i];
                        _advanceReadiness(_forage._dbInfo);
                    }
                })["catch"](function (err) {
                    (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function () {});
                    throw err;
                });
            });
        } else {
            promise = dbPromise.then(function (db) {
                if (!db.objectStoreNames.contains(options.storeName)) {
                    return;
                }

                var newVersion = db.version + 1;

                _deferReadiness(options);

                var dbContext = dbContexts[options.name];
                var forages = dbContext.forages;

                db.close();
                for (var i = 0; i < forages.length; i++) {
                    var forage = forages[i];
                    forage._dbInfo.db = null;
                    forage._dbInfo.version = newVersion;
                }

                var dropObjectPromise = new Promise$1(function (resolve, reject) {
                    var req = idb.open(options.name, newVersion);

                    req.onerror = function (err) {
                        var db = req.result;
                        db.close();
                        reject(err);
                    };

                    req.onupgradeneeded = function () {
                        var db = req.result;
                        db.deleteObjectStore(options.storeName);
                    };

                    req.onsuccess = function () {
                        var db = req.result;
                        db.close();
                        resolve(db);
                    };
                });

                return dropObjectPromise.then(function (db) {
                    dbContext.db = db;
                    for (var j = 0; j < forages.length; j++) {
                        var _forage2 = forages[j];
                        _forage2._dbInfo.db = db;
                        _advanceReadiness(_forage2._dbInfo);
                    }
                })["catch"](function (err) {
                    (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function () {});
                    throw err;
                });
            });
        }
    }

    executeCallback(promise, callback);
    return promise;
}

var asyncStorage = {
    _driver: 'asyncStorage',
    _initStorage: _initStorage,
    _support: isIndexedDBValid(),
    iterate: iterate,
    getItem: getItem,
    setItem: setItem,
    removeItem: removeItem,
    clear: clear,
    length: length,
    key: key,
    keys: keys,
    dropInstance: dropInstance
};

function isWebSQLValid() {
    return typeof openDatabase === 'function';
}

// Sadly, the best way to save binary data in WebSQL/localStorage is serializing
// it to Base64, so this is how we store it to prevent very strange errors with less
// verbose ways of binary <-> string data storage.
var BASE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

var BLOB_TYPE_PREFIX = '~~local_forage_type~';
var BLOB_TYPE_PREFIX_REGEX = /^~~local_forage_type~([^~]+)~/;

var SERIALIZED_MARKER = '__lfsc__:';
var SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER.length;

// OMG the serializations!
var TYPE_ARRAYBUFFER = 'arbf';
var TYPE_BLOB = 'blob';
var TYPE_INT8ARRAY = 'si08';
var TYPE_UINT8ARRAY = 'ui08';
var TYPE_UINT8CLAMPEDARRAY = 'uic8';
var TYPE_INT16ARRAY = 'si16';
var TYPE_INT32ARRAY = 'si32';
var TYPE_UINT16ARRAY = 'ur16';
var TYPE_UINT32ARRAY = 'ui32';
var TYPE_FLOAT32ARRAY = 'fl32';
var TYPE_FLOAT64ARRAY = 'fl64';
var TYPE_SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER_LENGTH + TYPE_ARRAYBUFFER.length;

var toString$1 = Object.prototype.toString;

function stringToBuffer(serializedString) {
    // Fill the string into a ArrayBuffer.
    var bufferLength = serializedString.length * 0.75;
    var len = serializedString.length;
    var i;
    var p = 0;
    var encoded1, encoded2, encoded3, encoded4;

    if (serializedString[serializedString.length - 1] === '=') {
        bufferLength--;
        if (serializedString[serializedString.length - 2] === '=') {
            bufferLength--;
        }
    }

    var buffer = new ArrayBuffer(bufferLength);
    var bytes = new Uint8Array(buffer);

    for (i = 0; i < len; i += 4) {
        encoded1 = BASE_CHARS.indexOf(serializedString[i]);
        encoded2 = BASE_CHARS.indexOf(serializedString[i + 1]);
        encoded3 = BASE_CHARS.indexOf(serializedString[i + 2]);
        encoded4 = BASE_CHARS.indexOf(serializedString[i + 3]);

        /*jslint bitwise: true */
        bytes[p++] = encoded1 << 2 | encoded2 >> 4;
        bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
        bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
    }
    return buffer;
}

// Converts a buffer to a string to store, serialized, in the backend
// storage library.
function bufferToString(buffer) {
    // base64-arraybuffer
    var bytes = new Uint8Array(buffer);
    var base64String = '';
    var i;

    for (i = 0; i < bytes.length; i += 3) {
        /*jslint bitwise: true */
        base64String += BASE_CHARS[bytes[i] >> 2];
        base64String += BASE_CHARS[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
        base64String += BASE_CHARS[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
        base64String += BASE_CHARS[bytes[i + 2] & 63];
    }

    if (bytes.length % 3 === 2) {
        base64String = base64String.substring(0, base64String.length - 1) + '=';
    } else if (bytes.length % 3 === 1) {
        base64String = base64String.substring(0, base64String.length - 2) + '==';
    }

    return base64String;
}

// Serialize a value, afterwards executing a callback (which usually
// instructs the `setItem()` callback/promise to be executed). This is how
// we store binary data with localStorage.
function serialize(value, callback) {
    var valueType = '';
    if (value) {
        valueType = toString$1.call(value);
    }

    // Cannot use `value instanceof ArrayBuffer` or such here, as these
    // checks fail when running the tests using casper.js...
    //
    // TODO: See why those tests fail and use a better solution.
    if (value && (valueType === '[object ArrayBuffer]' || value.buffer && toString$1.call(value.buffer) === '[object ArrayBuffer]')) {
        // Convert binary arrays to a string and prefix the string with
        // a special marker.
        var buffer;
        var marker = SERIALIZED_MARKER;

        if (value instanceof ArrayBuffer) {
            buffer = value;
            marker += TYPE_ARRAYBUFFER;
        } else {
            buffer = value.buffer;

            if (valueType === '[object Int8Array]') {
                marker += TYPE_INT8ARRAY;
            } else if (valueType === '[object Uint8Array]') {
                marker += TYPE_UINT8ARRAY;
            } else if (valueType === '[object Uint8ClampedArray]') {
                marker += TYPE_UINT8CLAMPEDARRAY;
            } else if (valueType === '[object Int16Array]') {
                marker += TYPE_INT16ARRAY;
            } else if (valueType === '[object Uint16Array]') {
                marker += TYPE_UINT16ARRAY;
            } else if (valueType === '[object Int32Array]') {
                marker += TYPE_INT32ARRAY;
            } else if (valueType === '[object Uint32Array]') {
                marker += TYPE_UINT32ARRAY;
            } else if (valueType === '[object Float32Array]') {
                marker += TYPE_FLOAT32ARRAY;
            } else if (valueType === '[object Float64Array]') {
                marker += TYPE_FLOAT64ARRAY;
            } else {
                callback(new Error('Failed to get type for BinaryArray'));
            }
        }

        callback(marker + bufferToString(buffer));
    } else if (valueType === '[object Blob]') {
        // Conver the blob to a binaryArray and then to a string.
        var fileReader = new FileReader();

        fileReader.onload = function () {
            // Backwards-compatible prefix for the blob type.
            var str = BLOB_TYPE_PREFIX + value.type + '~' + bufferToString(this.result);

            callback(SERIALIZED_MARKER + TYPE_BLOB + str);
        };

        fileReader.readAsArrayBuffer(value);
    } else {
        try {
            callback(JSON.stringify(value));
        } catch (e) {
            console.error("Couldn't convert value into a JSON string: ", value);

            callback(null, e);
        }
    }
}

// Deserialize data we've inserted into a value column/field. We place
// special markers into our strings to mark them as encoded; this isn't
// as nice as a meta field, but it's the only sane thing we can do whilst
// keeping localStorage support intact.
//
// Oftentimes this will just deserialize JSON content, but if we have a
// special marker (SERIALIZED_MARKER, defined above), we will extract
// some kind of arraybuffer/binary data/typed array out of the string.
function deserialize(value) {
    // If we haven't marked this string as being specially serialized (i.e.
    // something other than serialized JSON), we can just return it and be
    // done with it.
    if (value.substring(0, SERIALIZED_MARKER_LENGTH) !== SERIALIZED_MARKER) {
        return JSON.parse(value);
    }

    // The following code deals with deserializing some kind of Blob or
    // TypedArray. First we separate out the type of data we're dealing
    // with from the data itself.
    var serializedString = value.substring(TYPE_SERIALIZED_MARKER_LENGTH);
    var type = value.substring(SERIALIZED_MARKER_LENGTH, TYPE_SERIALIZED_MARKER_LENGTH);

    var blobType;
    // Backwards-compatible blob type serialization strategy.
    // DBs created with older versions of localForage will simply not have the blob type.
    if (type === TYPE_BLOB && BLOB_TYPE_PREFIX_REGEX.test(serializedString)) {
        var matcher = serializedString.match(BLOB_TYPE_PREFIX_REGEX);
        blobType = matcher[1];
        serializedString = serializedString.substring(matcher[0].length);
    }
    var buffer = stringToBuffer(serializedString);

    // Return the right type based on the code/type set during
    // serialization.
    switch (type) {
        case TYPE_ARRAYBUFFER:
            return buffer;
        case TYPE_BLOB:
            return createBlob([buffer], { type: blobType });
        case TYPE_INT8ARRAY:
            return new Int8Array(buffer);
        case TYPE_UINT8ARRAY:
            return new Uint8Array(buffer);
        case TYPE_UINT8CLAMPEDARRAY:
            return new Uint8ClampedArray(buffer);
        case TYPE_INT16ARRAY:
            return new Int16Array(buffer);
        case TYPE_UINT16ARRAY:
            return new Uint16Array(buffer);
        case TYPE_INT32ARRAY:
            return new Int32Array(buffer);
        case TYPE_UINT32ARRAY:
            return new Uint32Array(buffer);
        case TYPE_FLOAT32ARRAY:
            return new Float32Array(buffer);
        case TYPE_FLOAT64ARRAY:
            return new Float64Array(buffer);
        default:
            throw new Error('Unkown type: ' + type);
    }
}

var localforageSerializer = {
    serialize: serialize,
    deserialize: deserialize,
    stringToBuffer: stringToBuffer,
    bufferToString: bufferToString
};

/*
 * Includes code from:
 *
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */

function createDbTable(t, dbInfo, callback, errorCallback) {
    t.executeSql('CREATE TABLE IF NOT EXISTS ' + dbInfo.storeName + ' ' + '(id INTEGER PRIMARY KEY, key unique, value)', [], callback, errorCallback);
}

// Open the WebSQL database (automatically creates one if one didn't
// previously exist), using any options set in the config.
function _initStorage$1(options) {
    var self = this;
    var dbInfo = {
        db: null
    };

    if (options) {
        for (var i in options) {
            dbInfo[i] = typeof options[i] !== 'string' ? options[i].toString() : options[i];
        }
    }

    var dbInfoPromise = new Promise$1(function (resolve, reject) {
        // Open the database; the openDatabase API will automatically
        // create it for us if it doesn't exist.
        try {
            dbInfo.db = openDatabase(dbInfo.name, String(dbInfo.version), dbInfo.description, dbInfo.size);
        } catch (e) {
            return reject(e);
        }

        // Create our key/value table if it doesn't exist.
        dbInfo.db.transaction(function (t) {
            createDbTable(t, dbInfo, function () {
                self._dbInfo = dbInfo;
                resolve();
            }, function (t, error) {
                reject(error);
            });
        }, reject);
    });

    dbInfo.serializer = localforageSerializer;
    return dbInfoPromise;
}

function tryExecuteSql(t, dbInfo, sqlStatement, args, callback, errorCallback) {
    t.executeSql(sqlStatement, args, callback, function (t, error) {
        if (error.code === error.SYNTAX_ERR) {
            t.executeSql('SELECT name FROM sqlite_master ' + "WHERE type='table' AND name = ?", [dbInfo.storeName], function (t, results) {
                if (!results.rows.length) {
                    // if the table is missing (was deleted)
                    // re-create it table and retry
                    createDbTable(t, dbInfo, function () {
                        t.executeSql(sqlStatement, args, callback, errorCallback);
                    }, errorCallback);
                } else {
                    errorCallback(t, error);
                }
            }, errorCallback);
        } else {
            errorCallback(t, error);
        }
    }, errorCallback);
}

function getItem$1(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'SELECT * FROM ' + dbInfo.storeName + ' WHERE key = ? LIMIT 1', [key], function (t, results) {
                    var result = results.rows.length ? results.rows.item(0).value : null;

                    // Check to see if this is serialized content we need to
                    // unpack.
                    if (result) {
                        result = dbInfo.serializer.deserialize(result);
                    }

                    resolve(result);
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function iterate$1(iterator, callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;

            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'SELECT * FROM ' + dbInfo.storeName, [], function (t, results) {
                    var rows = results.rows;
                    var length = rows.length;

                    for (var i = 0; i < length; i++) {
                        var item = rows.item(i);
                        var result = item.value;

                        // Check to see if this is serialized content
                        // we need to unpack.
                        if (result) {
                            result = dbInfo.serializer.deserialize(result);
                        }

                        result = iterator(result, item.key, i + 1);

                        // void(0) prevents problems with redefinition
                        // of `undefined`.
                        if (result !== void 0) {
                            resolve(result);
                            return;
                        }
                    }

                    resolve();
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function _setItem(key, value, callback, retriesLeft) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            // The localStorage API doesn't return undefined values in an
            // "expected" way, so undefined is always cast to null in all
            // drivers. See: https://github.com/mozilla/localForage/pull/42
            if (value === undefined) {
                value = null;
            }

            // Save the original value to pass to the callback.
            var originalValue = value;

            var dbInfo = self._dbInfo;
            dbInfo.serializer.serialize(value, function (value, error) {
                if (error) {
                    reject(error);
                } else {
                    dbInfo.db.transaction(function (t) {
                        tryExecuteSql(t, dbInfo, 'INSERT OR REPLACE INTO ' + dbInfo.storeName + ' ' + '(key, value) VALUES (?, ?)', [key, value], function () {
                            resolve(originalValue);
                        }, function (t, error) {
                            reject(error);
                        });
                    }, function (sqlError) {
                        // The transaction failed; check
                        // to see if it's a quota error.
                        if (sqlError.code === sqlError.QUOTA_ERR) {
                            // We reject the callback outright for now, but
                            // it's worth trying to re-run the transaction.
                            // Even if the user accepts the prompt to use
                            // more storage on Safari, this error will
                            // be called.
                            //
                            // Try to re-run the transaction.
                            if (retriesLeft > 0) {
                                resolve(_setItem.apply(self, [key, originalValue, callback, retriesLeft - 1]));
                                return;
                            }
                            reject(sqlError);
                        }
                    });
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function setItem$1(key, value, callback) {
    return _setItem.apply(this, [key, value, callback, 1]);
}

function removeItem$1(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'DELETE FROM ' + dbInfo.storeName + ' WHERE key = ?', [key], function () {
                    resolve();
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// Deletes every item in the table.
// TODO: Find out if this resets the AUTO_INCREMENT number.
function clear$1(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'DELETE FROM ' + dbInfo.storeName, [], function () {
                    resolve();
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// Does a simple `COUNT(key)` to get the number of items stored in
// localForage.
function length$1(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                // Ahhh, SQL makes this one soooooo easy.
                tryExecuteSql(t, dbInfo, 'SELECT COUNT(key) as c FROM ' + dbInfo.storeName, [], function (t, results) {
                    var result = results.rows.item(0).c;
                    resolve(result);
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// Return the key located at key index X; essentially gets the key from a
// `WHERE id = ?`. This is the most efficient way I can think to implement
// this rarely-used (in my experience) part of the API, but it can seem
// inconsistent, because we do `INSERT OR REPLACE INTO` on `setItem()`, so
// the ID of each key will change every time it's updated. Perhaps a stored
// procedure for the `setItem()` SQL would solve this problem?
// TODO: Don't change ID on `setItem()`.
function key$1(n, callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'SELECT key FROM ' + dbInfo.storeName + ' WHERE id = ? LIMIT 1', [n + 1], function (t, results) {
                    var result = results.rows.length ? results.rows.item(0).key : null;
                    resolve(result);
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function keys$1(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'SELECT key FROM ' + dbInfo.storeName, [], function (t, results) {
                    var keys = [];

                    for (var i = 0; i < results.rows.length; i++) {
                        keys.push(results.rows.item(i).key);
                    }

                    resolve(keys);
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// https://www.w3.org/TR/webdatabase/#databases
// > There is no way to enumerate or delete the databases available for an origin from this API.
function getAllStoreNames(db) {
    return new Promise$1(function (resolve, reject) {
        db.transaction(function (t) {
            t.executeSql('SELECT name FROM sqlite_master ' + "WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function (t, results) {
                var storeNames = [];

                for (var i = 0; i < results.rows.length; i++) {
                    storeNames.push(results.rows.item(i).name);
                }

                resolve({
                    db: db,
                    storeNames: storeNames
                });
            }, function (t, error) {
                reject(error);
            });
        }, function (sqlError) {
            reject(sqlError);
        });
    });
}

function dropInstance$1(options, callback) {
    callback = getCallback.apply(this, arguments);

    var currentConfig = this.config();
    options = typeof options !== 'function' && options || {};
    if (!options.name) {
        options.name = options.name || currentConfig.name;
        options.storeName = options.storeName || currentConfig.storeName;
    }

    var self = this;
    var promise;
    if (!options.name) {
        promise = Promise$1.reject('Invalid arguments');
    } else {
        promise = new Promise$1(function (resolve) {
            var db;
            if (options.name === currentConfig.name) {
                // use the db reference of the current instance
                db = self._dbInfo.db;
            } else {
                db = openDatabase(options.name, '', '', 0);
            }

            if (!options.storeName) {
                // drop all database tables
                resolve(getAllStoreNames(db));
            } else {
                resolve({
                    db: db,
                    storeNames: [options.storeName]
                });
            }
        }).then(function (operationInfo) {
            return new Promise$1(function (resolve, reject) {
                operationInfo.db.transaction(function (t) {
                    function dropTable(storeName) {
                        return new Promise$1(function (resolve, reject) {
                            t.executeSql('DROP TABLE IF EXISTS ' + storeName, [], function () {
                                resolve();
                            }, function (t, error) {
                                reject(error);
                            });
                        });
                    }

                    var operations = [];
                    for (var i = 0, len = operationInfo.storeNames.length; i < len; i++) {
                        operations.push(dropTable(operationInfo.storeNames[i]));
                    }

                    Promise$1.all(operations).then(function () {
                        resolve();
                    })["catch"](function (e) {
                        reject(e);
                    });
                }, function (sqlError) {
                    reject(sqlError);
                });
            });
        });
    }

    executeCallback(promise, callback);
    return promise;
}

var webSQLStorage = {
    _driver: 'webSQLStorage',
    _initStorage: _initStorage$1,
    _support: isWebSQLValid(),
    iterate: iterate$1,
    getItem: getItem$1,
    setItem: setItem$1,
    removeItem: removeItem$1,
    clear: clear$1,
    length: length$1,
    key: key$1,
    keys: keys$1,
    dropInstance: dropInstance$1
};

function isLocalStorageValid() {
    try {
        return typeof localStorage !== 'undefined' && 'setItem' in localStorage &&
        // in IE8 typeof localStorage.setItem === 'object'
        !!localStorage.setItem;
    } catch (e) {
        return false;
    }
}

function _getKeyPrefix(options, defaultConfig) {
    var keyPrefix = options.name + '/';

    if (options.storeName !== defaultConfig.storeName) {
        keyPrefix += options.storeName + '/';
    }
    return keyPrefix;
}

// Check if localStorage throws when saving an item
function checkIfLocalStorageThrows() {
    var localStorageTestKey = '_localforage_support_test';

    try {
        localStorage.setItem(localStorageTestKey, true);
        localStorage.removeItem(localStorageTestKey);

        return false;
    } catch (e) {
        return true;
    }
}

// Check if localStorage is usable and allows to save an item
// This method checks if localStorage is usable in Safari Private Browsing
// mode, or in any other case where the available quota for localStorage
// is 0 and there wasn't any saved items yet.
function _isLocalStorageUsable() {
    return !checkIfLocalStorageThrows() || localStorage.length > 0;
}

// Config the localStorage backend, using options set in the config.
function _initStorage$2(options) {
    var self = this;
    var dbInfo = {};
    if (options) {
        for (var i in options) {
            dbInfo[i] = options[i];
        }
    }

    dbInfo.keyPrefix = _getKeyPrefix(options, self._defaultConfig);

    if (!_isLocalStorageUsable()) {
        return Promise$1.reject();
    }

    self._dbInfo = dbInfo;
    dbInfo.serializer = localforageSerializer;

    return Promise$1.resolve();
}

// Remove all keys from the datastore, effectively destroying all data in
// the app's key/value store!
function clear$2(callback) {
    var self = this;
    var promise = self.ready().then(function () {
        var keyPrefix = self._dbInfo.keyPrefix;

        for (var i = localStorage.length - 1; i >= 0; i--) {
            var key = localStorage.key(i);

            if (key.indexOf(keyPrefix) === 0) {
                localStorage.removeItem(key);
            }
        }
    });

    executeCallback(promise, callback);
    return promise;
}

// Retrieve an item from the store. Unlike the original async_storage
// library in Gaia, we don't modify return values at all. If a key's value
// is `undefined`, we pass that value to the callback function.
function getItem$2(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        var result = localStorage.getItem(dbInfo.keyPrefix + key);

        // If a result was found, parse it from the serialized
        // string into a JS object. If result isn't truthy, the key
        // is likely undefined and we'll pass it straight to the
        // callback.
        if (result) {
            result = dbInfo.serializer.deserialize(result);
        }

        return result;
    });

    executeCallback(promise, callback);
    return promise;
}

// Iterate over all items in the store.
function iterate$2(iterator, callback) {
    var self = this;

    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        var keyPrefix = dbInfo.keyPrefix;
        var keyPrefixLength = keyPrefix.length;
        var length = localStorage.length;

        // We use a dedicated iterator instead of the `i` variable below
        // so other keys we fetch in localStorage aren't counted in
        // the `iterationNumber` argument passed to the `iterate()`
        // callback.
        //
        // See: github.com/mozilla/localForage/pull/435#discussion_r38061530
        var iterationNumber = 1;

        for (var i = 0; i < length; i++) {
            var key = localStorage.key(i);
            if (key.indexOf(keyPrefix) !== 0) {
                continue;
            }
            var value = localStorage.getItem(key);

            // If a result was found, parse it from the serialized
            // string into a JS object. If result isn't truthy, the
            // key is likely undefined and we'll pass it straight
            // to the iterator.
            if (value) {
                value = dbInfo.serializer.deserialize(value);
            }

            value = iterator(value, key.substring(keyPrefixLength), iterationNumber++);

            if (value !== void 0) {
                return value;
            }
        }
    });

    executeCallback(promise, callback);
    return promise;
}

// Same as localStorage's key() method, except takes a callback.
function key$2(n, callback) {
    var self = this;
    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        var result;
        try {
            result = localStorage.key(n);
        } catch (error) {
            result = null;
        }

        // Remove the prefix from the key, if a key is found.
        if (result) {
            result = result.substring(dbInfo.keyPrefix.length);
        }

        return result;
    });

    executeCallback(promise, callback);
    return promise;
}

function keys$2(callback) {
    var self = this;
    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        var length = localStorage.length;
        var keys = [];

        for (var i = 0; i < length; i++) {
            var itemKey = localStorage.key(i);
            if (itemKey.indexOf(dbInfo.keyPrefix) === 0) {
                keys.push(itemKey.substring(dbInfo.keyPrefix.length));
            }
        }

        return keys;
    });

    executeCallback(promise, callback);
    return promise;
}

// Supply the number of keys in the datastore to the callback function.
function length$2(callback) {
    var self = this;
    var promise = self.keys().then(function (keys) {
        return keys.length;
    });

    executeCallback(promise, callback);
    return promise;
}

// Remove an item from the store, nice and simple.
function removeItem$2(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        localStorage.removeItem(dbInfo.keyPrefix + key);
    });

    executeCallback(promise, callback);
    return promise;
}

// Set a key's value and run an optional callback once the value is set.
// Unlike Gaia's implementation, the callback function is passed the value,
// in case you want to operate on that value only after you're sure it
// saved, or something like that.
function setItem$2(key, value, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = self.ready().then(function () {
        // Convert undefined values to null.
        // https://github.com/mozilla/localForage/pull/42
        if (value === undefined) {
            value = null;
        }

        // Save the original value to pass to the callback.
        var originalValue = value;

        return new Promise$1(function (resolve, reject) {
            var dbInfo = self._dbInfo;
            dbInfo.serializer.serialize(value, function (value, error) {
                if (error) {
                    reject(error);
                } else {
                    try {
                        localStorage.setItem(dbInfo.keyPrefix + key, value);
                        resolve(originalValue);
                    } catch (e) {
                        // localStorage capacity exceeded.
                        // TODO: Make this a specific error/event.
                        if (e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
                            reject(e);
                        }
                        reject(e);
                    }
                }
            });
        });
    });

    executeCallback(promise, callback);
    return promise;
}

function dropInstance$2(options, callback) {
    callback = getCallback.apply(this, arguments);

    options = typeof options !== 'function' && options || {};
    if (!options.name) {
        var currentConfig = this.config();
        options.name = options.name || currentConfig.name;
        options.storeName = options.storeName || currentConfig.storeName;
    }

    var self = this;
    var promise;
    if (!options.name) {
        promise = Promise$1.reject('Invalid arguments');
    } else {
        promise = new Promise$1(function (resolve) {
            if (!options.storeName) {
                resolve(options.name + '/');
            } else {
                resolve(_getKeyPrefix(options, self._defaultConfig));
            }
        }).then(function (keyPrefix) {
            for (var i = localStorage.length - 1; i >= 0; i--) {
                var key = localStorage.key(i);

                if (key.indexOf(keyPrefix) === 0) {
                    localStorage.removeItem(key);
                }
            }
        });
    }

    executeCallback(promise, callback);
    return promise;
}

var localStorageWrapper = {
    _driver: 'localStorageWrapper',
    _initStorage: _initStorage$2,
    _support: isLocalStorageValid(),
    iterate: iterate$2,
    getItem: getItem$2,
    setItem: setItem$2,
    removeItem: removeItem$2,
    clear: clear$2,
    length: length$2,
    key: key$2,
    keys: keys$2,
    dropInstance: dropInstance$2
};

var sameValue = function sameValue(x, y) {
    return x === y || typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y);
};

var includes = function includes(array, searchElement) {
    var len = array.length;
    var i = 0;
    while (i < len) {
        if (sameValue(array[i], searchElement)) {
            return true;
        }
        i++;
    }

    return false;
};

var isArray = Array.isArray || function (arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
};

// Drivers are stored here when `defineDriver()` is called.
// They are shared across all instances of localForage.
var DefinedDrivers = {};

var DriverSupport = {};

var DefaultDrivers = {
    INDEXEDDB: asyncStorage,
    WEBSQL: webSQLStorage,
    LOCALSTORAGE: localStorageWrapper
};

var DefaultDriverOrder = [DefaultDrivers.INDEXEDDB._driver, DefaultDrivers.WEBSQL._driver, DefaultDrivers.LOCALSTORAGE._driver];

var OptionalDriverMethods = ['dropInstance'];

var LibraryMethods = ['clear', 'getItem', 'iterate', 'key', 'keys', 'length', 'removeItem', 'setItem'].concat(OptionalDriverMethods);

var DefaultConfig = {
    description: '',
    driver: DefaultDriverOrder.slice(),
    name: 'localforage',
    // Default DB size is _JUST UNDER_ 5MB, as it's the highest size
    // we can use without a prompt.
    size: 4980736,
    storeName: 'keyvaluepairs',
    version: 1.0
};

function callWhenReady(localForageInstance, libraryMethod) {
    localForageInstance[libraryMethod] = function () {
        var _args = arguments;
        return localForageInstance.ready().then(function () {
            return localForageInstance[libraryMethod].apply(localForageInstance, _args);
        });
    };
}

function extend() {
    for (var i = 1; i < arguments.length; i++) {
        var arg = arguments[i];

        if (arg) {
            for (var _key in arg) {
                if (arg.hasOwnProperty(_key)) {
                    if (isArray(arg[_key])) {
                        arguments[0][_key] = arg[_key].slice();
                    } else {
                        arguments[0][_key] = arg[_key];
                    }
                }
            }
        }
    }

    return arguments[0];
}

var LocalForage = function () {
    function LocalForage(options) {
        _classCallCheck(this, LocalForage);

        for (var driverTypeKey in DefaultDrivers) {
            if (DefaultDrivers.hasOwnProperty(driverTypeKey)) {
                var driver = DefaultDrivers[driverTypeKey];
                var driverName = driver._driver;
                this[driverTypeKey] = driverName;

                if (!DefinedDrivers[driverName]) {
                    // we don't need to wait for the promise,
                    // since the default drivers can be defined
                    // in a blocking manner
                    this.defineDriver(driver);
                }
            }
        }

        this._defaultConfig = extend({}, DefaultConfig);
        this._config = extend({}, this._defaultConfig, options);
        this._driverSet = null;
        this._initDriver = null;
        this._ready = false;
        this._dbInfo = null;

        this._wrapLibraryMethodsWithReady();
        this.setDriver(this._config.driver)["catch"](function () {});
    }

    // Set any config values for localForage; can be called anytime before
    // the first API call (e.g. `getItem`, `setItem`).
    // We loop through options so we don't overwrite existing config
    // values.


    LocalForage.prototype.config = function config(options) {
        // If the options argument is an object, we use it to set values.
        // Otherwise, we return either a specified config value or all
        // config values.
        if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
            // If localforage is ready and fully initialized, we can't set
            // any new configuration values. Instead, we return an error.
            if (this._ready) {
                return new Error("Can't call config() after localforage " + 'has been used.');
            }

            for (var i in options) {
                if (i === 'storeName') {
                    options[i] = options[i].replace(/\W/g, '_');
                }

                if (i === 'version' && typeof options[i] !== 'number') {
                    return new Error('Database version must be a number.');
                }

                this._config[i] = options[i];
            }

            // after all config options are set and
            // the driver option is used, try setting it
            if ('driver' in options && options.driver) {
                return this.setDriver(this._config.driver);
            }

            return true;
        } else if (typeof options === 'string') {
            return this._config[options];
        } else {
            return this._config;
        }
    };

    // Used to define a custom driver, shared across all instances of
    // localForage.


    LocalForage.prototype.defineDriver = function defineDriver(driverObject, callback, errorCallback) {
        var promise = new Promise$1(function (resolve, reject) {
            try {
                var driverName = driverObject._driver;
                var complianceError = new Error('Custom driver not compliant; see ' + 'https://mozilla.github.io/localForage/#definedriver');

                // A driver name should be defined and not overlap with the
                // library-defined, default drivers.
                if (!driverObject._driver) {
                    reject(complianceError);
                    return;
                }

                var driverMethods = LibraryMethods.concat('_initStorage');
                for (var i = 0, len = driverMethods.length; i < len; i++) {
                    var driverMethodName = driverMethods[i];

                    // when the property is there,
                    // it should be a method even when optional
                    var isRequired = !includes(OptionalDriverMethods, driverMethodName);
                    if ((isRequired || driverObject[driverMethodName]) && typeof driverObject[driverMethodName] !== 'function') {
                        reject(complianceError);
                        return;
                    }
                }

                var configureMissingMethods = function configureMissingMethods() {
                    var methodNotImplementedFactory = function methodNotImplementedFactory(methodName) {
                        return function () {
                            var error = new Error('Method ' + methodName + ' is not implemented by the current driver');
                            var promise = Promise$1.reject(error);
                            executeCallback(promise, arguments[arguments.length - 1]);
                            return promise;
                        };
                    };

                    for (var _i = 0, _len = OptionalDriverMethods.length; _i < _len; _i++) {
                        var optionalDriverMethod = OptionalDriverMethods[_i];
                        if (!driverObject[optionalDriverMethod]) {
                            driverObject[optionalDriverMethod] = methodNotImplementedFactory(optionalDriverMethod);
                        }
                    }
                };

                configureMissingMethods();

                var setDriverSupport = function setDriverSupport(support) {
                    if (DefinedDrivers[driverName]) {
                        console.info('Redefining LocalForage driver: ' + driverName);
                    }
                    DefinedDrivers[driverName] = driverObject;
                    DriverSupport[driverName] = support;
                    // don't use a then, so that we can define
                    // drivers that have simple _support methods
                    // in a blocking manner
                    resolve();
                };

                if ('_support' in driverObject) {
                    if (driverObject._support && typeof driverObject._support === 'function') {
                        driverObject._support().then(setDriverSupport, reject);
                    } else {
                        setDriverSupport(!!driverObject._support);
                    }
                } else {
                    setDriverSupport(true);
                }
            } catch (e) {
                reject(e);
            }
        });

        executeTwoCallbacks(promise, callback, errorCallback);
        return promise;
    };

    LocalForage.prototype.driver = function driver() {
        return this._driver || null;
    };

    LocalForage.prototype.getDriver = function getDriver(driverName, callback, errorCallback) {
        var getDriverPromise = DefinedDrivers[driverName] ? Promise$1.resolve(DefinedDrivers[driverName]) : Promise$1.reject(new Error('Driver not found.'));

        executeTwoCallbacks(getDriverPromise, callback, errorCallback);
        return getDriverPromise;
    };

    LocalForage.prototype.getSerializer = function getSerializer(callback) {
        var serializerPromise = Promise$1.resolve(localforageSerializer);
        executeTwoCallbacks(serializerPromise, callback);
        return serializerPromise;
    };

    LocalForage.prototype.ready = function ready(callback) {
        var self = this;

        var promise = self._driverSet.then(function () {
            if (self._ready === null) {
                self._ready = self._initDriver();
            }

            return self._ready;
        });

        executeTwoCallbacks(promise, callback, callback);
        return promise;
    };

    LocalForage.prototype.setDriver = function setDriver(drivers, callback, errorCallback) {
        var self = this;

        if (!isArray(drivers)) {
            drivers = [drivers];
        }

        var supportedDrivers = this._getSupportedDrivers(drivers);

        function setDriverToConfig() {
            self._config.driver = self.driver();
        }

        function extendSelfWithDriver(driver) {
            self._extend(driver);
            setDriverToConfig();

            self._ready = self._initStorage(self._config);
            return self._ready;
        }

        function initDriver(supportedDrivers) {
            return function () {
                var currentDriverIndex = 0;

                function driverPromiseLoop() {
                    while (currentDriverIndex < supportedDrivers.length) {
                        var driverName = supportedDrivers[currentDriverIndex];
                        currentDriverIndex++;

                        self._dbInfo = null;
                        self._ready = null;

                        return self.getDriver(driverName).then(extendSelfWithDriver)["catch"](driverPromiseLoop);
                    }

                    setDriverToConfig();
                    var error = new Error('No available storage method found.');
                    self._driverSet = Promise$1.reject(error);
                    return self._driverSet;
                }

                return driverPromiseLoop();
            };
        }

        // There might be a driver initialization in progress
        // so wait for it to finish in order to avoid a possible
        // race condition to set _dbInfo
        var oldDriverSetDone = this._driverSet !== null ? this._driverSet["catch"](function () {
            return Promise$1.resolve();
        }) : Promise$1.resolve();

        this._driverSet = oldDriverSetDone.then(function () {
            var driverName = supportedDrivers[0];
            self._dbInfo = null;
            self._ready = null;

            return self.getDriver(driverName).then(function (driver) {
                self._driver = driver._driver;
                setDriverToConfig();
                self._wrapLibraryMethodsWithReady();
                self._initDriver = initDriver(supportedDrivers);
            });
        })["catch"](function () {
            setDriverToConfig();
            var error = new Error('No available storage method found.');
            self._driverSet = Promise$1.reject(error);
            return self._driverSet;
        });

        executeTwoCallbacks(this._driverSet, callback, errorCallback);
        return this._driverSet;
    };

    LocalForage.prototype.supports = function supports(driverName) {
        return !!DriverSupport[driverName];
    };

    LocalForage.prototype._extend = function _extend(libraryMethodsAndProperties) {
        extend(this, libraryMethodsAndProperties);
    };

    LocalForage.prototype._getSupportedDrivers = function _getSupportedDrivers(drivers) {
        var supportedDrivers = [];
        for (var i = 0, len = drivers.length; i < len; i++) {
            var driverName = drivers[i];
            if (this.supports(driverName)) {
                supportedDrivers.push(driverName);
            }
        }
        return supportedDrivers;
    };

    LocalForage.prototype._wrapLibraryMethodsWithReady = function _wrapLibraryMethodsWithReady() {
        // Add a stub for each driver API method that delays the call to the
        // corresponding driver method until localForage is ready. These stubs
        // will be replaced by the driver methods as soon as the driver is
        // loaded, so there is no performance impact.
        for (var i = 0, len = LibraryMethods.length; i < len; i++) {
            callWhenReady(this, LibraryMethods[i]);
        }
    };

    LocalForage.prototype.createInstance = function createInstance(options) {
        return new LocalForage(options);
    };

    return LocalForage;
}();

// The actual localForage object that we expose as a module or via a
// global. It's extended by pulling in one of our other libraries.


var localforage_js = new LocalForage();

module.exports = localforage_js;

},{"3":3}]},{},[4])(4)
});


/***/ }),

/***/ "./node_modules/ordered-uuid/index.js":
/*!********************************************!*\
  !*** ./node_modules/ordered-uuid/index.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var uuid = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");

module.exports = {
  generate: function() {
    var unordered = uuid.v1();
    return unordered.substr(14, 4) + unordered.substr(9, 4) + unordered.substr(0, 8) + unordered.substr(19, 4) + unordered.substr(24, unordered.length);
  },

  toBinary16: function(orderedUuid) {
    return new Buffer(orderedUuid, 'hex');
  },

  fromBinary16: function(binaryOrderedUuid) {
    return binaryOrderedUuid.toString('hex');
  }
};


/***/ }),

/***/ "./node_modules/querystring/decode.js":
/*!********************************************!*\
  !*** ./node_modules/querystring/decode.js ***!
  \********************************************/
/***/ ((module) => {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (Array.isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};


/***/ }),

/***/ "./node_modules/querystring/encode.js":
/*!********************************************!*\
  !*** ./node_modules/querystring/encode.js ***!
  \********************************************/
/***/ ((module) => {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return Object.keys(obj).map(function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (Array.isArray(obj[k])) {
        return obj[k].map(function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).filter(Boolean).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};


/***/ }),

/***/ "./node_modules/querystring/index.js":
/*!*******************************************!*\
  !*** ./node_modules/querystring/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring/encode.js");


/***/ }),

/***/ "./src/pages/Background/index.js":
/*!***************************************!*\
  !*** ./src/pages/Background/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_saveToDrive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/saveToDrive */ "./src/pages/Background/modules/saveToDrive.js");
/* harmony import */ var localbase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! localbase */ "./node_modules/localbase/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var db = new localbase__WEBPACK_IMPORTED_MODULE_1__["default"]("db");

// Get current tab (requires activeTab permission)
var getCurrentTab = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var queryOptions, _yield$chrome$tabs$qu, _yield$chrome$tabs$qu2, tab;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          queryOptions = {
            active: true,
            lastFocusedWindow: true
          };
          _context.next = 3;
          return chrome.tabs.query(queryOptions);
        case 3:
          _yield$chrome$tabs$qu = _context.sent;
          _yield$chrome$tabs$qu2 = _slicedToArray(_yield$chrome$tabs$qu, 1);
          tab = _yield$chrome$tabs$qu2[0];
          return _context.abrupt("return", tab);
        case 7:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getCurrentTab() {
    return _ref.apply(this, arguments);
  };
}();
var resetActiveTab = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var editor_url, _yield$chrome$storage, recordingDuration, maxRecordingDuration, version, _yield$chrome$storage2, activeTab;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          editor_url = "editor.html"; // Check video duration (in miliseconds)
          _context3.next = 3;
          return chrome.storage.local.get(["recordingDuration"]);
        case 3:
          _yield$chrome$storage = _context3.sent;
          recordingDuration = _yield$chrome$storage.recordingDuration;
          // Videos that are over 5 minutes long take too long to process on the local machine
          maxRecordingDuration = 300000;
          if (recordingDuration > maxRecordingDuration) {
            editor_url = "editorfallback.html";
          }

          // Check if Chrome version is 109 or below
          if (navigator.userAgent.includes("Chrome/")) {
            version = parseInt(navigator.userAgent.match(/Chrome\/([0-9]+)/)[1]);
            if (version <= 109) {
              editor_url = "editorfallback.html";
            }
          }
          _context3.next = 10;
          return chrome.storage.local.get(["activeTab"]);
        case 10:
          _yield$chrome$storage2 = _context3.sent;
          activeTab = _yield$chrome$storage2.activeTab;
          // Check if activeTab exists
          chrome.tabs.get(activeTab, function (tab) {
            if (tab) {
              // Focus the window
              chrome.windows.update(tab.windowId, {
                focused: true
              }, function () {
                chrome.tabs.update(activeTab, {
                  active: true,
                  selected: true,
                  highlighted: true
                });
                chrome.tabs.create({
                  url: editor_url,
                  index: 1,
                  pinned: true,
                  active: false
                }, /*#__PURE__*/function () {
                  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(tab) {
                    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                      while (1) switch (_context2.prev = _context2.next) {
                        case 0:
                          chrome.windows.update(tab.windowId, {
                            focused: true
                          });
                          chrome.storage.local.set({
                            sandboxTab: tab.id
                          });
                          chrome.tabs.sendMessage(activeTab, {
                            type: "ready-to-record"
                          });
                          chrome.tabs.highlight({
                            tabs: activeTab
                          });
                        case 4:
                        case "end":
                          return _context2.stop();
                      }
                    }, _callee2);
                  }));
                  return function (_x) {
                    return _ref3.apply(this, arguments);
                  };
                }());
              });
            }
          });
        case 13:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function resetActiveTab() {
    return _ref2.apply(this, arguments);
  };
}();
var resetActiveTabRestart = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    var _yield$chrome$storage3, activeTab;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return chrome.storage.local.get(["activeTab"]);
        case 2:
          _yield$chrome$storage3 = _context4.sent;
          activeTab = _yield$chrome$storage3.activeTab;
          chrome.tabs.get(activeTab, function (tab) {
            chrome.windows.update(tab.windowId, {
              focused: true
            }, function () {
              chrome.tabs.update(activeTab, {
                active: true
              });
              chrome.tabs.sendMessage(activeTab, {
                type: "ready-to-record"
              });
            });
          });
        case 5:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function resetActiveTabRestart() {
    return _ref4.apply(this, arguments);
  };
}();
var startRecording = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
    var _yield$chrome$storage4, customRegion, _yield$chrome$storage5, alarm, _yield$chrome$storage6, alarmTime, seconds;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          chrome.storage.local.set({
            recordingStartTime: Date.now(),
            restarting: false
          });

          // Check if customRegion is set
          _context5.next = 3;
          return chrome.storage.local.get(["customRegion"]);
        case 3:
          _yield$chrome$storage4 = _context5.sent;
          customRegion = _yield$chrome$storage4.customRegion;
          if (customRegion) {
            sendMessageRecord({
              type: "start-recording-tab",
              region: true
            });
          } else {
            sendMessageRecord({
              type: "start-recording-tab"
            });
          }
          chrome.action.setIcon({
            path: "assets/recording-logo.png"
          });
          // Set up alarm if set in storage
          _context5.next = 9;
          return chrome.storage.local.get(["alarm"]);
        case 9:
          _yield$chrome$storage5 = _context5.sent;
          alarm = _yield$chrome$storage5.alarm;
          _context5.next = 13;
          return chrome.storage.local.get(["alarmTime"]);
        case 13:
          _yield$chrome$storage6 = _context5.sent;
          alarmTime = _yield$chrome$storage6.alarmTime;
          if (alarm) {
            seconds = parseFloat(alarmTime);
            chrome.alarms.create("recording-alarm", {
              delayInMinutes: seconds / 60
            });
          }
        case 16:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function startRecording() {
    return _ref5.apply(this, arguments);
  };
}();

// Detect commands
chrome.commands.onCommand.addListener( /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(command) {
    var activeTab, _activeTab, _activeTab2;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          if (!(command === "start-recording")) {
            _context6.next = 7;
            break;
          }
          _context6.next = 3;
          return getCurrentTab();
        case 3:
          activeTab = _context6.sent;
          // Check if page is offline

          // Check if it's possible to inject into content (not a chrome:// page, new tab, etc)
          if (!(navigator.onLine === false && !activeTab.url.includes("/playground.html") && !activeTab.url.includes("/setup.html") || activeTab.url.startsWith("chrome://") || activeTab.url.startsWith("chrome-extension://") && !activeTab.url.includes("/playground.html") && !activeTab.url.includes("/setup.html")) && !activeTab.url.includes("stackoverflow.com/") && !activeTab.url.includes("chrome.google.com/webstore") && !activeTab.url.includes("chromewebstore.google.com")) {
            chrome.tabs.sendMessage(activeTab.id, {
              type: "start-stream"
            });
          } else {
            chrome.tabs.create({
              url: "playground.html",
              active: true
            }).then(function (tab) {
              chrome.storage.local.set({
                activeTab: tab.id
              });
              // Wait for the tab to load
              chrome.tabs.onUpdated.addListener(function _(tabId, changeInfo, tab) {
                if (tabId === tab.id && changeInfo.status === "complete") {
                  setTimeout(function () {
                    chrome.tabs.sendMessage(tab.id, {
                      type: "start-stream"
                    });
                  }, 500);
                  chrome.tabs.onUpdated.removeListener(_);
                }
              });
            });
          }
          _context6.next = 19;
          break;
        case 7:
          if (!(command === "cancel-recording")) {
            _context6.next = 14;
            break;
          }
          _context6.next = 10;
          return getCurrentTab();
        case 10:
          _activeTab = _context6.sent;
          chrome.tabs.sendMessage(_activeTab.id, {
            type: "cancel-recording"
          });
          _context6.next = 19;
          break;
        case 14:
          if (!(command == "pause-recording")) {
            _context6.next = 19;
            break;
          }
          _context6.next = 17;
          return getCurrentTab();
        case 17:
          _activeTab2 = _context6.sent;
          chrome.tabs.sendMessage(_activeTab2.id, {
            type: "pause-recording"
          });
        case 19:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function (_x2) {
    return _ref6.apply(this, arguments);
  };
}());
var handleAlarm = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(alarm) {
    var _yield$chrome$storage7, recording, _yield$chrome$storage8, recordingTab, _yield$chrome$storage9, activeTab, currentTab;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          if (!(alarm.name === "recording-alarm")) {
            _context7.next = 22;
            break;
          }
          _context7.next = 3;
          return chrome.storage.local.get(["recording"]);
        case 3:
          _yield$chrome$storage7 = _context7.sent;
          recording = _yield$chrome$storage7.recording;
          if (!recording) {
            _context7.next = 21;
            break;
          }
          stopRecording();
          _context7.next = 9;
          return chrome.storage.local.get(["recordingTab"]);
        case 9:
          _yield$chrome$storage8 = _context7.sent;
          recordingTab = _yield$chrome$storage8.recordingTab;
          chrome.tabs.sendMessage(recordingTab, {
            type: "stop-recording-tab"
          });
          _context7.next = 14;
          return chrome.storage.local.get(["activeTab"]);
        case 14:
          _yield$chrome$storage9 = _context7.sent;
          activeTab = _yield$chrome$storage9.activeTab;
          chrome.tabs.sendMessage(activeTab, {
            type: "stop-recording-tab"
          });
          _context7.next = 19;
          return getCurrentTab();
        case 19:
          currentTab = _context7.sent;
          chrome.tabs.sendMessage(currentTab.id, {
            type: "stop-recording-tab"
          });
        case 21:
          chrome.alarms.clear("recording-alarm");
        case 22:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function handleAlarm(_x3) {
    return _ref7.apply(this, arguments);
  };
}();
var alarmListener = function alarmListener(alarm) {
  handleAlarm(alarm);
};
var addAlarmListener = function addAlarmListener() {
  if (!chrome.alarms.onAlarm.hasListener(alarmListener)) {
    chrome.alarms.onAlarm.addListener(alarmListener);
  }
};

// Check if the permission is granted
if (chrome.permissions) {
  chrome.permissions.contains({
    permissions: ["alarms"]
  }, function (result) {
    if (result) {
      addAlarmListener();
    }
  });
}
var onActivated = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(activeInfo) {
    var _yield$chrome$storage10, recordingStartTime, tab, _yield$chrome$storage11, recording, _yield$chrome$storage12, tabRecordedID, _yield$chrome$storage13, region, _yield$chrome$storage14, customRegion, _yield$chrome$storage15, alarm, _yield$chrome$storage16, alarmTime, seconds, time, remaining, _time;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return chrome.storage.local.get(["recordingStartTime"]);
        case 2:
          _yield$chrome$storage10 = _context8.sent;
          recordingStartTime = _yield$chrome$storage10.recordingStartTime;
          _context8.next = 6;
          return chrome.tabs.get(activeInfo.tabId);
        case 6:
          tab = _context8.sent;
          _context8.next = 9;
          return chrome.storage.local.get(["recording"]);
        case 9:
          _yield$chrome$storage11 = _context8.sent;
          recording = _yield$chrome$storage11.recording;
          if (!recording) {
            _context8.next = 28;
            break;
          }
          _context8.next = 14;
          return chrome.storage.local.get(["tabRecordedID"]);
        case 14:
          _yield$chrome$storage12 = _context8.sent;
          tabRecordedID = _yield$chrome$storage12.tabRecordedID;
          if (tabRecordedID && tabRecordedID != activeInfo.tabId) {
            chrome.tabs.sendMessage(activeInfo.tabId, {
              type: "hide-popup-recording"
            });
          } else {
            chrome.storage.local.set({
              activeTab: activeInfo.tabId
            });
          }

          // Check if region or customRegion is set
          _context8.next = 19;
          return chrome.storage.local.get(["region"]);
        case 19:
          _yield$chrome$storage13 = _context8.sent;
          region = _yield$chrome$storage13.region;
          _context8.next = 23;
          return chrome.storage.local.get(["customRegion"]);
        case 23:
          _yield$chrome$storage14 = _context8.sent;
          customRegion = _yield$chrome$storage14.customRegion;
          if (!region && !customRegion) {
            chrome.tabs.sendMessage(activeInfo.tabId, {
              type: "recording-check"
            });
          }
          _context8.next = 29;
          break;
        case 28:
          chrome.tabs.sendMessage(activeInfo.tabId, {
            type: "recording-ended"
          });
        case 29:
          if (!recordingStartTime) {
            _context8.next = 47;
            break;
          }
          _context8.next = 32;
          return chrome.storage.local.get(["alarm"]);
        case 32:
          _yield$chrome$storage15 = _context8.sent;
          alarm = _yield$chrome$storage15.alarm;
          if (!alarm) {
            _context8.next = 45;
            break;
          }
          _context8.next = 37;
          return chrome.storage.local.get(["alarmTime"]);
        case 37:
          _yield$chrome$storage16 = _context8.sent;
          alarmTime = _yield$chrome$storage16.alarmTime;
          seconds = parseFloat(alarmTime);
          time = Math.floor((Date.now() - recordingStartTime) / 1000);
          remaining = seconds - time;
          chrome.tabs.sendMessage(activeInfo.tabId, {
            type: "time",
            time: remaining
          });
          _context8.next = 47;
          break;
        case 45:
          _time = Math.floor((Date.now() - recordingStartTime) / 1000);
          chrome.tabs.sendMessage(activeInfo.tabId, {
            type: "time",
            time: _time
          });
        case 47:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function onActivated(_x4) {
    return _ref8.apply(this, arguments);
  };
}();
chrome.windows.onFocusChanged.addListener( /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(windowId) {
    var _yield$chrome$tabs$qu3, _yield$chrome$tabs$qu4, activeTab;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          if (!(windowId === chrome.windows.WINDOW_ID_NONE)) {
            _context9.next = 2;
            break;
          }
          return _context9.abrupt("return");
        case 2:
          _context9.next = 4;
          return chrome.tabs.query({
            active: true,
            windowId: windowId
          });
        case 4:
          _yield$chrome$tabs$qu3 = _context9.sent;
          _yield$chrome$tabs$qu4 = _slicedToArray(_yield$chrome$tabs$qu3, 1);
          activeTab = _yield$chrome$tabs$qu4[0];
          if (activeTab) {
            onActivated({
              tabId: activeTab.id
            });
          }
        case 8:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return function (_x5) {
    return _ref9.apply(this, arguments);
  };
}());

// Check when a page is activated
chrome.tabs.onActivated.addListener( /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(activeInfo) {
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          onActivated(activeInfo);
        case 1:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return function (_x6) {
    return _ref10.apply(this, arguments);
  };
}());

// Check when a user navigates to a different domain in the same tab (chrome.tabs?)
chrome.tabs.onUpdated.addListener( /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(tabId, changeInfo, tab) {
    var _yield$chrome$storage17, recordingStartTime, _tab, _yield$chrome$storage18, alarm, _yield$chrome$storage19, alarmTime, seconds, time, remaining, _time2, _yield$chrome$storage20, recording, commands;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          if (!(changeInfo.status === "complete")) {
            _context11.next = 36;
            break;
          }
          _context11.next = 3;
          return chrome.storage.local.get(["recordingStartTime"]);
        case 3:
          _yield$chrome$storage17 = _context11.sent;
          recordingStartTime = _yield$chrome$storage17.recordingStartTime;
          _context11.next = 7;
          return chrome.tabs.get(tabId);
        case 7:
          _tab = _context11.sent;
          if (!recordingStartTime) {
            _context11.next = 26;
            break;
          }
          _context11.next = 11;
          return chrome.storage.local.get(["alarm"]);
        case 11:
          _yield$chrome$storage18 = _context11.sent;
          alarm = _yield$chrome$storage18.alarm;
          if (!alarm) {
            _context11.next = 24;
            break;
          }
          _context11.next = 16;
          return chrome.storage.local.get(["alarmTime"]);
        case 16:
          _yield$chrome$storage19 = _context11.sent;
          alarmTime = _yield$chrome$storage19.alarmTime;
          seconds = parseFloat(alarmTime);
          time = Math.floor((Date.now() - recordingStartTime) / 1000);
          remaining = seconds - time;
          chrome.tabs.sendMessage(tabId, {
            type: "time",
            time: remaining
          });
          _context11.next = 26;
          break;
        case 24:
          _time2 = Math.floor((Date.now() - recordingStartTime) / 1000);
          chrome.tabs.sendMessage(tabId, {
            type: "time",
            time: _time2
          });
        case 26:
          _context11.next = 28;
          return chrome.storage.local.get(["recording"]);
        case 28:
          _yield$chrome$storage20 = _context11.sent;
          recording = _yield$chrome$storage20.recording;
          if (!recording) {
            chrome.tabs.sendMessage(_tab.id, {
              type: "recording-ended"
            });
          }
          _context11.next = 33;
          return chrome.commands.getAll();
        case 33:
          commands = _context11.sent;
          chrome.tabs.sendMessage(_tab.id, {
            type: "commands",
            commands: commands
          });

          // Check if tab is playground.html
          if (_tab.url.includes(chrome.runtime.getURL("playground.html")) && changeInfo.status === "complete") {
            chrome.tabs.sendMessage(_tab.id, {
              type: "toggle-popup"
            });
          }
        case 36:
        case "end":
          return _context11.stop();
      }
    }, _callee11);
  }));
  return function (_x7, _x8, _x9) {
    return _ref11.apply(this, arguments);
  };
}());
function blobToBase64(blob) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();
    reader.onload = function () {
      resolve(reader.result);
    };
    reader.onerror = function (error) {
      reject(error);
    };
    reader.readAsDataURL(blob);
  });
}
var sendChunks = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
    var override,
      _yield$chrome$storage21,
      sandboxTab,
      _args14 = arguments;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          override = _args14.length > 0 && _args14[0] !== undefined ? _args14[0] : false;
          _context14.next = 3;
          return chrome.storage.local.get(["sandboxTab"]);
        case 3:
          _yield$chrome$storage21 = _context14.sent;
          sandboxTab = _yield$chrome$storage21.sandboxTab;
          db.collection("chunks").get().then( /*#__PURE__*/function () {
            var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(chunks) {
              var batchSize, chunksCount, batch, currentIndex, maxRetries, sendNextBatch;
              return _regeneratorRuntime().wrap(function _callee13$(_context13) {
                while (1) switch (_context13.prev = _context13.next) {
                  case 0:
                    if (!(chunks.length === 0)) {
                      _context13.next = 3;
                      break;
                    }
                    chrome.tabs.sendMessage(sandboxTab, {
                      type: "make-video-tab",
                      override: override
                    });
                    // Handle the case when there are no chunks to send (e.g., display a message)
                    return _context13.abrupt("return");
                  case 3:
                    batchSize = 10; // Number of chunks to send in each batch
                    chunksCount = chunks.length;
                    batch = [];
                    currentIndex = 0;
                    maxRetries = 3; // Maximum number of retry attempts per batch
                    chrome.tabs.sendMessage(sandboxTab, {
                      type: "chunk-count",
                      count: chunksCount
                    });
                    sendNextBatch = /*#__PURE__*/function () {
                      var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
                        var retryCount,
                          start,
                          end,
                          i,
                          chunk,
                          chunkData,
                          index,
                          base64,
                          _args12 = arguments;
                        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
                          while (1) switch (_context12.prev = _context12.next) {
                            case 0:
                              retryCount = _args12.length > 0 && _args12[0] !== undefined ? _args12[0] : 0;
                              // Determine the range of chunks for the current batch
                              start = currentIndex;
                              end = Math.min(currentIndex + batchSize, chunksCount); // Collect the chunks for the batch
                              batch = [];
                              i = start;
                            case 5:
                              if (!(i < end)) {
                                _context12.next = 16;
                                break;
                              }
                              chunk = chunks[i];
                              chunkData = chunk.chunk;
                              index = chunk.index;
                              _context12.next = 11;
                              return blobToBase64(chunkData);
                            case 11:
                              base64 = _context12.sent;
                              if (base64) {
                                batch.push({
                                  chunk: base64,
                                  index: index
                                });
                              } else {
                                console.error("Error converting a chunk to Base64:", chunk);
                                // Handle the error as needed (e.g., skip the chunk or retry)
                              }
                            case 13:
                              i++;
                              _context12.next = 5;
                              break;
                            case 16:
                              if (batch.length > 0) {
                                // Send the batch to the sandboxed tab
                                chrome.tabs.sendMessage(sandboxTab, {
                                  type: "new-chunk-tab",
                                  chunks: batch
                                }, function (response) {
                                  if (response) {
                                    // Increment the current index and send the next batch
                                    currentIndex += batchSize;
                                    if (currentIndex < chunksCount) {
                                      sendNextBatch();
                                    } else {
                                      // Update the user interface or provide feedback as needed
                                      chrome.tabs.sendMessage(sandboxTab, {
                                        type: "make-video-tab",
                                        override: override
                                      });
                                    }
                                  } else {
                                    if (retryCount < maxRetries) {
                                      sendNextBatch(retryCount + 1);
                                    } else {
                                      console.error("Maximum retry attempts reached for this batch.");
                                      // Handle the case where the batch couldn't be sent after retries
                                    }
                                  }
                                });
                              }
                            case 17:
                            case "end":
                              return _context12.stop();
                          }
                        }, _callee12);
                      }));
                      return function sendNextBatch() {
                        return _ref14.apply(this, arguments);
                      };
                    }(); // Start sending batches
                    sendNextBatch();
                  case 11:
                  case "end":
                    return _context13.stop();
                }
              }, _callee13);
            }));
            return function (_x10) {
              return _ref13.apply(this, arguments);
            };
          }());
        case 6:
        case "end":
          return _context14.stop();
      }
    }, _callee14);
  }));
  return function sendChunks() {
    return _ref12.apply(this, arguments);
  };
}();
var stopRecording = /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
    var _yield$chrome$storage22, recordingStartTime, duration, _yield$chrome$storage23, sandboxTab, _yield$chrome$storage24, wasRegion;
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          _context15.next = 2;
          return chrome.storage.local.get(["recordingStartTime"]);
        case 2:
          _yield$chrome$storage22 = _context15.sent;
          recordingStartTime = _yield$chrome$storage22.recordingStartTime;
          duration = Date.now() - recordingStartTime;
          if (recordingStartTime === 0) {
            duration = 0;
          }
          chrome.storage.local.set({
            recording: false,
            recordingDuration: duration,
            tabRecordedID: null
          });
          chrome.storage.local.set({
            recordingStartTime: 0
          });
          _context15.next = 10;
          return chrome.storage.local.get(["sandboxTab"]);
        case 10:
          _yield$chrome$storage23 = _context15.sent;
          sandboxTab = _yield$chrome$storage23.sandboxTab;
          if (duration > 5 * 60 * 1000) {
            // Close the sandbox tab, open a new one with fallback editor
            chrome.tabs.create({
              url: "editorfallback.html",
              active: true
            }, function (tab) {
              chrome.tabs.onUpdated.addListener(function _(tabId, changeInfo, updatedTab) {
                if (tabId === tab.id && changeInfo.status === "complete") {
                  chrome.tabs.onUpdated.removeListener(_);
                  // Close the existing sandbox tab
                  chrome.tabs.remove(sandboxTab);
                  chrome.storage.local.set({
                    sandboxTab: tab.id
                  });
                  sendChunks();
                }
              });
            });
          } else {
            // Move the tab to the last position
            chrome.tabs.get(sandboxTab, function (tab) {
              chrome.windows.update(tab.windowId, {
                focused: true
              }).then(function () {
                chrome.tabs.update(sandboxTab, {
                  active: true,
                  pinned: false
                });
                chrome.tabs.move(sandboxTab, {
                  index: -1
                });
              });
            });
            sendChunks();
          }
          chrome.action.setIcon({
            path: "assets/icon-34.png"
          });

          // Check if wasRegion is set
          _context15.next = 16;
          return chrome.storage.local.get(["wasRegion"]);
        case 16:
          _yield$chrome$storage24 = _context15.sent;
          wasRegion = _yield$chrome$storage24.wasRegion;
          if (wasRegion) {
            chrome.storage.local.set({
              wasRegion: false,
              region: true
            });
          }

          // Cancel any alarms
          chrome.alarms.clear("recording-alarm");
          discardOffscreenDocuments();
        case 21:
        case "end":
          return _context15.stop();
      }
    }, _callee15);
  }));
  return function stopRecording() {
    return _ref15.apply(this, arguments);
  };
}();
var forceProcessing = /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16() {
    var editor_url, _yield$chrome$storage25, sandboxTab;
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          // Need to create a new sandbox tab
          editor_url = "editor.html"; // Get sandbox tab
          _context16.next = 3;
          return chrome.storage.local.get(["sandboxTab"]);
        case 3:
          _yield$chrome$storage25 = _context16.sent;
          sandboxTab = _yield$chrome$storage25.sandboxTab;
          chrome.tabs.create({
            url: editor_url,
            active: true
          }, function (tab) {
            chrome.tabs.onUpdated.addListener(function _(tabId, changeInfo, updatedTab) {
              if (tabId === tab.id && changeInfo.status === "complete") {
                chrome.tabs.onUpdated.removeListener(_);
                // Close the existing sandbox tab
                chrome.tabs.remove(sandboxTab);
                chrome.storage.local.set({
                  sandboxTab: tab.id
                });
                sendChunks(true);
              }
            });
          });
        case 6:
        case "end":
          return _context16.stop();
      }
    }, _callee16);
  }));
  return function forceProcessing() {
    return _ref16.apply(this, arguments);
  };
}();
chrome.runtime.onStartup.addListener(function () {
  console.log("Starting...");
});

// Check when action button is clicked
chrome.action.onClicked.addListener( /*#__PURE__*/function () {
  var _ref17 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(tab) {
    var _yield$chrome$storage26, recording, _yield$chrome$storage27, activeTab, _yield$chrome$storage28, firstTime, _activeTab3;
    return _regeneratorRuntime().wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          _context17.next = 2;
          return chrome.storage.local.get(["recording"]);
        case 2:
          _yield$chrome$storage26 = _context17.sent;
          recording = _yield$chrome$storage26.recording;
          if (!recording) {
            _context17.next = 14;
            break;
          }
          stopRecording();
          sendMessageRecord({
            type: "stop-recording-tab"
          });
          _context17.next = 9;
          return chrome.storage.local.get(["activeTab"]);
        case 9:
          _yield$chrome$storage27 = _context17.sent;
          activeTab = _yield$chrome$storage27.activeTab;
          // Check if actual tab
          chrome.tabs.get(activeTab, function (t) {
            if (t) {
              chrome.tabs.sendMessage(activeTab, {
                type: "stop-recording-tab"
              });
            } else {
              chrome.tabs.sendMessage(tab.id, {
                type: "stop-recording-tab"
              });
              chrome.storage.local.set({
                activeTab: tab.id
              });
            }
          });
          _context17.next = 15;
          break;
        case 14:
          // Check if it's possible to inject into content (not a chrome:// page, new tab, etc)
          if (!(navigator.onLine === false && !tab.url.includes("/playground.html") && !tab.url.includes("/setup.html") || tab.url.startsWith("chrome://") || tab.url.startsWith("chrome-extension://") && !tab.url.includes("/playground.html") && !tab.url.includes("/setup.html")) && !tab.url.includes("stackoverflow.com/") && !tab.url.includes("chrome.google.com/webstore") && !tab.url.includes("chromewebstore.google.com")) {
            chrome.tabs.sendMessage(tab.id, {
              type: "toggle-popup"
            });
            chrome.storage.local.set({
              activeTab: tab.id
            });
          } else {
            chrome.tabs.create({
              url: "playground.html",
              active: true
            }).then(function (tab) {
              chrome.storage.local.set({
                activeTab: tab.id
              });
            });
          }
        case 15:
          _context17.next = 17;
          return chrome.storage.local.get(["firstTime"]);
        case 17:
          _yield$chrome$storage28 = _context17.sent;
          firstTime = _yield$chrome$storage28.firstTime;
          if (!(firstTime && tab.url.includes(chrome.runtime.getURL("setup.html")))) {
            _context17.next = 25;
            break;
          }
          chrome.storage.local.set({
            firstTime: false
          });
          // Send message to active tab
          _context17.next = 23;
          return getCurrentTab();
        case 23:
          _activeTab3 = _context17.sent;
          chrome.tabs.sendMessage(_activeTab3.id, {
            type: "setup-complete"
          });
        case 25:
        case "end":
          return _context17.stop();
      }
    }, _callee17);
  }));
  return function (_x11) {
    return _ref17.apply(this, arguments);
  };
}());
var nextChunk = /*#__PURE__*/function () {
  var _ref18 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(request) {
    return _regeneratorRuntime().wrap(function _callee18$(_context18) {
      while (1) switch (_context18.prev = _context18.next) {
        case 0:
          sendMessageRecord({
            type: "next-chunk-tab"
          });
        case 1:
        case "end":
          return _context18.stop();
      }
    }, _callee18);
  }));
  return function nextChunk(_x12) {
    return _ref18.apply(this, arguments);
  };
}();
var restartActiveTab = /*#__PURE__*/function () {
  var _ref19 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19() {
    var activeTab;
    return _regeneratorRuntime().wrap(function _callee19$(_context19) {
      while (1) switch (_context19.prev = _context19.next) {
        case 0:
          _context19.next = 2;
          return getCurrentTab();
        case 2:
          activeTab = _context19.sent;
          chrome.tabs.sendMessage(activeTab.id, {
            type: "ready-to-record"
          });
        case 4:
        case "end":
          return _context19.stop();
      }
    }, _callee19);
  }));
  return function restartActiveTab() {
    return _ref19.apply(this, arguments);
  };
}();
var getStreamingData = /*#__PURE__*/function () {
  var _ref20 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20() {
    var _yield$chrome$storage29, micActive, defaultAudioInput, defaultAudioOutput, defaultVideoInput, systemAudio, recordingType;
    return _regeneratorRuntime().wrap(function _callee20$(_context20) {
      while (1) switch (_context20.prev = _context20.next) {
        case 0:
          _context20.next = 2;
          return chrome.storage.local.get(["micActive", "defaultAudioInput", "defaultAudioOutput", "defaultVideoInput", "systemAudio", "recordingType"]);
        case 2:
          _yield$chrome$storage29 = _context20.sent;
          micActive = _yield$chrome$storage29.micActive;
          defaultAudioInput = _yield$chrome$storage29.defaultAudioInput;
          defaultAudioOutput = _yield$chrome$storage29.defaultAudioOutput;
          defaultVideoInput = _yield$chrome$storage29.defaultVideoInput;
          systemAudio = _yield$chrome$storage29.systemAudio;
          recordingType = _yield$chrome$storage29.recordingType;
          return _context20.abrupt("return", {
            micActive: micActive,
            defaultAudioInput: defaultAudioInput,
            defaultAudioOutput: defaultAudioOutput,
            defaultVideoInput: defaultVideoInput,
            systemAudio: systemAudio,
            recordingType: recordingType
          });
        case 10:
        case "end":
          return _context20.stop();
      }
    }, _callee20);
  }));
  return function getStreamingData() {
    return _ref20.apply(this, arguments);
  };
}();
var handleDismiss = /*#__PURE__*/function () {
  var _ref21 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21() {
    var _yield$chrome$storage30, region, _yield$chrome$storage31, sandboxTab, _yield$chrome$storage32, wasRegion;
    return _regeneratorRuntime().wrap(function _callee21$(_context21) {
      while (1) switch (_context21.prev = _context21.next) {
        case 0:
          _context21.next = 2;
          return chrome.storage.local.get(["region"]);
        case 2:
          _yield$chrome$storage30 = _context21.sent;
          region = _yield$chrome$storage30.region;
          if (region) {
            _context21.next = 10;
            break;
          }
          _context21.next = 7;
          return chrome.storage.local.get(["sandboxTab"]);
        case 7:
          _yield$chrome$storage31 = _context21.sent;
          sandboxTab = _yield$chrome$storage31.sandboxTab;
          chrome.tabs.get(sandboxTab, function (tab) {
            if (tab) {
              chrome.tabs.remove(tab.id);
            }
          });
        case 10:
          _context21.next = 12;
          return chrome.storage.local.get(["wasRegion"]);
        case 12:
          _yield$chrome$storage32 = _context21.sent;
          wasRegion = _yield$chrome$storage32.wasRegion;
          if (wasRegion) {
            chrome.storage.local.set({
              wasRegion: false,
              region: true
            });
          }
          chrome.action.setIcon({
            path: "assets/icon-34.png"
          });
        case 16:
        case "end":
          return _context21.stop();
      }
    }, _callee21);
  }));
  return function handleDismiss() {
    return _ref21.apply(this, arguments);
  };
}();
var handleRestart = /*#__PURE__*/function () {
  var _ref22 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee22() {
    var editor_url, version, _yield$chrome$storage33, sandboxTab;
    return _regeneratorRuntime().wrap(function _callee22$(_context22) {
      while (1) switch (_context22.prev = _context22.next) {
        case 0:
          editor_url = "editor.html"; // Check if Chrome version is 109 or below
          if (navigator.userAgent.includes("Chrome/")) {
            version = parseInt(navigator.userAgent.match(/Chrome\/([0-9]+)/)[1]);
            if (version <= 109) {
              editor_url = "editorfallback.html";
            }
          }
          _context22.next = 4;
          return chrome.storage.local.get(["sandboxTab"]);
        case 4:
          _yield$chrome$storage33 = _context22.sent;
          sandboxTab = _yield$chrome$storage33.sandboxTab;
          chrome.tabs.get(sandboxTab, function (tab) {
            if (tab) {
              chrome.tabs.remove(tab.id);
            }
          });
          chrome.tabs.create({
            url: editor_url,
            index: 1,
            pinned: true,
            active: false
          }, function (tab) {
            chrome.storage.local.set({
              sandboxTab: tab.id
            });
            chrome.tabs.onUpdated.addListener(function _(tabId, changeInfo, tab) {
              if (tabId === tab.id && changeInfo.status === "complete") {
                chrome.tabs.onUpdated.removeListener(_);
                resetActiveTabRestart();
              }
            });
          });
        case 8:
        case "end":
          return _context22.stop();
      }
    }, _callee22);
  }));
  return function handleRestart() {
    return _ref22.apply(this, arguments);
  };
}();
var sendMessageRecord = /*#__PURE__*/function () {
  var _ref23 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee23(message) {
    return _regeneratorRuntime().wrap(function _callee23$(_context23) {
      while (1) switch (_context23.prev = _context23.next) {
        case 0:
          // Send a message to the recording tab or offscreen recording document, depending on which was created
          chrome.storage.local.get(["recordingTab", "offscreen"], function (result) {
            if (result.offscreen) {
              chrome.runtime.sendMessage(message);
            } else {
              // Get the recording tab first before sending the message
              chrome.tabs.get(result.recordingTab, function (tab) {
                chrome.tabs.sendMessage(tab.id, message);
              });
            }
          });
        case 1:
        case "end":
          return _context23.stop();
      }
    }, _callee23);
  }));
  return function sendMessageRecord(_x13) {
    return _ref23.apply(this, arguments);
  };
}();
var offscreenDocument = /*#__PURE__*/function () {
  var _ref24 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee24(request) {
    var activeTab, existingContexts, _offscreenDocument, _existingContexts, offDocument, streamId, _yield$chrome$storage34, quality, _existingContexts2, _offDocument, switchTab;
    return _regeneratorRuntime().wrap(function _callee24$(_context24) {
      while (1) switch (_context24.prev = _context24.next) {
        case 0:
          _context24.next = 2;
          return getCurrentTab();
        case 2:
          activeTab = _context24.sent;
          chrome.storage.local.set({
            activeTab: activeTab.id,
            tabRecordedID: null
          });

          // Check activeTab URL
          if (activeTab.url.includes(chrome.runtime.getURL("playground.html"))) {
            chrome.storage.local.set({
              tabPreferred: true
            });
          } else {
            chrome.storage.local.set({
              tabPreferred: false
            });
          }

          // Close all offscreen documents (if chrome.offscreen is available)
          _context24.prev = 5;
          _context24.next = 8;
          return chrome.runtime.getContexts({});
        case 8:
          existingContexts = _context24.sent;
          _offscreenDocument = existingContexts.find(function (c) {
            return c.contextType === "OFFSCREEN_DOCUMENT";
          });
          if (!_offscreenDocument) {
            _context24.next = 13;
            break;
          }
          _context24.next = 13;
          return chrome.offscreen.closeDocument();
        case 13:
          _context24.next = 17;
          break;
        case 15:
          _context24.prev = 15;
          _context24.t0 = _context24["catch"](5);
        case 17:
          if (!request.region) {
            _context24.next = 46;
            break;
          }
          chrome.storage.local.set({
            recordingTab: activeTab.id,
            offscreen: false,
            region: true
          });
          if (!request.customRegion) {
            _context24.next = 23;
            break;
          }
          sendMessageRecord({
            type: "loaded",
            request: request,
            region: true
          });
          _context24.next = 44;
          break;
        case 23:
          _context24.prev = 23;
          throw new Error("Exit offscreen recording");
        case 27:
          _existingContexts = _context24.sent;
          offDocument = _existingContexts.find(function (c) {
            return c.contextType === "OFFSCREEN_DOCUMENT";
          });
          if (!offDocument) {
            _context24.next = 32;
            break;
          }
          _context24.next = 32;
          return chrome.offscreen.closeDocument();
        case 32:
          _context24.next = 34;
          return chrome.offscreen.createDocument({
            url: "recorderoffscreen.html",
            reasons: ["USER_MEDIA", "AUDIO_PLAYBACK", "DISPLAY_MEDIA"],
            justification: "Recording from getDisplayMedia API and tabCapture API"
          });
        case 34:
          _context24.next = 36;
          return chrome.tabCapture.getMediaStreamId({
            targetTabId: activeTab.id
          });
        case 36:
          streamId = _context24.sent;
          chrome.storage.local.set({
            recordingTab: null,
            offscreen: true,
            region: false,
            wasRegion: true
          });
          sendMessageRecord({
            type: "loaded",
            request: request,
            isTab: true,
            tabID: streamId
          });
          _context24.next = 44;
          break;
        case 41:
          _context24.prev = 41;
          _context24.t1 = _context24["catch"](23);
          // Open the recorder.html page as a normal tab.
          chrome.tabs.create({
            url: "recorder.html",
            pinned: true,
            index: 0,
            active: activeTab.url.includes(chrome.runtime.getURL("playground.html")) ? true : false
          }).then(function (tab) {
            chrome.storage.local.set({
              recordingTab: tab.id,
              offscreen: false,
              region: false,
              wasRegion: true,
              tabRecordedID: activeTab.id
            });
            chrome.tabs.onUpdated.addListener(function _(tabId, changeInfo, updatedTab) {
              // Check if recorder tab has finished loading
              if (tabId === tab.id && changeInfo.status === "complete") {
                chrome.tabs.onUpdated.removeListener(_);
                sendMessageRecord({
                  type: "loaded",
                  request: request,
                  tabID: activeTab.id,
                  isTab: true
                });
              }
            });
          });
        case 44:
          _context24.next = 71;
          break;
        case 46:
          _context24.prev = 46;
          if (!(!request.offscreenRecording || request.camera)) {
            _context24.next = 49;
            break;
          }
          throw new Error("Exit offscreen recording");
        case 49:
          _context24.next = 51;
          return chrome.storage.local.get(["quality"]);
        case 51:
          _yield$chrome$storage34 = _context24.sent;
          quality = _yield$chrome$storage34.quality;
          _context24.next = 55;
          return chrome.runtime.getContexts({});
        case 55:
          _existingContexts2 = _context24.sent;
          _offDocument = _existingContexts2.find(function (c) {
            return c.contextType === "OFFSCREEN_DOCUMENT";
          });
          if (!_offDocument) {
            _context24.next = 60;
            break;
          }
          _context24.next = 60;
          return chrome.offscreen.closeDocument();
        case 60:
          _context24.next = 62;
          return chrome.offscreen.createDocument({
            url: "recorderoffscreen.html",
            reasons: ["USER_MEDIA", "AUDIO_PLAYBACK", "DISPLAY_MEDIA"],
            justification: "Recording from getDisplayMedia API"
          });
        case 62:
          chrome.storage.local.set({
            recordingTab: null,
            offscreen: true,
            region: false,
            wasRegion: false
          });
          sendMessageRecord({
            type: "loaded",
            request: request,
            isTab: false,
            quality: quality
          });
          _context24.next = 71;
          break;
        case 66:
          _context24.prev = 66;
          _context24.t2 = _context24["catch"](46);
          // Open the recorder.html page as a normal tab.
          switchTab = true;
          if (request.camera) {
            switchTab = false;
          }
          chrome.tabs.create({
            url: "recorder.html",
            pinned: true,
            index: 0,
            active: switchTab
          }).then(function (tab) {
            chrome.storage.local.set({
              recordingTab: tab.id,
              offscreen: false,
              region: false,
              wasRegion: false
            });
            chrome.tabs.onUpdated.addListener(function _(tabId, changeInfo, updatedTab) {
              // Check if recorder tab has finished loading
              if (tabId === tab.id && changeInfo.status === "complete") {
                chrome.tabs.onUpdated.removeListener(_);
                sendMessageRecord({
                  type: "loaded",
                  request: request
                });
              }
            });
          });
        case 71:
        case "end":
          return _context24.stop();
      }
    }, _callee24, null, [[5, 15], [23, 41], [46, 66]]);
  }));
  return function offscreenDocument(_x14) {
    return _ref24.apply(this, arguments);
  };
}();
var base64ToUint8Array = function base64ToUint8Array(base64) {
  var dataUrlRegex = /^data:(.*?);base64,/;
  var matches = base64.match(dataUrlRegex);
  if (matches !== null) {
    // Base64 is a data URL
    var mimeType = matches[1];
    var binaryString = atob(base64.slice(matches[0].length));
    var bytes = new Uint8Array(binaryString.length);
    for (var i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return new Blob([bytes], {
      type: mimeType
    });
  } else {
    // Base64 is a regular string
    var _binaryString = atob(base64);
    var _bytes = new Uint8Array(_binaryString.length);
    for (var _i = 0; _i < _binaryString.length; _i++) {
      _bytes[_i] = _binaryString.charCodeAt(_i);
    }
    return new Blob([_bytes], {
      type: "video/webm"
    });
  }
};
var savedToDrive = /*#__PURE__*/function () {
  var _ref25 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee25() {
    var _yield$chrome$storage35, sandboxTab;
    return _regeneratorRuntime().wrap(function _callee25$(_context25) {
      while (1) switch (_context25.prev = _context25.next) {
        case 0:
          _context25.next = 2;
          return chrome.storage.local.get(["sandboxTab"]);
        case 2:
          _yield$chrome$storage35 = _context25.sent;
          sandboxTab = _yield$chrome$storage35.sandboxTab;
          chrome.tabs.sendMessage(sandboxTab, {
            type: "saved-to-drive"
          });
        case 5:
        case "end":
          return _context25.stop();
      }
    }, _callee25);
  }));
  return function savedToDrive() {
    return _ref25.apply(this, arguments);
  };
}();
var discardOffscreenDocuments = /*#__PURE__*/function () {
  var _ref26 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee26() {
    var existingContexts, _offscreenDocument2;
    return _regeneratorRuntime().wrap(function _callee26$(_context26) {
      while (1) switch (_context26.prev = _context26.next) {
        case 0:
          _context26.prev = 0;
          _context26.next = 3;
          return chrome.runtime.getContexts({});
        case 3:
          existingContexts = _context26.sent;
          _offscreenDocument2 = existingContexts.find(function (c) {
            return c.contextType === "OFFSCREEN_DOCUMENT";
          });
          if (!_offscreenDocument2) {
            _context26.next = 8;
            break;
          }
          _context26.next = 8;
          return chrome.offscreen.closeDocument();
        case 8:
          _context26.next = 12;
          break;
        case 10:
          _context26.prev = 10;
          _context26.t0 = _context26["catch"](0);
        case 12:
        case "end":
          return _context26.stop();
      }
    }, _callee26, null, [[0, 10]]);
  }));
  return function discardOffscreenDocuments() {
    return _ref26.apply(this, arguments);
  };
}();
var executeScripts = /*#__PURE__*/function () {
  var _ref27 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee27() {
    var contentScripts, tabQueries, tabResults, executeScriptPromises, i, tabs, cs, _iterator, _step, tab, executeScriptPromise;
    return _regeneratorRuntime().wrap(function _callee27$(_context27) {
      while (1) switch (_context27.prev = _context27.next) {
        case 0:
          contentScripts = chrome.runtime.getManifest().content_scripts;
          tabQueries = contentScripts.map(function (cs) {
            return chrome.tabs.query({
              url: cs.matches
            });
          });
          _context27.next = 4;
          return Promise.all(tabQueries);
        case 4:
          tabResults = _context27.sent;
          executeScriptPromises = [];
          for (i = 0; i < tabResults.length; i++) {
            tabs = tabResults[i];
            cs = contentScripts[i];
            _iterator = _createForOfIteratorHelper(tabs);
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                tab = _step.value;
                executeScriptPromise = chrome.scripting.executeScript({
                  target: {
                    tabId: tab.id
                  },
                  files: cs.js
                });
                executeScriptPromises.push(executeScriptPromise);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
          _context27.next = 9;
          return Promise.all(executeScriptPromises);
        case 9:
        case "end":
          return _context27.stop();
      }
    }, _callee27);
  }));
  return function executeScripts() {
    return _ref27.apply(this, arguments);
  };
}();

// On first install open setup.html
chrome.runtime.onInstalled.addListener( /*#__PURE__*/function () {
  var _ref28 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee28(details) {
    var locale, _locale;
    return _regeneratorRuntime().wrap(function _callee28$(_context28) {
      while (1) switch (_context28.prev = _context28.next) {
        case 0:
          if (details.reason === "install") {
            // Clear storage
            chrome.storage.local.clear();

            // Check user locale, is it English, british, american...?
            locale = chrome.i18n.getMessage("@@ui_locale");
            if (locale.includes("en")) {
              chrome.runtime.setUninstallURL("https://tally.so/r/w8Zro5?version=" + chrome.runtime.getManifest().version);
            } else {
              chrome.runtime.setUninstallURL("http://translate.google.com/translate?js=n&sl=auto&tl=" + locale + "&u=https://tally.so/r/w8Zro5?version=" + chrome.runtime.getManifest().version);
            }
            chrome.storage.local.set({
              firstTime: true
            });
            chrome.tabs.create({
              url: "setup.html"
            });
          } else if (details.reason === "update") {
            if (details.previousVersion === "2.8.6") {
              // Clear storage
              chrome.storage.local.clear();
              chrome.storage.local.set({
                updatingFromOld: true
              });
            } else {
              chrome.storage.local.set({
                updatingFromOld: false
              });
            }
            _locale = chrome.i18n.getMessage("@@ui_locale");
            if (_locale.includes("en")) {
              chrome.runtime.setUninstallURL("https://tally.so/r/3Ex6kX?version=" + chrome.runtime.getManifest().version);
            } else {
              chrome.runtime.setUninstallURL("http://translate.google.com/translate?js=n&sl=auto&tl=" + _locale + "&u=https://tally.so/r/3Ex6kX?version=" + chrome.runtime.getManifest().version);
            }
          }
          executeScripts();
        case 2:
        case "end":
          return _context28.stop();
      }
    }, _callee28);
  }));
  return function (_x15) {
    return _ref28.apply(this, arguments);
  };
}());

// Detect if recordingTab is closed
chrome.tabs.onRemoved.addListener( /*#__PURE__*/function () {
  var _ref29 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee29(tabId, removeInfo) {
    var _yield$chrome$storage36, region, _yield$chrome$storage37, recordingTab, _yield$chrome$storage38, sandboxTab, _yield$chrome$storage39, recording, _yield$chrome$storage40, restarting, _yield$chrome$storage41, activeTab, _yield$chrome$storage42, _activeTab4;
    return _regeneratorRuntime().wrap(function _callee29$(_context29) {
      while (1) switch (_context29.prev = _context29.next) {
        case 0:
          _context29.next = 2;
          return chrome.storage.local.get(["region"]);
        case 2:
          _yield$chrome$storage36 = _context29.sent;
          region = _yield$chrome$storage36.region;
          if (!region) {
            _context29.next = 6;
            break;
          }
          return _context29.abrupt("return");
        case 6:
          _context29.next = 8;
          return chrome.storage.local.get(["recordingTab"]);
        case 8:
          _yield$chrome$storage37 = _context29.sent;
          recordingTab = _yield$chrome$storage37.recordingTab;
          _context29.next = 12;
          return chrome.storage.local.get(["sandboxTab"]);
        case 12:
          _yield$chrome$storage38 = _context29.sent;
          sandboxTab = _yield$chrome$storage38.sandboxTab;
          _context29.next = 16;
          return chrome.storage.local.get(["recording"]);
        case 16:
          _yield$chrome$storage39 = _context29.sent;
          recording = _yield$chrome$storage39.recording;
          _context29.next = 20;
          return chrome.storage.local.get(["restarting"]);
        case 20:
          _yield$chrome$storage40 = _context29.sent;
          restarting = _yield$chrome$storage40.restarting;
          _context29.next = 24;
          return chrome.storage.local.get(["activeTab"]);
        case 24:
          _yield$chrome$storage41 = _context29.sent;
          activeTab = _yield$chrome$storage41.activeTab;
          if (!((tabId === recordingTab || tabId === sandboxTab) && !restarting)) {
            _context29.next = 34;
            break;
          }
          chrome.storage.local.set({
            recordingTab: null
          });
          // Send a message to active tab
          _context29.next = 30;
          return chrome.storage.local.get(["activeTab"]);
        case 30:
          _yield$chrome$storage42 = _context29.sent;
          _activeTab4 = _yield$chrome$storage42.activeTab;
          try {
            if (recording) {
              chrome.windows.update(_activeTab4.windowId, {
                focused: true
              }).then(function () {
                chrome.tabs.update(_activeTab4, {
                  active: true
                });
              });
            }
            chrome.tabs.sendMessage(_activeTab4, {
              type: "stop-recording-tab"
            });
          } catch (error) {
            chrome.tabs.sendMessage(tabId, {
              type: "stop-recording-tab"
            });
            chrome.storage.local.set({
              activeTab: tabId
            });
          }

          // Update icon
          chrome.action.setIcon({
            path: "assets/icon-34.png"
          });
        case 34:
          if (tabId === sandboxTab && !restarting) {
            try {
              chrome.tabs.remove(recordingTab);
            } catch (error) {}
          } else if (tabId === recordingTab && recording) {
            try {
              chrome.tabs.remove(sandboxTab);
            } catch (error) {}
          }
        case 35:
        case "end":
          return _context29.stop();
      }
    }, _callee29);
  }));
  return function (_x16, _x17) {
    return _ref29.apply(this, arguments);
  };
}());
var discardRecording = /*#__PURE__*/function () {
  var _ref30 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee30() {
    var _yield$chrome$storage43, sandboxTab;
    return _regeneratorRuntime().wrap(function _callee30$(_context30) {
      while (1) switch (_context30.prev = _context30.next) {
        case 0:
          _context30.next = 2;
          return chrome.storage.local.get(["sandboxTab"]);
        case 2:
          _yield$chrome$storage43 = _context30.sent;
          sandboxTab = _yield$chrome$storage43.sandboxTab;
          // Get actual sandbox tab
          chrome.tabs.get(sandboxTab, function (tab) {
            if (tab) {
              chrome.tabs.remove(tab.id);
            }
          });
          sendMessageRecord({
            type: "dismiss-recording"
          });
          chrome.action.setIcon({
            path: "assets/icon-34.png"
          });
          discardOffscreenDocuments();
          chrome.storage.local.set({
            recordingTab: null,
            sandboxTab: null,
            recording: false
          });
        case 9:
        case "end":
          return _context30.stop();
      }
    }, _callee30);
  }));
  return function discardRecording() {
    return _ref30.apply(this, arguments);
  };
}();

// Check if still (actually) recording by looking at recordingTab or offscreen document
var checkRecording = /*#__PURE__*/function () {
  var _ref31 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee31() {
    var _yield$chrome$storage44, recordingTab, _yield$chrome$storage45, offscreen, existingContexts, offDocument;
    return _regeneratorRuntime().wrap(function _callee31$(_context31) {
      while (1) switch (_context31.prev = _context31.next) {
        case 0:
          _context31.next = 2;
          return chrome.storage.local.get(["recordingTab"]);
        case 2:
          _yield$chrome$storage44 = _context31.sent;
          recordingTab = _yield$chrome$storage44.recordingTab;
          _context31.next = 6;
          return chrome.storage.local.get(["offscreen"]);
        case 6:
          _yield$chrome$storage45 = _context31.sent;
          offscreen = _yield$chrome$storage45.offscreen;
          if (!(recordingTab && !offscreen)) {
            _context31.next = 12;
            break;
          }
          try {
            chrome.tabs.get(recordingTab, function (tab) {
              if (!tab) {
                discardRecording();
              }
            });
          } catch (error) {
            discardRecording();
          }
          _context31.next = 18;
          break;
        case 12:
          if (!offscreen) {
            _context31.next = 18;
            break;
          }
          _context31.next = 15;
          return chrome.runtime.getContexts({});
        case 15:
          existingContexts = _context31.sent;
          offDocument = existingContexts.find(function (c) {
            return c.contextType === "OFFSCREEN_DOCUMENT";
          });
          if (!offDocument) {
            discardRecording();
          }
        case 18:
        case "end":
          return _context31.stop();
      }
    }, _callee31);
  }));
  return function checkRecording() {
    return _ref31.apply(this, arguments);
  };
}();
var removeSandbox = /*#__PURE__*/function () {
  var _ref32 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee32() {
    var _yield$chrome$storage46, sandboxTab;
    return _regeneratorRuntime().wrap(function _callee32$(_context32) {
      while (1) switch (_context32.prev = _context32.next) {
        case 0:
          _context32.next = 2;
          return chrome.storage.local.get(["sandboxTab"]);
        case 2:
          _yield$chrome$storage46 = _context32.sent;
          sandboxTab = _yield$chrome$storage46.sandboxTab;
          chrome.tabs.get(sandboxTab, function (tab) {
            if (tab) {
              chrome.tabs.remove(sandboxTab);
            }
          });
        case 5:
        case "end":
          return _context32.stop();
      }
    }, _callee32);
  }));
  return function removeSandbox() {
    return _ref32.apply(this, arguments);
  };
}();
var newSandboxPageRestart = /*#__PURE__*/function () {
  var _ref33 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee33() {
    var editor_url, version;
    return _regeneratorRuntime().wrap(function _callee33$(_context33) {
      while (1) switch (_context33.prev = _context33.next) {
        case 0:
          editor_url = "editor.html"; // Check if Chrome version is 109 or below
          if (navigator.userAgent.includes("Chrome/")) {
            version = parseInt(navigator.userAgent.match(/Chrome\/([0-9]+)/)[1]);
            if (version <= 109) {
              editor_url = "editorfallback.html";
            }
          }
          chrome.tabs.create({
            url: editor_url,
            index: 1,
            pinned: true,
            active: false
          }, function (tab) {
            chrome.storage.local.set({
              sandboxTab: tab.id
            });
            chrome.tabs.onUpdated.addListener(function _(tabId, changeInfo, updatedTab) {
              if (tabId === tab.id && changeInfo.status === "complete") {
                chrome.tabs.onUpdated.removeListener(_);
                resetActiveTabRestart();
              }
            });
          });
        case 3:
        case "end":
          return _context33.stop();
      }
    }, _callee33);
  }));
  return function newSandboxPageRestart() {
    return _ref33.apply(this, arguments);
  };
}();
var handleMessage = /*#__PURE__*/function () {
  var _ref34 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee34(request, sender, sendResponse) {
    var _yield$chrome$storage47, sandboxTab, data, _yield$chrome$storage48, activeTab, _yield$chrome$storage49, _activeTab5, _yield$chrome$storage50, recordingTab, _yield$chrome$storage51, region, _activeTab6, _yield$chrome$storage52, _recordingTab, _yield$chrome$storage53, _region, locale, _url, _locale2, _url2, _locale3, _url3, _locale4, _url4, _locale5, _url5, _yield$chrome$storage54, _activeTab7, _yield$chrome$storage55, _activeTab8, _yield$chrome$storage56, _activeTab9, _yield$chrome$storage57, token, url, _locale6, _url6, _locale7, _url7;
    return _regeneratorRuntime().wrap(function _callee34$(_context34) {
      while (1) switch (_context34.prev = _context34.next) {
        case 0:
          if (!(request.type === "desktop-capture")) {
            _context34.next = 4;
            break;
          }
          offscreenDocument(request);
          _context34.next = 224;
          break;
        case 4:
          if (!(request.type === "handle-restart")) {
            _context34.next = 8;
            break;
          }
          handleRestart();
          _context34.next = 224;
          break;
        case 8:
          if (!(request.type === "handle-dismiss")) {
            _context34.next = 12;
            break;
          }
          handleDismiss();
          _context34.next = 224;
          break;
        case 12:
          if (!(request.type === "offscreen")) {
            _context34.next = 17;
            break;
          }
          getStreamId(sender.tab, sendResponse);
          return _context34.abrupt("return", true);
        case 17:
          if (!(request.type === "reset-active-tab")) {
            _context34.next = 21;
            break;
          }
          resetActiveTab();
          _context34.next = 224;
          break;
        case 21:
          if (!(request.type === "reset-active-tab-restart")) {
            _context34.next = 25;
            break;
          }
          resetActiveTabRestart();
          _context34.next = 224;
          break;
        case 25:
          if (!(request.type === "start-rec")) {
            _context34.next = 29;
            break;
          }
          startRecording();
          _context34.next = 224;
          break;
        case 29:
          if (!(request.type === "video-ready")) {
            _context34.next = 33;
            break;
          }
          stopRecording();
          _context34.next = 224;
          break;
        case 33:
          if (!(request.type === "request-next-chunk")) {
            _context34.next = 37;
            break;
          }
          nextChunk(request);
          _context34.next = 224;
          break;
        case 37:
          if (!(request.type === "start-recording")) {
            _context34.next = 41;
            break;
          }
          startRecording();
          _context34.next = 224;
          break;
        case 41:
          if (!(request.type === "restarted")) {
            _context34.next = 45;
            break;
          }
          restartActiveTab();
          _context34.next = 224;
          break;
        case 45:
          if (!(request.type === "new-chunk")) {
            _context34.next = 55;
            break;
          }
          _context34.next = 48;
          return chrome.storage.local.get(["sandboxTab"]);
        case 48:
          _yield$chrome$storage47 = _context34.sent;
          sandboxTab = _yield$chrome$storage47.sandboxTab;
          chrome.tabs.sendMessage(sandboxTab, {
            type: "new-chunk-tab",
            chunk: request.chunk,
            index: request.index
          });
          sendResponse({
            status: "ok"
          });
          return _context34.abrupt("return", true);
        case 55:
          if (!(request.type === "get-streaming-data")) {
            _context34.next = 63;
            break;
          }
          _context34.next = 58;
          return getStreamingData();
        case 58:
          data = _context34.sent;
          sendMessageRecord({
            type: "streaming-data",
            data: JSON.stringify(data)
          });
          return _context34.abrupt("return", true);
        case 63:
          if (!(request.type === "cancel-recording")) {
            _context34.next = 73;
            break;
          }
          chrome.action.setIcon({
            path: "assets/icon-34.png"
          });
          _context34.next = 67;
          return chrome.storage.local.get(["activeTab"]);
        case 67:
          _yield$chrome$storage48 = _context34.sent;
          activeTab = _yield$chrome$storage48.activeTab;
          // Check if actual tab
          chrome.tabs.get(activeTab, function (t) {
            if (t) {
              chrome.windows.update(activeTab.windowId, {
                focused: true
              }).then(function () {
                chrome.tabs.update(activeTab, {
                  active: true
                });
              });
            }
          });
          discardOffscreenDocuments();
          _context34.next = 224;
          break;
        case 73:
          if (!(request.type === "stop-recording-tab")) {
            _context34.next = 77;
            break;
          }
          sendMessageRecord({
            type: "stop-recording-tab"
          });
          _context34.next = 224;
          break;
        case 77:
          if (!(request.type === "restart-recording-tab")) {
            _context34.next = 82;
            break;
          }
          removeSandbox();
          chrome.storage.local.get(["region"], function (result) {
            if (result.region) {
              //sendMessageRecord({ type: "restart-recording-tab" });
            }
          });
          _context34.next = 224;
          break;
        case 82:
          if (!(request.type === "dismiss-recording-tab")) {
            _context34.next = 86;
            break;
          }
          discardRecording();
          _context34.next = 224;
          break;
        case 86:
          if (!(request.type === "pause-recording-tab")) {
            _context34.next = 90;
            break;
          }
          sendMessageRecord({
            type: "pause-recording-tab"
          });
          _context34.next = 224;
          break;
        case 90:
          if (!(request.type === "resume-recording-tab")) {
            _context34.next = 94;
            break;
          }
          sendMessageRecord({
            type: "resume-recording-tab"
          });
          _context34.next = 224;
          break;
        case 94:
          if (!(request.type === "set-mic-active-tab")) {
            _context34.next = 98;
            break;
          }
          chrome.storage.local.get(["region"], function (result) {
            if (result.region) {
              sendMessageRecord({
                type: "set-mic-active-tab",
                active: request.active,
                defaultAudioInput: request.defaultAudioInput
              });
            }
          });
          _context34.next = 224;
          break;
        case 98:
          if (!(request.type === "recording-error")) {
            _context34.next = 117;
            break;
          }
          _context34.next = 101;
          return chrome.storage.local.get(["activeTab"]);
        case 101:
          _yield$chrome$storage49 = _context34.sent;
          _activeTab5 = _yield$chrome$storage49.activeTab;
          chrome.tabs.get(_activeTab5, function (tab) {
            if (tab) {
              chrome.tabs.sendMessage(_activeTab5, {
                type: "recording-error"
              });
              // Go to active tab
              chrome.windows.update(_activeTab5.windowId, {
                focused: true
              }).then(function () {
                chrome.tabs.update(_activeTab5, {
                  active: true
                });
              });
              if (request.error === "stream-error") {
                chrome.tabs.sendMessage(_activeTab5, {
                  type: "stream-error"
                });
              }
            }
          });

          // Close recording tab
          _context34.next = 106;
          return chrome.storage.local.get(["recordingTab"]);
        case 106:
          _yield$chrome$storage50 = _context34.sent;
          recordingTab = _yield$chrome$storage50.recordingTab;
          _context34.next = 110;
          return chrome.storage.local.get(["region"]);
        case 110:
          _yield$chrome$storage51 = _context34.sent;
          region = _yield$chrome$storage51.region;
          // Check if tab exists (with tab api)
          if (recordingTab && !region) {
            chrome.tabs.get(recordingTab, function (tab) {
              if (tab) {
                chrome.tabs.remove(recordingTab);
              }
            });
          }
          chrome.storage.local.set({
            recordingTab: null
          });
          discardOffscreenDocuments();
          _context34.next = 224;
          break;
        case 117:
          if (!(request.type === "on-get-permissions")) {
            _context34.next = 124;
            break;
          }
          _context34.next = 120;
          return getCurrentTab();
        case 120:
          _activeTab6 = _context34.sent;
          if (_activeTab6) {
            chrome.tabs.sendMessage(_activeTab6.id, {
              type: "on-get-permissions",
              data: request
            });
          }
          _context34.next = 224;
          break;
        case 124:
          if (!(request.type === "recording-complete")) {
            _context34.next = 136;
            break;
          }
          _context34.next = 127;
          return chrome.storage.local.get(["recordingTab"]);
        case 127:
          _yield$chrome$storage52 = _context34.sent;
          _recordingTab = _yield$chrome$storage52.recordingTab;
          _context34.next = 131;
          return chrome.storage.local.get(["region"]);
        case 131:
          _yield$chrome$storage53 = _context34.sent;
          _region = _yield$chrome$storage53.region;
          // Check if tab exists (with tab api)
          if (_recordingTab) {
            chrome.tabs.get(_recordingTab, function (tab) {
              if (tab) {
                // Check if tab url contains chrome-extension and recorder.html
                if (tab.url.includes("chrome-extension") && tab.url.includes("recorder.html")) {
                  chrome.tabs.remove(_recordingTab);
                }
              }
            });
          }
          _context34.next = 224;
          break;
        case 136:
          if (!(request.type === "check-recording")) {
            _context34.next = 140;
            break;
          }
          checkRecording();
          _context34.next = 224;
          break;
        case 140:
          if (!(request.type === "review-screenity")) {
            _context34.next = 144;
            break;
          }
          chrome.tabs.create({
            url: "https://chromewebstore.google.com/detail/screenity-screen-recorder/kbbdabhdfibnancpjfhlkhafgdilcnji/reviews",
            active: true
          });
          _context34.next = 224;
          break;
        case 144:
          if (!(request.type === "follow-twitter")) {
            _context34.next = 148;
            break;
          }
          chrome.tabs.create({
            url: "https://alyssax.substack.com/",
            active: true
          });
          _context34.next = 224;
          break;
        case 148:
          if (!(request.type === "open-processing-info")) {
            _context34.next = 155;
            break;
          }
          locale = chrome.i18n.getMessage("@@ui_locale");
          _url = "https://help.screenity.io/editing-and-exporting/dJRFpGq56JFKC7k8zEvsqb/why-is-there-a-5-minute-limit-for-editing/ddy4e4TpbnrFJ8VoRT37tQ";
          if (!locale.includes("en")) {
            _url = "http://translate.google.com/translate?js=n&sl=auto&tl=" + locale + "&u=" + _url;
          }
          chrome.tabs.create({
            url: _url,
            active: true
          });
          _context34.next = 224;
          break;
        case 155:
          if (!(request.type === "upgrade-info")) {
            _context34.next = 162;
            break;
          }
          _locale2 = chrome.i18n.getMessage("@@ui_locale");
          _url2 = "https://help.screenity.io/getting-started/77KizPC8MHVGfpKpqdux9D/what-are-the-technical-requirements-for-using-screenity/6kdB6qru6naVD8ZLFvX3m9";
          if (!_locale2.includes("en")) {
            _url2 = "http://translate.google.com/translate?js=n&sl=auto&tl=" + _locale2 + "&u=" + _url2;
          }
          chrome.tabs.create({
            url: _url2,
            active: true
          });
          _context34.next = 224;
          break;
        case 162:
          if (!(request.type === "trim-info")) {
            _context34.next = 169;
            break;
          }
          _locale3 = chrome.i18n.getMessage("@@ui_locale");
          _url3 = "https://help.screenity.io/editing-and-exporting/dJRFpGq56JFKC7k8zEvsqb/how-to-cut-trim-or-mute-parts-of-your-video/svNbM7YHYY717MuSWXrKXH";
          if (!_locale3.includes("en")) {
            _url3 = "http://translate.google.com/translate?js=n&sl=auto&tl=" + _locale3 + "&u=" + _url3;
          }
          chrome.tabs.create({
            url: _url3,
            active: true
          });
          _context34.next = 224;
          break;
        case 169:
          if (!(request.type === "join-waitlist")) {
            _context34.next = 176;
            break;
          }
          _locale4 = chrome.i18n.getMessage("@@ui_locale");
          _url4 = "https://tally.so/r/npojNV";
          if (!_locale4.includes("en")) {
            _url4 = "http://translate.google.com/translate?js=n&sl=auto&tl=" + _locale4 + "&u=" + _url4;
          }
          chrome.tabs.create({
            url: _url4,
            active: true
          });
          _context34.next = 224;
          break;
        case 176:
          if (!(request.type === "chrome-update-info")) {
            _context34.next = 183;
            break;
          }
          // Check locale
          _locale5 = chrome.i18n.getMessage("@@ui_locale");
          _url5 = "https://help.screenity.io/getting-started/77KizPC8MHVGfpKpqdux9D/what-are-the-technical-requirements-for-using-screenity/6kdB6qru6naVD8ZLFvX3m9";
          if (!_locale5.includes("en")) {
            _url5 = "http://translate.google.com/translate?js=n&sl=auto&tl=" + _locale5 + "&u=" + _url5;
          }
          chrome.tabs.create({
            url: _url5,
            active: true
          });
          _context34.next = 224;
          break;
        case 183:
          if (!(request.type === "set-surface")) {
            _context34.next = 192;
            break;
          }
          chrome.storage.local.set({
            surface: request.surface
          });
          _context34.next = 187;
          return chrome.storage.local.get(["activeTab"]);
        case 187:
          _yield$chrome$storage54 = _context34.sent;
          _activeTab7 = _yield$chrome$storage54.activeTab;
          chrome.tabs.get(_activeTab7, function (tab) {
            if (tab) {
              chrome.tabs.sendMessage(_activeTab7, {
                type: "set-surface",
                surface: request.surface
              });
            }
          });
          _context34.next = 224;
          break;
        case 192:
          if (!(request.type === "pip-ended")) {
            _context34.next = 200;
            break;
          }
          _context34.next = 195;
          return chrome.storage.local.get(["activeTab"]);
        case 195:
          _yield$chrome$storage55 = _context34.sent;
          _activeTab8 = _yield$chrome$storage55.activeTab;
          chrome.tabs.get(_activeTab8, function (tab) {
            if (tab) {
              chrome.tabs.sendMessage(_activeTab8, {
                type: "pip-ended"
              });
            }
          });
          _context34.next = 224;
          break;
        case 200:
          if (!(request.type === "pip-started")) {
            _context34.next = 208;
            break;
          }
          _context34.next = 203;
          return chrome.storage.local.get(["activeTab"]);
        case 203:
          _yield$chrome$storage56 = _context34.sent;
          _activeTab9 = _yield$chrome$storage56.activeTab;
          chrome.tabs.get(_activeTab9, function (tab) {
            if (tab) {
              chrome.tabs.sendMessage(_activeTab9, {
                type: "pip-started"
              });
            }
          });
          _context34.next = 224;
          break;
        case 208:
          if (!(request.type === "new-sandbox-page-restart")) {
            _context34.next = 212;
            break;
          }
          newSandboxPageRestart();
          _context34.next = 224;
          break;
        case 212:
          if (!(request.type === "sign-out-drive")) {
            _context34.next = 223;
            break;
          }
          _context34.next = 215;
          return chrome.storage.local.get(["token"]);
        case 215:
          _yield$chrome$storage57 = _context34.sent;
          token = _yield$chrome$storage57.token;
          url = "https://accounts.google.com/o/oauth2/revoke?token=" + token;
          fetch(url);
          chrome.identity.removeCachedAuthToken({
            token: token
          });
          chrome.storage.local.set({
            token: false
          });
          _context34.next = 224;
          break;
        case 223:
          if (request.type === "open-help") {
            _locale6 = chrome.i18n.getMessage("@@ui_locale");
            _url6 = "https://help.screenity.io/";
            if (!_locale6.includes("en")) {
              _url6 = "http://translate.google.com/translate?js=n&sl=auto&tl=" + _locale6 + "&u=" + _url6;
            }
            chrome.tabs.create({
              url: _url6,
              active: true
            });
          } else if (request.type === "memory-limit-help") {
            _locale7 = chrome.i18n.getMessage("@@ui_locale");
            _url7 = "https://help.screenity.io/troubleshooting/9Jy5RGjNrBB42hqUdREQ7W/what-does-%E2%80%9Cmemory-limit-reached%E2%80%9D-mean-when-recording/8WkwHbt3puuXunYqQnyPcb";
            if (!_locale7.includes("en")) {
              _url7 = "http://translate.google.com/translate?js=n&sl=auto&tl=" + _locale7 + "&u=" + _url7;
            }
            chrome.tabs.create({
              url: _url7,
              active: true
            });
          } else if (request.type === "open-home") {
            chrome.tabs.create({
              url: "https://screenity.io/",
              active: true
            });
          } else if (request.type === "report-bug") {
            chrome.tabs.create({
              url: "https://tally.so/r/3ElpXq?version=" + chrome.runtime.getManifest().version,
              active: true
            });
          } else if (request.type === "clear-recordings") {
            // clear chunks
            db.collection("chunks")["delete"]();
          } else if (request.type === "force-processing") {
            forceProcessing();
          }
        case 224:
        case "end":
          return _context34.stop();
      }
    }, _callee34);
  }));
  return function handleMessage(_x18, _x19, _x20) {
    return _ref34.apply(this, arguments);
  };
}();
var isPinned = /*#__PURE__*/function () {
  var _ref35 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee35(sendResponse) {
    var userSettings;
    return _regeneratorRuntime().wrap(function _callee35$(_context35) {
      while (1) switch (_context35.prev = _context35.next) {
        case 0:
          _context35.next = 2;
          return chrome.action.getUserSettings();
        case 2:
          userSettings = _context35.sent;
          sendResponse({
            pinned: userSettings.isOnToolbar
          });
        case 4:
        case "end":
          return _context35.stop();
      }
    }, _callee35);
  }));
  return function isPinned(_x21) {
    return _ref35.apply(this, arguments);
  };
}();
var requestDownload = /*#__PURE__*/function () {
  var _ref36 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee36(base64, title) {
    return _regeneratorRuntime().wrap(function _callee36$(_context36) {
      while (1) switch (_context36.prev = _context36.next) {
        case 0:
          // Open a new tab to get URL
          chrome.tabs.create({
            url: "download.html",
            active: false
          }, function (tab) {
            chrome.tabs.onUpdated.addListener(function _(tabId, changeInfo, updatedTab) {
              if (tabId === tab.id && changeInfo.status === "complete") {
                chrome.tabs.onUpdated.removeListener(_);
                chrome.tabs.sendMessage(tab.id, {
                  type: "download-video",
                  base64: base64,
                  title: title
                });
              }
            });
          });
        case 1:
        case "end":
          return _context36.stop();
      }
    }, _callee36);
  }));
  return function requestDownload(_x22, _x23) {
    return _ref36.apply(this, arguments);
  };
}();

// Listen for messages
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.type === "indexed-db-download") {
    // Open a new tab to get URL
    chrome.tabs.create({
      url: "download.html",
      active: false
    }, function (tab) {
      chrome.tabs.onUpdated.addListener(function _(tabId, changeInfo, updatedTab) {
        if (tabId === tab.id && changeInfo.status === "complete") {
          chrome.tabs.onUpdated.removeListener(_);
          chrome.tabs.sendMessage(tab.id, {
            type: "recover-indexed-db"
          });
        }
      });
    });
  } else if (request.type === "restore-recording") {
    var editor_url = "editorfallback.html";

    // Check if Chrome version is 109 or below
    if (navigator.userAgent.includes("Chrome/")) {
      var version = parseInt(navigator.userAgent.match(/Chrome\/([0-9]+)/)[1]);
      if (version <= 109) {
        editor_url = "editorfallback.html";
      }
    }

    // Make a video out of the db chunks, and download it
    db.collection("chunks").get().then(function (chunks) {
      // Check if there's any chunks
      if (chunks.empty || chunks.length === 0) {
        return;
      }
      chrome.tabs.create({
        url: editor_url,
        active: true
      }, /*#__PURE__*/function () {
        var _ref37 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee37(tab) {
          return _regeneratorRuntime().wrap(function _callee37$(_context37) {
            while (1) switch (_context37.prev = _context37.next) {
              case 0:
                // Set URL as sandbox tab
                chrome.storage.local.set({
                  sandboxTab: tab.id
                });
                // Wait for the tab to be loaded
                _context37.next = 3;
                return new Promise(function (resolve) {
                  chrome.tabs.onUpdated.addListener(function listener(tabId, info) {
                    if (info.status === "complete" && tabId === tab.id) {
                      sendChunks();
                    }
                  });
                });
              case 3:
              case "end":
                return _context37.stop();
            }
          }, _callee37);
        }));
        return function (_x24) {
          return _ref37.apply(this, arguments);
        };
      }());
    });
  } else if (request.type === "check-restore") {
    // Check if there's any chunks
    db.collection("chunks").get().then(function (chunks) {
      // Check if there's any chunks
      if (chunks.empty || chunks.length === 0) {
        sendResponse({
          restore: false,
          chunks: []
        });
        return;
      }
      sendResponse({
        restore: true
      });
    });
    return true;
  } else if (request.type === "check-capture-permissions") {
    chrome.permissions.contains({
      permissions: ["desktopCapture", "alarms", "offscreen"]
    }, function (result) {
      if (!result) {
        chrome.permissions.request({
          permissions: ["desktopCapture", "alarms", "offscreen"]
        }, function (granted) {
          if (!granted) {
            sendResponse({
              status: "error"
            });
          } else {
            addAlarmListener();
            sendResponse({
              status: "ok"
            });
          }
        });
      } else {
        sendResponse({
          status: "ok"
        });
      }
    });
    return true;
  } else if (request.type === "is-pinned") {
    isPinned(sendResponse);
    return true;
  } else if (request.type === "save-to-drive") {
    var blob = base64ToUint8Array(request.base64);

    // Specify the desired file name
    var fileName = request.title;

    // Call the saveToDrive function
    (0,_modules_saveToDrive__WEBPACK_IMPORTED_MODULE_0__["default"])(blob, fileName, sendResponse).then(function () {
      savedToDrive();
    });
    return true;
  } else if (request.type === "request-download") {
    requestDownload(request.base64, request.title);
  } else if (request.type === "stop-recording-tab-backup") {
    chrome.storage.local.set({
      recording: false,
      restarting: false,
      tabRecordedID: null,
      memoryError: true
    });
    sendMessageRecord({
      type: "stop-recording-tab"
    });
  }
  handleMessage(request, sender, sendResponse);
});
self.addEventListener("message", function (event) {
  handleMessage(event.data);
});

/***/ }),

/***/ "./src/pages/Background/modules/saveToDrive.js":
/*!*****************************************************!*\
  !*** ./src/pages/Background/modules/saveToDrive.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _signIn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signIn */ "./src/pages/Background/modules/signIn.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


// Function to upload a video to Google Drive
var saveToDrive = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(videoBlob, fileName, sendResponse) {
    var getAuthTokenFromStorage, _getAuthTokenFromStorage;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _getAuthTokenFromStorage = function _getAuthTokenFromStor2() {
            _getAuthTokenFromStorage = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    return _context3.abrupt("return", new Promise(function (resolve, reject) {
                      chrome.storage.local.get(["token"], /*#__PURE__*/function () {
                        var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(result) {
                          var token, newToken, payload, expirationTime, currentTime;
                          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                            while (1) switch (_context2.prev = _context2.next) {
                              case 0:
                                if (!chrome.runtime.lastError) {
                                  _context2.next = 4;
                                  break;
                                }
                                reject(new Error(chrome.runtime.lastError));
                                _context2.next = 24;
                                break;
                              case 4:
                                token = result.token;
                                if (!(!token || token === null)) {
                                  _context2.next = 13;
                                  break;
                                }
                                _context2.next = 8;
                                return (0,_signIn__WEBPACK_IMPORTED_MODULE_0__["default"])();
                              case 8:
                                newToken = _context2.sent;
                                if (!newToken || newToken === null) {
                                  // Sign-in failed, throw an error
                                  reject(new Error("Sign-in failed"));
                                }
                                resolve(newToken);
                                _context2.next = 24;
                                break;
                              case 13:
                                _context2.prev = 13;
                                payload = JSON.parse(atob(token.split(".")[1]));
                                _context2.next = 21;
                                break;
                              case 17:
                                _context2.prev = 17;
                                _context2.t0 = _context2["catch"](13);
                                // Token is invalid, refresh it
                                chrome.identity.getAuthToken({
                                  interactive: true
                                }, function (newToken) {
                                  if (chrome.runtime.lastError) {
                                    reject(new Error(chrome.runtime.lastError));
                                  } else {
                                    resolve(newToken);
                                  }
                                });
                                return _context2.abrupt("return");
                              case 21:
                                expirationTime = payload.exp * 1000; // Convert to milliseconds
                                currentTime = Date.now();
                                if (currentTime >= expirationTime) {
                                  // Token has expired, refresh it
                                  chrome.identity.getAuthToken({
                                    interactive: true
                                  }, function (newToken) {
                                    if (chrome.runtime.lastError) {
                                      reject(new Error(chrome.runtime.lastError));
                                    } else {
                                      resolve(newToken);
                                    }
                                  });
                                } else {
                                  // Token is still valid
                                  resolve(token);
                                }
                              case 24:
                              case "end":
                                return _context2.stop();
                            }
                          }, _callee2, null, [[13, 17]]);
                        }));
                        return function (_x6) {
                          return _ref3.apply(this, arguments);
                        };
                      }());
                    }));
                  case 1:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3);
            }));
            return _getAuthTokenFromStorage.apply(this, arguments);
          };
          getAuthTokenFromStorage = function _getAuthTokenFromStor() {
            return _getAuthTokenFromStorage.apply(this, arguments);
          }; // Function to get an access token from Chrome storage
          return _context4.abrupt("return", new Promise( /*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(resolve, reject) {
              var token, headers, uploadResponse, responseData, fileId, fileMetadata, metadataResponse, errorResponse;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return getAuthTokenFromStorage();
                  case 3:
                    token = _context.sent;
                    if (!(!token || token === null)) {
                      _context.next = 6;
                      break;
                    }
                    throw new Error("Sign-in failed");
                  case 6:
                    // Upload the video to Google Drive
                    headers = new Headers({
                      Authorization: "Bearer ".concat(token),
                      "Content-Type": videoBlob.type
                    });
                    _context.next = 9;
                    return fetch("https://www.googleapis.com/upload/drive/v3/files?uploadType=media", {
                      method: "POST",
                      headers: headers,
                      body: videoBlob
                    });
                  case 9:
                    uploadResponse = _context.sent;
                    if (uploadResponse.ok) {
                      _context.next = 12;
                      break;
                    }
                    throw new Error("Error uploading to Google Drive: ".concat(uploadResponse.status));
                  case 12:
                    _context.next = 14;
                    return uploadResponse.json();
                  case 14:
                    responseData = _context.sent;
                    fileId = responseData.id;
                    if (fileId) {
                      _context.next = 18;
                      break;
                    }
                    throw new Error("File ID is undefined");
                  case 18:
                    // Create the metadata for the file
                    fileMetadata = {
                      name: fileName
                    }; // Update the file metadata with the name
                    _context.next = 21;
                    return fetch("https://www.googleapis.com/drive/v3/files/".concat(fileId), {
                      method: "PATCH",
                      headers: new Headers({
                        Authorization: "Bearer ".concat(token),
                        "Content-Type": "application/json; charset=UTF-8"
                      }),
                      body: JSON.stringify(fileMetadata)
                    });
                  case 21:
                    metadataResponse = _context.sent;
                    if (metadataResponse.ok) {
                      _context.next = 28;
                      break;
                    }
                    _context.next = 25;
                    return metadataResponse.json();
                  case 25:
                    errorResponse = _context.sent;
                    console.error("Error updating file metadata:", metadataResponse.status, errorResponse.error.message);
                    throw new Error("Error updating file metadata: ".concat(metadataResponse.status));
                  case 28:
                    sendResponse({
                      status: "ok",
                      url: fileId
                    });

                    // Open the Google Drive file in a new tab
                    chrome.tabs.create({
                      url: "https://drive.google.com/file/d/".concat(fileId, "/view")
                    });
                    resolve("https://drive.google.com/file/d/".concat(fileId, "/view")); // Return the file ID if needed
                    _context.next = 38;
                    break;
                  case 33:
                    _context.prev = 33;
                    _context.t0 = _context["catch"](0);
                    console.error("Error uploading to Google Drive:", _context.t0.message);
                    sendResponse({
                      status: "ew",
                      url: null
                    });
                    reject(_context.t0);
                  case 38:
                  case "end":
                    return _context.stop();
                }
              }, _callee, null, [[0, 33]]);
            }));
            return function (_x4, _x5) {
              return _ref2.apply(this, arguments);
            };
          }()));
        case 3:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function saveToDrive(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (saveToDrive);

/***/ }),

/***/ "./src/pages/Background/modules/signIn.js":
/*!************************************************!*\
  !*** ./src/pages/Background/modules/signIn.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var signIn = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var token, userInfo;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return chrome.identity.getAuthToken({
            interactive: true
          });
        case 3:
          token = _context.sent;
          if (token) {
            _context.next = 6;
            break;
          }
          throw new Error("User cancelled sign-in or failed to get token");
        case 6:
          _context.next = 8;
          return new Promise(function (resolve) {
            return chrome.storage.local.set({
              token: token.token
            }, function () {
              return resolve();
            });
          });
        case 8:
          _context.next = 10;
          return chrome.identity.getProfileUserInfo();
        case 10:
          userInfo = _context.sent;
          return _context.abrupt("return", token.token);
        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](0);
          console.error("Error signing in:", _context.t0.message);
          return _context.abrupt("return", null);
        case 19:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 14]]);
  }));
  return function signIn() {
    return _ref.apply(this, arguments);
  };
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (signIn);

/***/ }),

/***/ "./utils/autoReloadClients/backgroundClient.js?port=3000":
/*!***************************************************************!*\
  !*** ./utils/autoReloadClients/backgroundClient.js?port=3000 ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var __resourceQuery = "?port=3000";
var querystring = __webpack_require__(/*! querystring */ "./node_modules/querystring/index.js");
var logger = function logger(msg) {
  console.log("[BGC] ".concat(msg));
};
logger("background client up.");
logger("connecting to SSE service...");
var port = querystring.parse(__resourceQuery.slice(1)).port;
var es = new EventSource("http://localhost:".concat(port, "/__server_sent_events__"));
es.addEventListener("open", function () {
  logger("SSE service connected!");
}, false);
es.addEventListener("error", function (event) {
  if (event.target.readyState === 0) {
    console.error("[BGC] you need to open devServer first!");
  } else {
    console.error(event);
  }
}, false);
es.addEventListener("background-updated", function () {
  logger("received 'background-updated' event from SSE service.");
  logger("extension will reload to reload background...");
  chrome.runtime.reload(); // reload extension to reload background.
});
es.addEventListener("content-scripts-updated", function () {
  logger("received 'content-scripts-updated' event from SSE service.");
  chrome.tabs.query({}, function (tabs) {
    tabs.forEach(function (tab) {
      chrome.tabs.sendMessage(tab.id, {
        from: "backgroundClient",
        action: "reload-yourself"
      }, function (res) {
        if (chrome.runtime.lastError && !res) return;
        var from = res.from,
          action = res.action;
        if (from === "contentScriptClient" && action === "yes-sir") {
          es.close();
          logger("extension will reload to update content scripts...");
          chrome.runtime.reload();
        }
      });
    });
  });
}, false);

/***/ }),

/***/ "./node_modules/uuid/index.js":
/*!************************************!*\
  !*** ./node_modules/uuid/index.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var v1 = __webpack_require__(/*! ./v1 */ "./node_modules/uuid/v1.js");
var v4 = __webpack_require__(/*! ./v4 */ "./node_modules/uuid/v4.js");

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;


/***/ }),

/***/ "./node_modules/uuid/lib/bytesToUuid.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/bytesToUuid.js ***!
  \**********************************************/
/***/ ((module) => {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]]
  ]).join('');
}

module.exports = bytesToUuid;


/***/ }),

/***/ "./node_modules/uuid/lib/rng-browser.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/rng-browser.js ***!
  \**********************************************/
/***/ ((module) => {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ "./node_modules/uuid/v1.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v1.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var rng = __webpack_require__(/*! ./lib/rng */ "./node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "./node_modules/uuid/lib/bytesToUuid.js");

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/uuidjs/uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


/***/ }),

/***/ "./node_modules/uuid/v4.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v4.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var rng = __webpack_require__(/*! ./lib/rng */ "./node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "./node_modules/uuid/lib/bytesToUuid.js");

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("background." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("7c1e649fadf67daa65eb")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "screenity:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"background": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatescreenity"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./utils/autoReloadClients/backgroundClient.js?port=3000");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages/Background/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=background.bundle.js.map
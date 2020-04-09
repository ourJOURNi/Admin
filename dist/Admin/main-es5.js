(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"example-container\">\n\n    <mat-sidenav mode=\"side\" opened>\n      <h4>Admin Dashboard</h4>\n      <mat-nav-list>\n          <a mat-list-item routerLinkActive=\"active\"  [routerLink]=\"[ { outlets: { open: ['jobs'] } }]\">Jobs</a>\n          <a mat-list-item routerLinkActive=\"active\"  [routerLink]=\"[ { outlets: { open: ['students'] } }]\">Students</a>\n          <a mat-list-item disabled=true routerLinkActive=\"active\"  [routerLink]=\"[ { outlets: { open: ['mentors'] } }]\">Mentors</a>\n          <a mat-list-item disabled=true routerLinkActive=\"active\"  [routerLink]=\"[ { outlets: { open: ['posts'] } }]\">Posts</a>\n          <a mat-list-item disabled=true routerLinkActive=\"active\"  [routerLink]=\"[ { outlets: { open: ['events'] } }]\">Events</a>\n          <a mat-list-item disabled=true routerLinkActive=\"active\"  [routerLink]=\"[ { outlets: { open: ['fairs'] } }]\">Fairs</a>\n          <a mat-list-item routerLinkActive=\"active\"  [routerLink]=\"[ { outlets: { open: ['logout'] } }]\">Logout</a>\n       </mat-nav-list>\n    </mat-sidenav>\n\n    <mat-sidenav-content>\n        <router-outlet name=\"open\"></router-outlet>\n    </mat-sidenav-content>\n\n  </mat-sidenav-container>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/events/add-event-dialog/add-event-dialog.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/events/add-event-dialog/add-event-dialog.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Add Event</h2>\n<mat-dialog-content>\n  <form [formGroup]=\"addEventForm\" (ngSubmit)=\"add(this.addEventForm.value)\">\n      <mat-form-field>\n          <input\n          required\n          matInput\n          placeholder=\"Title\"\n          formControlName=\"title\">\n        </mat-form-field>\n        <mat-form-field>\n          <input\n          required\n          matInput\n          placeholder=\"Organizer\"\n          formControlName=\"organizer\">\n        </mat-form-field>\n        <mat-form-field>\n          <input\n          required\n          matInput\n          placeholder=\"Address\"\n          formControlName=\"addressOne\">\n        </mat-form-field>\n        <mat-form-field>\n          <input\n          matInput\n          placeholder=\"Suite/Unit\"\n          formControlName=\"addressTwo\">\n        </mat-form-field>\n        <mat-form-field>\n          <input\n          required\n          matInput\n          placeholder=\"City\"\n          formControlName=\"city\">\n        </mat-form-field>\n        <mat-form-field>\n          <input\n          required\n          matInput\n          placeholder=\"State\"\n          formControlName=\"state\">\n        </mat-form-field>\n        <mat-form-field>\n          <input\n          required\n          matInput\n          placeholder=\"Zip\"\n          formControlName=\"zip\">\n        </mat-form-field>\n        <mat-form-field>\n          <input\n          required\n          matInput\n          placeholder=\"Date\"\n          formControlName=\"date\"\n          type=\"datetime-local\">\n        </mat-form-field>\n        <mat-form-field>\n          <input\n          required\n          matInput\n          placeholder=\"Photo\"\n          formControlName=\"photo\">\n        </mat-form-field>\n        <mat-form-field>\n          <textarea\n          required\n          matInput\n          rows=\"10\"\n          placeholder=\"description\"\n          formControlName=\"description\">\n          </textarea>\n        </mat-form-field>\n        <mat-dialog-actions>\n            <button mat-raised-button class=\"add\" type=\"submit\">Add Event</button>\n            <button class=\"mat-raised-button\" (click)=\"close()\">Cancel</button>\n        </mat-dialog-actions>\n  </form>\n</mat-dialog-content>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/events/delete-event-dialog/delete-event-dialog.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/events/delete-event-dialog/delete-event-dialog.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Delete Event?</h2>\n<p>{{photo}}</p>\n<p>{{title}}</p>\n<p>{{organizer}}</p>\n<p>{{location}}</p>\n<p>{{date}}</p>\n<p>{{description}}</p>\n<mat-dialog-content>\n      <p>Are you sure you want to delete this Event? It cannot be undone.</p>\n</mat-dialog-content>\n\n<mat-dialog-actions>\n    <button mat-raised-button class=\"danger\" (click)=\"delete(id)\">Delete</button>\n    <button class=\"mat-raised-button\" (click)=\"close()\">Cancel</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/events/edit-event-dialog/edit-event-dialog.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/events/edit-event-dialog/edit-event-dialog.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Edit Event</h2>\n<mat-dialog-content>\n  <form [formGroup]=\"editEventForm\" (ngSubmit)=\"update(this.editEventForm.value)\">\n      <mat-form-field>\n          <input\n          required\n          matInput\n          placeholder=\"Title\"\n          formControlName=\"title\">\n        </mat-form-field>\n        <mat-form-field>\n          <input\n          required\n          matInput\n          placeholder=\"Organizer\"\n          formControlName=\"organizer\">\n        </mat-form-field>\n        <mat-form-field>\n          <input\n          required\n          matInput\n          placeholder=\"Address\"\n          formControlName=\"addressOne\">\n        </mat-form-field>\n        <mat-form-field>\n          <input\n          matInput\n          placeholder=\"Suite/Unit\"\n          formControlName=\"addressTwo\">\n        </mat-form-field>\n        <mat-form-field>\n          <input\n          required\n          matInput\n          placeholder=\"City\"\n          formControlName=\"city\">\n        </mat-form-field>\n        <mat-form-field>\n          <input\n          required\n          matInput\n          placeholder=\"State\"\n          formControlName=\"state\">\n        </mat-form-field>\n        <mat-form-field>\n          <input\n          required\n          matInput\n          placeholder=\"Zip\"\n          formControlName=\"zip\">\n        </mat-form-field>\n        <mat-form-field>\n          <input\n          required\n          matInput\n          placeholder=\"Date\"\n          formControlName=\"date\"\n          type=\"datetime-local\">\n        </mat-form-field>\n        <mat-form-field>\n          <input\n          required\n          matInput\n          placeholder=\"Photo\"\n          formControlName=\"photo\">\n        </mat-form-field>\n        <mat-form-field>\n          <textarea\n          required\n          matInput\n          rows=\"10\"\n          placeholder=\"description\"\n          formControlName=\"description\">\n          </textarea>\n        </mat-form-field>\n        <mat-dialog-actions>\n            <button mat-raised-button class=\"add\" type=\"submit\">Edit Job</button>\n            <button class=\"mat-raised-button\" (click)=\"close()\">Cancel</button>\n        </mat-dialog-actions>\n  </form>\n</mat-dialog-content>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/events/events.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/events/events.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n    <h3>Events: {{allEvents.length}}</h3>\n    <span class=\"filler\"></span>\n    <button mat-raised-button class=\"add\" (click)=\"openAddEventsDialog()\">Add</button>\n</mat-toolbar>\n<div class=\"container\">\n    <mat-card *ngFor=\"let event of allEvents\">\n        <mat-card-header>\n            <div mat-card-avatar class=\"logo\"></div>\n            <mat-card-title>{{event.title}}</mat-card-title>\n          </mat-card-header>\n\n          <mat-card-content>\n\n                <mat-grid-list style=\"height: 300px\" cols=\"2\" rowHeight=\"300px\">\n                    <mat-grid-tile>\n                     {{event.organizer}}<br>\n                     {{event.date}}<br>\n                     {{event.time}}<br>\n                     {{event.addressOne}},\n                     {{event.addressTwo}}<br>\n                     {{event.city}},\n                     {{event.state}},\n                     {{event.zip}}<br><br>\n                     {{event.description}}<br>\n                    </mat-grid-tile>\n                    <mat-grid-tile>\n                     {{event.photo}}\n                    </mat-grid-tile>\n                    <!-- <p>{{event.organizer}}</p>\n                    <p>{{event.addressOne}}</p>\n                    <p>{{event.addressTwo}}</p>\n                    <p>{{event.city}}, {{event.state}}, {{event.zip}}</p>\n                    <p>{{event.date}}</p>\n                    <p>{{event.time}}</p>\n                    <p>{{event.description}}</p> -->\n                  </mat-grid-list>\n            </mat-card-content>\n            <mat-card-actions>\n              <button class=\"card-button\" mat-button (click)=\"openEditEventDialog(event)\">Edit</button>\n              <button class=\"card-button\" mat-button (click)=\"openDeleteDialog(event)\">Delete</button>\n            </mat-card-actions>\n    </mat-card>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/fairs/add-fair-dialog/add-fair-dialog.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/fairs/add-fair-dialog/add-fair-dialog.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Add Fair</h2>\n<mat-dialog-content>\n  <form [formGroup]=\"addFairForm\" (ngSubmit)=\"add(this.addFairForm.value)\">\n    <mat-form-field>\n      <input\n      required\n      matInput\n      placeholder=\"Title\"\n      formControlName=\"title\">\n    </mat-form-field>\n    <mat-form-field>\n      <input\n      required\n      matInput\n      type=\"datetime-local\"\n      placeholder=\"date\"\n      formControlName=\"date\">\n    </mat-form-field>\n    <mat-form-field>\n      <input\n      matInput\n      placeholder=\"address\"\n      formControlName=\"address\">\n    </mat-form-field>\n    <mat-form-field>\n      <input\n      required\n      matInput\n      placeholder=\"City\"\n      formControlName=\"city\">\n    </mat-form-field>\n    <mat-form-field>\n      <input\n      required\n      matInput\n      placeholder=\"State\"\n      formControlName=\"state\">\n    </mat-form-field>\n    <mat-form-field>\n      <input\n      required\n      matInput\n      placeholder=\"Zip\"\n      formControlName=\"zip\">\n    </mat-form-field>\n    <mat-form-field>\n      <textarea\n      required\n      matInput\n      rows=\"5\"\n      placeholder=\"summary\"\n      formControlName=\"summary\">\n      </textarea>\n    </mat-form-field>\n    <mat-form-field>\n      <textarea\n      required\n      matInput\n      rows=\"10\"\n      placeholder=\"description\"\n      formControlName=\"description\">\n      </textarea>\n    </mat-form-field>\n        <mat-dialog-actions>\n            <button mat-raised-button class=\"add\" type=\"submit\">Add Event</button>\n            <button class=\"mat-raised-button\" (click)=\"close()\">Cancel</button>\n        </mat-dialog-actions>\n  </form>\n</mat-dialog-content>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/fairs/delete-fair-dialog/delete-fair-dialog.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/fairs/delete-fair-dialog/delete-fair-dialog.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Delete Fair?</h2>\n<p>{{title}}</p>\n<p>{{date}}</p>\n<p>{{time}}</p>\n<p>{{address}}</p>\n<p>{{city}}</p>\n<p>{{state}}</p>\n<p>{{zip}}</p>\n<p>Summary: {{summary}}</p>\n<p>Description: {{description}}</p>\n<mat-dialog-content>\n      <p>Are you sure you want to delete this Event? It cannot be undone.</p>\n</mat-dialog-content>\n\n<mat-dialog-actions>\n    <button mat-raised-button class=\"danger\" (click)=\"delete(id)\">Delete</button>\n    <button class=\"mat-raised-button\" (click)=\"close()\">Cancel</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/fairs/edit-fair-dialog/edit-fair-dialog.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/fairs/edit-fair-dialog/edit-fair-dialog.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Edit Fair</h2>\n<mat-dialog-content>\n  <form [formGroup]=\"editFairForm\" (ngSubmit)=\"update(this.editFairForm.value)\">\n      <mat-form-field>\n          <input\n          required\n          matInput\n          placeholder=\"Title\"\n          formControlName=\"title\">\n        </mat-form-field>\n        <mat-form-field>\n          <input\n          required\n          matInput\n          placeholder=\"Address\"\n          formControlName=\"address\">\n        </mat-form-field>\n        <mat-form-field>\n          <input\n          required\n          matInput\n          placeholder=\"City\"\n          formControlName=\"city\">\n        </mat-form-field>\n        <mat-form-field>\n          <input\n          matInput\n          placeholder=\"State\"\n          formControlName=\"state\">\n        </mat-form-field>\n        <mat-form-field>\n          <input\n          required\n          matInput\n          placeholder=\"zip\"\n          formControlName=\"zip\">\n        </mat-form-field>\n        <mat-form-field>\n          <input\n          required\n          matInput\n          placeholder=\"Date\"\n          formControlName=\"date\"\n          type=\"datetime-local\">\n        </mat-form-field>\n        <mat-form-field>\n          <textarea\n          required\n          matInput\n          rows=\"10\"\n          placeholder=\"Summary\"\n          formControlName=\"summary\">\n          </textarea>\n        </mat-form-field>\n        <mat-form-field>\n          <textarea\n          required\n          matInput\n          rows=\"10\"\n          placeholder=\"description\"\n          formControlName=\"description\">\n          </textarea>\n        </mat-form-field>\n        <mat-dialog-actions>\n            <button mat-raised-button class=\"add\" type=\"submit\">Edit Fair</button>\n            <button class=\"mat-raised-button\" (click)=\"close()\">Cancel</button>\n        </mat-dialog-actions>\n  </form>\n</mat-dialog-content>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/fairs/fairs.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/fairs/fairs.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <h3>Fairs: {{allFairs.length}}</h3>\n  <button float-left mat-raised-button class=\"add\" (click)=\"openAddFairsDialog()\">Add</button>\n</mat-toolbar>\n<div class=\"container\">\n<div class=\"flex-container\">\n  <mat-card *ngFor=\"let fair of allFairs\">\n      <mat-card-header>\n          <div mat-card-avatar class=\"logo\"></div>\n          <mat-card-title>{{fair.title}}</mat-card-title>\n        </mat-card-header>\n\n        <mat-card-content>\n          <p><span>Time: </span>{{fair.time}}</p>\n          <p><span>Date: </span>{{fair.date}}</p>\n          <p><span>Address: </span>{{fair.address}}</p>\n          <p><span>City: </span>{{fair.city}}</p>\n          <p><span>State: </span>{{fair.state}}</p>\n          <p><span>Zip: </span>{{fair.zip}}</p>\n          <p><span>Summary : </span><br><br>{{fair.summary}}</p>\n          <p><span>Description : </span><br><br>{{fair.description}}</p>\n\n          <p><span>Schools : </span><br><br></p>\n          <p *ngFor=\"let student of fair.students\">{{student}}</p>\n\n          <p><span>Partners : </span><br><br>{{fair.partners}}</p>\n          </mat-card-content>\n          <mat-card-actions>\n            <button class=\"card-button\" mat-button (click)=\"openEditFairDialog(fair)\">Edit</button>\n            <button class=\"card-button\" mat-button (click)=\"openDeleteFairsDialog(fair)\">Delete</button>\n          </mat-card-actions>\n  </mat-card>\n</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/jobs/add-job-dialog/add-job-dialog.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/jobs/add-job-dialog/add-job-dialog.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Add Job</h2>\n<mat-dialog-content>\n  <form [formGroup]=\"addJobForm\" (ngSubmit)=\"add(this.addJobForm.value)\">\n      <mat-form-field>\n          <input\n          matInput\n          placeholder=\"Title\"\n          formControlName=\"title\">\n        </mat-form-field>\n        <mat-form-field>\n          <input\n          matInput\n          placeholder=\"Company Name\"\n          formControlName=\"companyName\">\n        </mat-form-field>\n        <mat-form-field>\n          <input\n          matInput\n          placeholder=\"Company Email\"\n          formControlName=\"companyEmail\">\n        </mat-form-field>\n        <mat-form-field>\n          <input\n          matInput\n          placeholder=\"Rate of Pay - x/hr\"\n          formControlName=\"rateOfPay\">\n        </mat-form-field>\n        <mat-form-field>\n          <input\n          matInput\n          placeholder=\"Summary of Job\"\n          formControlName=\"summary\">\n        </mat-form-field>\n        <mat-form-field>\n          <textarea\n          matInput\n          rows=\"10\"\n          placeholder=\"Full Description of Job\"\n          formControlName=\"fullJobDescription\">\n          </textarea>\n        </mat-form-field>\n        <mat-dialog-actions>\n            <button mat-raised-button class=\"add\" type=\"submit\">Add Job</button>\n            <button class=\"mat-raised-button\" (click)=\"close()\">Cancel</button>\n        </mat-dialog-actions>\n  </form>\n</mat-dialog-content>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/jobs/delete-dialog/delete-dialog.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/jobs/delete-dialog/delete-dialog.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Delete Job?</h2>\n<p>{{title}}</p>\n<p style=\"color: green\">{{rateOfPay}} /hr</p>\n<p>{{companyName}}</p>\n<p>{{companyEmail}}</p>\n<p>{{summary}}</p>\n<p>{{fullJobDescription}}</p>\n<mat-dialog-content>\n      <p>Are you sure you want to delete this Job? It cannot be undone.</p>\n</mat-dialog-content>\n\n<mat-dialog-actions>\n    <button mat-raised-button class=\"danger\" (click)=\"delete(id)\">Delete</button>\n    <button class=\"mat-raised-button\" (click)=\"close()\">Cancel</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/jobs/edit-job-dialog/edit-job-dialog.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/jobs/edit-job-dialog/edit-job-dialog.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Add Job</h2>\n<mat-dialog-content>\n  <form [formGroup]=\"editJobForm\" (ngSubmit)=\"update(this.editJobForm.value)\">\n      <mat-form-field>\n          <input\n          matInput\n          placeholder=\"Title\"\n          formControlName=\"title\">\n        </mat-form-field>\n        <mat-form-field>\n          <input\n          matInput\n          placeholder=\"Company Name\"\n          formControlName=\"companyName\">\n        </mat-form-field>\n        <mat-form-field>\n          <input\n          matInput\n          placeholder=\"Company Email\"\n          formControlName=\"companyEmail\">\n        </mat-form-field>\n        <mat-form-field>\n          <input\n          matInput\n          placeholder=\"Rate of Pay - x/hr\"\n          formControlName=\"rateOfPay\">\n        </mat-form-field>\n        <mat-form-field>\n          <input\n          matInput\n          placeholder=\"Summary of Job\"\n          formControlName=\"summary\">\n        </mat-form-field>\n        <mat-form-field>\n          <textarea\n          matInput\n          rows=\"10\"\n          placeholder=\"Full Description of Job\"\n          formControlName=\"fullJobDescription\">\n          </textarea>\n        </mat-form-field>\n        <mat-dialog-actions>\n            <button mat-raised-button class=\"add\" type=\"submit\">Edit Job</button>\n            <button class=\"mat-raised-button\" (click)=\"close()\">Cancel</button>\n        </mat-dialog-actions>\n  </form>\n</mat-dialog-content>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/jobs/jobs.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/jobs/jobs.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <mat-toolbar>\n        <h3>Jobs: {{allJobs.length}}</h3>\n        <span class=\"filler\"></span>\n        <button mat-raised-button class=\"add\" (click)=\"openAddJobDialog()\">Add Job</button>\n    </mat-toolbar>\n    <div class=\"container\">\n        <mat-card *ngFor=\"let job of allJobs\">\n            <mat-card-header>\n                <div mat-card-avatar class=\"logo\"></div>\n                <mat-card-title>{{job.title}}</mat-card-title>\n                <mat-card-subtitle>{{job.companyEmail}}</mat-card-subtitle>\n              </mat-card-header>\n\n              <mat-card-content>\n                  <p style=\"color: green;\">{{job.rateOfPay}}/hr</p>\n                  <p>Summary: {{job.summary}}</p>\n                  <p>Full Job Description: {{job.fullJobDescription}}</p>\n                </mat-card-content>\n                <mat-card-actions>\n                  <button class=\"card-button\" mat-button (click)=\"openEditDialog(job)\">Edit</button>\n                  <button class=\"card-button\" mat-button (click)=\"openDeleteDialog(job)\">Delete</button>\n                </mat-card-actions>\n        </mat-card>\n    </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/logout/logout.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/logout/logout.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-container\">\n    <h3>Are you sure you want to logout?</h3>\n    <button mat-raised-button (click)=\"logout()\">Logout</button>\n  </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/mentors/add-mentor-dialog/add-mentor-dialog.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/mentors/add-mentor-dialog/add-mentor-dialog.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Add Mentor</h2>\n<mat-dialog-content>\n  <form [formGroup]=\"addMentorForm\" (ngSubmit)=\"add(this.addMentorForm.value)\">\n      <mat-form-field>\n          <input\n          matInput\n          placeholder=\"Name\"\n          formControlName=\"name\">\n        </mat-form-field>\n        <mat-form-field>\n          <input\n          matInput\n          placeholder=\"Email\"\n          formControlName=\"email\">\n        </mat-form-field>\n        <mat-form-field>\n          <input\n          matInput\n          placeholder=\"Address\"\n          formControlName=\"address\">\n        </mat-form-field>\n        <mat-form-field>\n          <input\n          matInput\n          placeholder=\"City\"\n          formControlName=\"city\">\n        </mat-form-field>\n        <mat-form-field>\n          <input\n          matInput\n          placeholder=\"State\"\n          formControlName=\"state\">\n        </mat-form-field>\n        <mat-form-field>\n          <input\n          matInput\n          placeholder=\"Zip\"\n          formControlName=\"zip\">\n        </mat-form-field>\n        <mat-form-field>\n            <input\n            matInput\n            placeholder=\"Photo\"\n            formControlName=\"photo\">\n          </mat-form-field>\n          <mat-form-field>\n            <input\n            matInput\n            placeholder=\"Title\"\n            formControlName=\"title\">\n          </mat-form-field>\n          <mat-form-field>\n            <textarea\n            matInput\n            rows=\"10\"\n            placeholder=\"Description\"\n            formControlName=\"description\">\n            </textarea>\n        </mat-form-field>\n        <mat-dialog-actions>\n            <button mat-raised-button class=\"add\" type=\"submit\">Add Mentors</button>\n            <button class=\"mat-raised-button\" (click)=\"close()\">Cancel</button>\n        </mat-dialog-actions>\n  </form>\n</mat-dialog-content>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/mentors/delete-mentor-dialog/delete-mentor-dialog.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/mentors/delete-mentor-dialog/delete-mentor-dialog.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Delete Mentor?</h2>\n<p>{{photo}}</p>\n<p>{{name}}</p>\n<p>{{title}}</p>\n<p>{{address}}</p>\n<p>{{city}}, {{state}}, {{zip}}</p>\n<p>{{phone}}</p>\n<p>{{email}}</p>\n<p>{{description}}</p>\n<mat-dialog-content>\n      <p>Are you sure you want to delete this Job? It cannot be undone.</p>\n</mat-dialog-content>\n\n<mat-dialog-actions>\n    <button mat-raised-button class=\"danger\" (click)=\"delete(id)\">Delete</button>\n    <button class=\"mat-raised-button\" (click)=\"close()\">Cancel</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/mentors/edit-mentor-dialog/edit-mentor-dialog.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/mentors/edit-mentor-dialog/edit-mentor-dialog.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Edit Mentor Information</h2>\n<mat-dialog-content>\n  <form [formGroup]=\"editMentorForm\" (ngSubmit)=\"update(this.editMentorForm.value)\">\n    <mat-form-field>\n      <input\n      matInput\n      placeholder=\"Name\"\n      formControlName=\"name\">\n    </mat-form-field>\n    <mat-form-field>\n      <input\n      matInput\n      placeholder=\"Email\"\n      formControlName=\"email\">\n    </mat-form-field>\n    <mat-form-field>\n      <input\n      matInput\n      placeholder=\"Address\"\n      formControlName=\"address\">\n    </mat-form-field>\n    <mat-form-field>\n      <input\n      matInput\n      placeholder=\"City\"\n      formControlName=\"city\">\n    </mat-form-field>\n    <mat-form-field>\n      <input\n      matInput\n      placeholder=\"State\"\n      formControlName=\"state\">\n    </mat-form-field>\n    <mat-form-field>\n      <input\n      matInput\n      placeholder=\"Zip\"\n      formControlName=\"zip\">\n    </mat-form-field>\n    <mat-form-field>\n        <input\n        matInput\n        placeholder=\"Photo\"\n        formControlName=\"photo\">\n      </mat-form-field>\n      <mat-form-field>\n        <input\n        matInput\n        placeholder=\"Title\"\n        formControlName=\"title\">\n      </mat-form-field>\n      <mat-form-field>\n        <textarea\n        matInput\n        rows=\"10\"\n        placeholder=\"Description\"\n        formControlName=\"description\">\n        </textarea>\n    </mat-form-field>\n        <mat-dialog-actions>\n            <button mat-raised-button class=\"add\" type=\"submit\">Edit Job</button>\n            <button class=\"mat-raised-button\" (click)=\"close()\">Cancel</button>\n        </mat-dialog-actions>\n  </form>\n</mat-dialog-content>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/mentors/mentors.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/mentors/mentors.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n    <h3>Mentors: {{allMentors.length}}</h3>\n    <span class=\"filler\"></span>\n    <button mat-raised-button class=\"add\" (click)=\"openAddMentorDialog()\">Add</button>\n</mat-toolbar>\n<div class=\"container\">\n    <mat-card *ngFor=\"let mentor of allMentors\">\n        <mat-card-header>\n            <div mat-card-avatar class=\"logo\"></div>\n            <mat-card-title>{{mentor.name}}</mat-card-title>\n            <mat-card-subtitle>{{mentor.email}}</mat-card-subtitle>\n            <mat-card-subtitle>{{mentor.title}}</mat-card-subtitle>\n          </mat-card-header>\n\n          <mat-card-content>\n              <p>{{mentor.city}}, {{mentor.state}}, {{mentor.zip}}</p>\n              <p>{{mentor.summary}}</p>\n              <p>{{mentor.description}}</p>\n            </mat-card-content>\n            <mat-card-actions>\n              <button class=\"card-button\" mat-button (click)=\"openEditMentorDialog(mentor)\">Edit</button>\n              <button class=\"card-button\" mat-button (click)=\"openDeleteDialog(mentor)\">Delete</button>\n            </mat-card-actions>\n    </mat-card>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/posts/comments-dialog/comments-dialog.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/posts/comments-dialog/comments-dialog.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"comments.length === 0\">\n    <p>This post has no comments</p>\n  </div>\n\n  <h1 mat-dialog-title>Comments ({{comments.length}})</h1>\n    <mat-card *ngFor=\"let comment of comments\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"logo\"></div>\n      <mat-card-title>{{comment.userFullName}}</mat-card-title>\n      <mat-card-subtitle>{{comment.userEmail}}</mat-card-subtitle>\n      <mat-card-subtitle>{{comment.date}}</mat-card-subtitle>\n      <mat-card-subtitle>Likes: {{comment.likes}}</mat-card-subtitle>\n    </mat-card-header>\n\n    <mat-card-content>\n        <p style=\"font-size: 1em;\">\n          <span style=\"font: 2em\">\"</span>\n          {{comment.comment}}\n          <span style=\"font: 2em\">\"</span>\n        </p>\n      </mat-card-content>\n      <mat-card-actions>\n        <button class=\"card-button\" mat-button (click)=\"openDeleteCommentDialog(comment)\">Delete</button>\n      </mat-card-actions>\n  </mat-card>\n\n  <hr>\n  <mat-dialog-actions>\n    <button class=\"mat-raised-button\" (click)=\"close()\">Cancel</button>\n  </mat-dialog-actions>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/posts/delete-comment-dialog/delete-comment-dialog.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/posts/delete-comment-dialog/delete-comment-dialog.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h2 mat-dialog-title>Delete Comment?</h2>\n<p>{{userFullName}}</p>\n<p>{{userEmail}}</p>\n<p>Likes: {{likes}}</p>\n<mat-dialog-content>\n      <p>Are you sure you want to delete this Comment? It cannot be undone.</p>\n      <br>\n      <p>Post: </p>\n      <h3>{{comment}}</h3>\n</mat-dialog-content>\n\n<mat-dialog-actions>\n    <button mat-raised-button class=\"danger\" (click)=\"delete()\">Delete</button>\n    <button class=\"mat-raised-button\" (click)=\"close()\">Cancel</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/posts/delete-post-dialog/delete-post-dialog.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/posts/delete-post-dialog/delete-post-dialog.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Delete Post?</h2>\n<p>By: {{creatorName}}</p>\n<p>Email: {{creatorEmail}}</p>\n<mat-dialog-content>\n      <p>Are you sure you want to delete this Post? It cannot be undone.</p>\n      <br>\n      <p>Post: </p>\n      <h3>{{post}}</h3>\n</mat-dialog-content>\n\n<mat-dialog-actions>\n    <button mat-raised-button class=\"danger\" (click)=\"delete(id)\">Delete</button>\n    <button class=\"mat-raised-button\" (click)=\"close()\">Cancel</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/posts/followers-dialog/followers-dialog.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/posts/followers-dialog/followers-dialog.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"followers.length === 0\">\n  <p>This post has no followers</p>\n</div>\n<h1 mat-dialog-title>Followers</h1>\n<div>\n  <mat-card *ngFor=\"let follower of followers\">\n  <mat-card-header>\n    <div mat-card-avatar class=\"logo\"></div>\n    <mat-card-title>{{follower}}</mat-card-title>\n    <!-- <mat-card-subtitle>{{post.creatorEmail}}</mat-card-subtitle> -->\n  </mat-card-header>\n\n  <mat-card-content>\n      <p style=\"font-size: 1em;\">\n        <span style=\"font: 2em\">\"</span>\n        {{follower}}\n        <span style=\"font: 2em\">\"</span>\n      </p>\n    </mat-card-content>\n    <mat-card-actions>\n      <!-- <button class=\"card-button\" mat-button (click)=\"openFollowersDialog(post)\" >Followers ({{post.followers.length}})</button>\n      <button class=\"card-button\" mat-button (click)=\"openCommentsDialog(post)\" >Comments ({{post.comments.length}})</button>\n      <button class=\"card-button\" mat-button (click)=\"openDeleteDialog(post)\">Delete</button> -->\n    </mat-card-actions>\n</mat-card>\n</div>\n\n<hr>\n<mat-dialog-actions>\n  <button class=\"mat-raised-button\" (click)=\"close()\">Cancel</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/posts/posts.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/posts/posts.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n    <h3>Posts: {{allPosts.length}}</h3>\n    <span class=\"filler\"></span>\n    <button mat-raised-button class=\"add\" (click)=\"reportedPage()\">Reported ( {{ reportedPost.length }} )</button>\n    <button mat-raised-button class=\"add\" (click)=\"verifyPage()\">Verify ( {{ unverifiedPost.length }} )</button>\n</mat-toolbar>\n<router-outlet name=\"posts\"></router-outlet>\n<div class=\"container\">\n    <mat-card *ngFor=\"let post of allPosts\">\n        <mat-card-header>\n            <div mat-card-avatar class=\"logo\"></div>\n            <mat-card-title>{{post.creatorName}}</mat-card-title>\n            <mat-card-subtitle>{{post.creatorEmail}}</mat-card-subtitle>\n          </mat-card-header>\n\n          <mat-card-content>\n              <p style=\"font-size: 1em;\">\n                <span style=\"font: 2em\">\"</span>\n                {{post.post}}\n                <span style=\"font: 2em\">\"</span>\n              </p>\n            </mat-card-content>\n            <mat-card-actions>\n              <button class=\"card-button\" mat-button (click)=\"openFollowersDialog(post)\" >Followers ({{post.followers.length}})</button>\n              <button class=\"card-button\" mat-button (click)=\"openCommentsDialog(post)\" >Comments ({{post.comments.length}})</button>\n              <button class=\"card-button\" mat-button (click)=\"openDeleteDialog(post)\">Delete</button>\n            </mat-card-actions>\n    </mat-card>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/posts/reported/delete-reported-comment-dialog/delete-reported-comment-dialog.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/posts/reported/delete-reported-comment-dialog/delete-reported-comment-dialog.component.html ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Delete Reported Comment?</h2>\n<h4>By:</h4><p> {{reportedUserName}}</p>\n<h4>Email:</h4><p> {{reportedUserEmail}}</p>\n<h4>Reported Comment:</h4><p> \"{{comment}}\"</p>\n<mat-dialog-content>\n      <p>Are you sure you want to delete this Comment? It cannot be undone.</p>\n</mat-dialog-content>\n\n<mat-dialog-actions>\n    <button mat-raised-button class=\"danger\" (click)=\"delete()\">Delete</button>\n    <button class=\"mat-raised-button\" (click)=\"close()\">Cancel</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/posts/reported/reported-archive/reported-archive.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/posts/reported/reported-archive/reported-archive.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <h3>Reported Comment Archive</h3>\n  <span class=\"filler\"></span>\n  <button mat-raised-button class=\"add\" (click)=\"goBack()\">Go Back </button>\n</mat-toolbar>\n<div class=\"container\">\n\n<h3>These are all the posts that have been reported whether or not they have been deleted or not.</h3>\n\n<div *ngIf=\"allReportedPosts.length[1] === 0\" style=\"position: relative; top: 200px;\nleft: 200px\">\n    <h3>There have been no comments that have been added to the reported comments archieve. If you see this, something is wrong.</h3>\n</div>\n\n<mat-card *ngFor=\"let post of allReportedPosts[1]\">\n  <mat-card-header>\n      <div mat-card-avatar class=\"logo\"></div>\n      <mat-card-title>Reporting User: {{post.userFullname}}</mat-card-title>\n      <mat-card-subtitle>{{post.userEmail}}</mat-card-subtitle>\n      <mat-card-subtitle>{{post.date}}</mat-card-subtitle>\n      <mat-card-subtitle>Post _id: {{post.postID}}</mat-card-subtitle>\n      <mat-card-subtitle>Post: {{post.post}}</mat-card-subtitle>\n      <mat-card-subtitle>Post _id: {{post.postID}}</mat-card-subtitle>\n      <mat-card-subtitle>Date: {{post.date}}</mat-card-subtitle>\n    </mat-card-header>\n\n    <mat-card-content>\n      <h3>Reported Comment: {{post.comment}}</h3>\n      <h3>Reported User: {{post.reportedUserName}}</h3>\n      <h3>Reported Comment: {{post.reportedUserEmail}}</h3>\n      </mat-card-content>\n      <!-- <mat-card-actions>\n\n      </mat-card-actions> -->\n</mat-card>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/posts/reported/reported.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/posts/reported/reported.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n    <h3>Reported Comments: </h3>\n    <span class=\"filler\"></span>\n    <button mat-raised-button class=\"add\"> Reported Archives </button>\n    <button mat-raised-button class=\"add\" (click)=\"goBack()\">Go Back </button>\n</mat-toolbar>\n<div class=\"container\">\n  <mat-card *ngFor=\"let post of allReportedComments\">\n    <mat-card-header>\n        <div mat-card-avatar class=\"logo\"></div>\n        <mat-card-title>Reporting: {{post.userFullname}}</mat-card-title>\n        <mat-card-subtitle>{{post.userEmail}}</mat-card-subtitle>\n      </mat-card-header>\n\n      <mat-card-content>\n        <p style=\"color: red\">Reported User: {{post.reportedUserName}}</p>\n        <p style=\"color: red\">Reported User's Email: {{post.reportedUserEmail}}</p>\n          <p style=\"font-size: 1em; color: red;\"> Reported Comment</p>\n          <p style=\"font-size: 1em; color: red;\">{{post.comment}}</p>\n          <p style=\"font-size: 1em;\"> On Post</p>\n          <p>{{post.post}}</p>\n        </mat-card-content>\n        <mat-card-actions>\n          <button class=\"card-button\" mat-button (click)=\"openDeleteReportedCommentDialog(post)\">Delete</button>\n          <button class=\"card-button\" mat-button (click)=\"openSeenReportedCommentDialog(post)\">Mark as Seen</button>\n        </mat-card-actions>\n</mat-card>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/posts/reported/seen-comment-dialog/seen-comment-dialog.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/posts/reported/seen-comment-dialog/seen-comment-dialog.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Mark this Reported Comment as Seen?</h2>\n<h4>By:</h4><p> {{reportedUserName}}</p>\n<h4>Email:</h4><p> {{reportedUserEmail}}</p>\n<h4>Reported Comment:</h4><p> \"{{comment}}\"</p>\n<mat-dialog-content>\n      <p>Are you sure you want to Mark this Comment as Seeb? It cannot be undone.</p>\n      <br>\n      <p>Post: </p>\n      <h3>{{comment}}</h3>\n</mat-dialog-content>\n\n<mat-dialog-actions>\n    <button mat-raised-button class=\"success\" (click)=\"reportedCommentsArchive()\">Send to Archive</button>\n    <button class=\"mat-raised-button\" (click)=\"close()\">Cancel</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/posts/verify/denied/denied.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/posts/verify/denied/denied.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n    <h3>Denied Posts: </h3>\n    <span class=\"filler\"></span>\n    <button mat-raised-button class=\"add\" (click)=\"goBack()\">Go Back </button>\n</mat-toolbar>\n<div class=\"container\">\n\n  <h3>These are all the posts that have been denied during the verification process.</h3>\n\n  <div *ngIf=\"allDeniedPosts.length === 0\" style=\"position: relative; top: 200px;\n  left: 200px\">\n      <h3>There have been no post that have been denied. If you see this, something is wrong.</h3>\n  </div>\n\n  <mat-card *ngFor=\"let post of allDeniedPosts\">\n    <mat-card-header>\n        <div mat-card-avatar class=\"logo\"></div>\n        <mat-card-title>{{post.creatorName}}</mat-card-title>\n        <mat-card-subtitle>{{post.creatorEmail}}</mat-card-subtitle>\n        <mat-card-subtitle>{{post.date}}</mat-card-subtitle>\n        <mat-card-subtitle>_id: {{post._id}}</mat-card-subtitle>\n      </mat-card-header>\n\n      <mat-card-content>\n        <h3>{{post.post}}</h3>\n        </mat-card-content>\n        <!-- <mat-card-actions>\n\n        </mat-card-actions> -->\n</mat-card>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/posts/verify/deny-dialog/deny-dialog.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/posts/verify/deny-dialog/deny-dialog.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Deny this Post?</h2>\n<h4>By:</h4><p> {{creatorName}}</p>\n<h4>Email:</h4><p> {{creatorEmail}}</p>\n<h4>on:</h4><p> {{date}}</p>\n<h4>Post:</h4><p> \"{{post}}\"</p>\n<mat-dialog-content>\n      <p>Are you sure you want to Deny this comment? It can't be undone. After this post has been Denied, the User will be notifed, and their post will be added to the Denied Posts Collection.</p>\n</mat-dialog-content>\n\n<mat-dialog-actions>\n    <button mat-raised-button class=\"card-button danger\" (click)=\"deny(id)\">Deny</button>\n    <button class=\"mat-raised-button\" (click)=\"close()\">Cancel</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/posts/verify/verify-dialog/verify-dialog.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/posts/verify/verify-dialog/verify-dialog.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Verify this Post?</h2>\n<h4>By:</h4><p> {{creatorName}}</p>\n<h4>Email:</h4><p> {{creatorEmail}}</p>\n<h4>on:</h4><p> {{date}}</p>\n<h4>Post:</h4><p> \"{{post}}\"</p>\n<mat-dialog-content>\n      <p>Are you sure you want to Verify this comment? It can't be undone. After this post is verifed, the User will be notifed, and their post will be added to the Inspiration Posts.</p>\n</mat-dialog-content>\n\n<mat-dialog-actions>\n    <button mat-raised-button class=\"success\" style=\"background: green; color: white;\" (click)=\"verifyYes(id)\">Verify</button>\n    <button class=\"mat-raised-button\" (click)=\"close()\">Cancel</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/posts/verify/verify.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/posts/verify/verify.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n    <h3>Verify Posts: </h3>\n    <span class=\"filler\"></span>\n    <button mat-raised-button class=\"add\"> Denied Archives</button>\n    <button mat-raised-button class=\"add\" (click)=\"goBack()\">Go Back </button>\n</mat-toolbar>\n<div class=\"container\">\n\n  <div *ngIf=\"allUnverifiedPosts.length === 0\" style=\"position: relative; top: 200px;\n  left: 200px\">\n      <h1>There are no posts to be verifed.</h1>\n  </div>\n\n  <mat-card *ngFor=\"let post of allUnverifiedPosts\">\n    <mat-card-header>\n        <div mat-card-avatar class=\"logo\"></div>\n        <mat-card-title>{{post.creatorName}}</mat-card-title>\n        <mat-card-subtitle>{{post.creatorEmail}}</mat-card-subtitle>\n        <mat-card-subtitle>{{post.date}}</mat-card-subtitle>\n        <mat-card-subtitle>_id: {{post._id}}</mat-card-subtitle>\n      </mat-card-header>\n\n      <mat-card-content>\n        <h3>{{post.post}}</h3>\n        </mat-card-content>\n        <mat-card-actions>\n          <button class=\"card-button\" style=\"background: green; color: white;\" mat-button (click)=\"verifyYesDialog(post)\">Yes</button>\n          <button class=\"card-button danger\" mat-button (click)=\"verifyNoDialog(post)\">No</button>\n        </mat-card-actions>\n</mat-card>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/students/delete-student-dialog/delete-dialog.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/students/delete-student-dialog/delete-dialog.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Delete Job?</h2>\n<p>{{fullName}}</p>\n<p>{{email}}</p>\n<p>{{addressOne}}</p>\n<p>{{addressTwo}}</p>\n<p>{{phone}}</p>\n<p>{{city}}</p>\n<p>{{state}}</p>\n<p>{{zip}}</p>\n<p>{{gender}}</p>\n<p>{{dob}}</p>\n<p>{{school}}</p>\n<p>{{grade}}</p>\n<mat-dialog-content>\n      <p>Are you sure you want to delete this Job? It cannot be undone.</p>\n</mat-dialog-content>\n\n<mat-dialog-actions>\n    <button mat-raised-button class=\"danger\" (click)=\"delete(id)\">Delete</button>\n    <button class=\"mat-raised-button\" (click)=\"close()\">Cancel</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/students/edit-student-dialog/edit-student-dialog.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/students/edit-student-dialog/edit-student-dialog.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Add Job</h2>\n<mat-dialog-content>\n  <form [formGroup]=\"editStudentForm\" (ngSubmit)=\"update(this.editStudentForm.value)\">\n      <mat-form-field>\n          <input\n          matInput\n          placeholder=\"Full Name\"\n          formControlName=\"fullName\">\n        </mat-form-field>\n        <mat-form-field>\n          <input\n          matInput\n          placeholder=\"Address 1\"\n          formControlName=\"addressOne\">\n        </mat-form-field>\n        <mat-form-field>\n          <input\n          matInput\n          placeholder=\"Address 2\"\n          formControlName=\"addressTwo\">\n        </mat-form-field>\n        <mat-form-field>\n          <input\n          matInput\n          placeholder=\"Phone\"\n          formControlName=\"phone\">\n        </mat-form-field>\n        <mat-form-field>\n          <input\n          matInput\n          placeholder=\"City\"\n          formControlName=\"city\">\n        </mat-form-field>\n        <mat-form-field>\n          <input\n          matInput\n          placeholder=\"State\"\n          formControlName=\"state\">\n        </mat-form-field>\n        <mat-form-field>\n          <input\n          matInput\n          placeholder=\"Zip\"\n          formControlName=\"zip\">\n        </mat-form-field>\n        <mat-form-field>\n          <input\n          matInput\n          placeholder=\"Gender\"\n          formControlName=\"gender\">\n        </mat-form-field>\n        <mat-form-field>\n          <input\n          matInput\n          placeholder=\"Date of Birth\"\n          formControlName=\"dob\">\n        </mat-form-field>\n        <mat-form-field>\n          <input\n          matInput\n          placeholder=\"School\"\n          formControlName=\"school\">\n        </mat-form-field>\n        <mat-form-field>\n          <input\n          matInput\n          placeholder=\"Grade\"\n          formControlName=\"grade\">\n        </mat-form-field>\n        <mat-form-field>\n          <input\n          matInput\n          placeholder=\"Email\"\n          formControlName=\"email\">\n        </mat-form-field>\n        <mat-dialog-actions>\n            <button mat-raised-button class=\"add\" type=\"submit\">Edit Job</button>\n            <button class=\"mat-raised-button\" (click)=\"close()\">Cancel</button>\n        </mat-dialog-actions>\n  </form>\n</mat-dialog-content>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/students/students.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/students/students.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <h3>Students: {{allStudents.length}}</h3>\n</mat-toolbar>\n<div class=\"container\">\n  <br>\n    <h4>Users in this section have signed up for the platform</h4>\n  <mat-card *ngFor=\"let student of allStudents\">\n      <mat-card-header>\n          <div mat-card-avatar class=\"example-header-image\">\n            profile picture\n            <img src=\"{{student.profilePicture}}\" alt=\"\">\n          </div>\n          <mat-card-title>{{student.fullName}}</mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n          <p>{{student.gender}}</p>\n          <p>School: {{student.school}}</p>\n          <p>Grade: {{student.grade}}</p>\n          <p>{{student.email}}</p>\n          <p>{{student.addressOne}}</p>\n          <p>{{student.addressTwo}}</p>\n          <p>Date of Birth: {{student.dob}}</p>\n          <p>{{student.phone}}</p>\n          <p>{{student.city}}</p>\n          <p>{{student.state}}</p>\n          </mat-card-content>\n          <mat-card-actions>\n            <button mat-button (click)=\"openEditDialog(student)\">Edit</button>\n            <button mat-button (click)=\"openDeleteDialog(student)\">Delete</button>\n          </mat-card-actions>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-container\">\n    <h1>Admin</h1>\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"login(this.loginForm.value)\" style=\"text-align: center\">\n        <mat-form-field>\n          <input matInput placeholder=\"Username\" formControlName=\"username\">\n        </mat-form-field>\n        <mat-form-field>\n          <input\n          matInput\n          placeholder=\"Password\" formControlName=\"password\"\n          type=\"password\">\n        </mat-form-field>\n        <button mat-raised-button type=\"submit\">Login</button>\n    </form>\n  </div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_jobs_jobs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/jobs/jobs.component */ "./src/app/dashboard/jobs/jobs.component.ts");
/* harmony import */ var _dashboard_students_students_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/students/students.component */ "./src/app/dashboard/students/students.component.ts");
/* harmony import */ var _dashboard_mentors_mentors_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/mentors/mentors.component */ "./src/app/dashboard/mentors/mentors.component.ts");
/* harmony import */ var _dashboard_posts_posts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/posts/posts.component */ "./src/app/dashboard/posts/posts.component.ts");
/* harmony import */ var _dashboard_events_events_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/events/events.component */ "./src/app/dashboard/events/events.component.ts");
/* harmony import */ var _dashboard_logout_logout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/logout/logout.component */ "./src/app/dashboard/logout/logout.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_posts_reported_reported_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/posts/reported/reported.component */ "./src/app/dashboard/posts/reported/reported.component.ts");
/* harmony import */ var _dashboard_posts_reported_reported_archive_reported_archive_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard/posts/reported/reported-archive/reported-archive.component */ "./src/app/dashboard/posts/reported/reported-archive/reported-archive.component.ts");
/* harmony import */ var _dashboard_posts_verify_verify_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard/posts/verify/verify.component */ "./src/app/dashboard/posts/verify/verify.component.ts");
/* harmony import */ var _dashboard_fairs_fairs_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dashboard/fairs/fairs.component */ "./src/app/dashboard/fairs/fairs.component.ts");
/* harmony import */ var _dashboard_posts_verify_denied_denied_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dashboard/posts/verify/denied/denied.component */ "./src/app/dashboard/posts/verify/denied/denied.component.ts");
















var routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"], children: [
            { path: '', component: _dashboard_posts_posts_component__WEBPACK_IMPORTED_MODULE_7__["PostsComponent"], outlet: 'open' },
            { path: 'jobs', component: _dashboard_jobs_jobs_component__WEBPACK_IMPORTED_MODULE_4__["JobsComponent"], outlet: 'open' },
            { path: 'students', component: _dashboard_students_students_component__WEBPACK_IMPORTED_MODULE_5__["StudentsComponent"], outlet: 'open' },
            { path: 'mentors', component: _dashboard_mentors_mentors_component__WEBPACK_IMPORTED_MODULE_6__["MentorsComponent"], outlet: 'open' },
            { path: 'posts', component: _dashboard_posts_posts_component__WEBPACK_IMPORTED_MODULE_7__["PostsComponent"], outlet: 'open', children: [
                    { path: 'verify', component: _dashboard_posts_verify_verify_component__WEBPACK_IMPORTED_MODULE_13__["VerifyComponent"], outlet: 'open' },
                    { path: 'reported', component: _dashboard_posts_reported_reported_component__WEBPACK_IMPORTED_MODULE_11__["ReportedComponent"], outlet: 'open' }
                ] },
            { path: 'reported-arhive', component: _dashboard_posts_reported_reported_archive_reported_archive_component__WEBPACK_IMPORTED_MODULE_12__["ReportedArchiveComponent"], outlet: 'open' },
            { path: 'denied', component: _dashboard_posts_verify_denied_denied_component__WEBPACK_IMPORTED_MODULE_15__["DeniedComponent"], outlet: 'open' },
            { path: 'events', component: _dashboard_events_events_component__WEBPACK_IMPORTED_MODULE_8__["EventsComponent"], outlet: 'open' },
            { path: 'fairs', component: _dashboard_fairs_fairs_component__WEBPACK_IMPORTED_MODULE_14__["FairsComponent"], outlet: 'open' },
            { path: 'logout', component: _dashboard_logout_logout_component__WEBPACK_IMPORTED_MODULE_9__["LogoutComponent"], outlet: 'open' }
        ] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { enableTracing: false })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // State for the User. If Authentication State == False, the app reverts back to the landing page
        this.auth.authenticationState.subscribe(function (state) {
            if (state) {
                _this.router.navigate(['dashboard']);
            }
            else {
                _this.router.navigate(['']);
            }
        });
    };
    AppComponent.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_9__["DashboardModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _jobs_jobs_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jobs/jobs.module */ "./src/app/dashboard/jobs/jobs.module.ts");
/* harmony import */ var _students_students_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./students/students.module */ "./src/app/dashboard/students/students.module.ts");






var routes = [
    { path: '', component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _jobs_jobs_module__WEBPACK_IMPORTED_MODULE_4__["JobsModule"],
                _students_students_module__WEBPACK_IMPORTED_MODULE_5__["StudentsModule"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  width: 100%;\n  height: 100vh;\n  border: 1px solid #555;\n}\n\nmat-sidenav {\n  width: 200px;\n}\n\n.active {\n  color: lightcoral;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvQWRtaW4vc3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzU1NTtcbn1cblxubWF0LXNpZGVuYXYge1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5hY3RpdmUge1xuICBjb2xvcjpsaWdodGNvcmFsO1xufVxuIiwiLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1NTU7XG59XG5cbm1hdC1zaWRlbmF2IHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4uYWN0aXZlIHtcbiAgY29sb3I6IGxpZ2h0Y29yYWw7XG59Il19 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/dashboard/logout/logout.component.ts");
/* harmony import */ var _students_students_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./students/students.component */ "./src/app/dashboard/students/students.component.ts");
/* harmony import */ var _mentors_mentors_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mentors/mentors.component */ "./src/app/dashboard/mentors/mentors.component.ts");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./posts/posts.component */ "./src/app/dashboard/posts/posts.component.ts");
/* harmony import */ var _events_events_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./events/events.component */ "./src/app/dashboard/events/events.component.ts");
/* harmony import */ var _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./jobs/jobs.component */ "./src/app/dashboard/jobs/jobs.component.ts");
/* harmony import */ var _jobs_jobs_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./jobs/jobs.module */ "./src/app/dashboard/jobs/jobs.module.ts");
/* harmony import */ var _students_students_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./students/students.module */ "./src/app/dashboard/students/students.module.ts");
/* harmony import */ var _events_events_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./events/events.module */ "./src/app/dashboard/events/events.module.ts");
/* harmony import */ var _mentors_mentors_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./mentors/mentors.module */ "./src/app/dashboard/mentors/mentors.module.ts");
/* harmony import */ var _posts_posts_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./posts/posts.module */ "./src/app/dashboard/posts/posts.module.ts");
/* harmony import */ var _fairs_fairs_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./fairs/fairs.module */ "./src/app/dashboard/fairs/fairs.module.ts");
/* harmony import */ var _fairs_fairs_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./fairs/fairs.component */ "./src/app/dashboard/fairs/fairs.component.ts");



















var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_11__["JobsComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_6__["LogoutComponent"],
                _dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
                _students_students_component__WEBPACK_IMPORTED_MODULE_7__["StudentsComponent"],
                _mentors_mentors_component__WEBPACK_IMPORTED_MODULE_8__["MentorsComponent"],
                _posts_posts_component__WEBPACK_IMPORTED_MODULE_9__["PostsComponent"],
                _events_events_component__WEBPACK_IMPORTED_MODULE_10__["EventsComponent"],
                _fairs_fairs_component__WEBPACK_IMPORTED_MODULE_18__["FairsComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_4__["DashboardRoutingModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                _jobs_jobs_module__WEBPACK_IMPORTED_MODULE_12__["JobsModule"],
                _students_students_module__WEBPACK_IMPORTED_MODULE_13__["StudentsModule"],
                _events_events_module__WEBPACK_IMPORTED_MODULE_14__["EventsModule"],
                _mentors_mentors_module__WEBPACK_IMPORTED_MODULE_15__["MentorsModule"],
                _posts_posts_module__WEBPACK_IMPORTED_MODULE_16__["PostsModule"],
                _fairs_fairs_module__WEBPACK_IMPORTED_MODULE_17__["FairsModule"]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/events/add-event-dialog/add-event-dialog.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/dashboard/events/add-event-dialog/add-event-dialog.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9ldmVudHMvYWRkLWV2ZW50LWRpYWxvZy9hZGQtZXZlbnQtZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/dashboard/events/add-event-dialog/add-event-dialog.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/dashboard/events/add-event-dialog/add-event-dialog.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AddEventDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEventDialogComponent", function() { return AddEventDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/events.service */ "./src/app/services/events.service.ts");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");






var AddEventDialogComponent = /** @class */ (function () {
    function AddEventDialogComponent(events, dialogRef, formBuilder) {
        this.events = events;
        this.dialogRef = dialogRef;
        this.formBuilder = formBuilder;
    }
    AddEventDialogComponent.prototype.ngOnInit = function () {
        this.addEventForm = this.formBuilder.group({
            title: ['Youth Tech Exploration', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            organizer: ['Journi', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            addressOne: ['777 Main', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            addressTwo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            city: ['Detroit', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            state: ['MI', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            zip: ['48202', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            time: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            description: ['description', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            photo: ['photo', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    };
    AddEventDialogComponent.prototype.add = function (event) {
        var _this = this;
        console.log('Adding event...');
        event.datedCreated = Date.now();
        this.events.addEvent(event).subscribe(function (data) {
            _this.events.getEvents().subscribe(function (events) {
                var e_1, _a;
                var eventsArray = Object.values(events);
                try {
                    for (var eventsArray_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](eventsArray), eventsArray_1_1 = eventsArray_1.next(); !eventsArray_1_1.done; eventsArray_1_1 = eventsArray_1.next()) {
                        var event_1 = eventsArray_1_1.value;
                        event_1.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["format"])(new Date(event_1.date), 'MMMM dd, yyyy');
                        event_1.time = Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["format"])(new Date(event_1.date), 'hh:mm a');
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (eventsArray_1_1 && !eventsArray_1_1.done && (_a = eventsArray_1.return)) _a.call(eventsArray_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                _this.events.eventsSubject.next(eventsArray.reverse());
                _this.dialogRef.close();
            });
        });
    };
    AddEventDialogComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    AddEventDialogComponent.ctorParameters = function () { return [
        { type: _services_events_service__WEBPACK_IMPORTED_MODULE_4__["EventsService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
    ]; };
    AddEventDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-event-dialog',
            template: __webpack_require__(/*! raw-loader!./add-event-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/events/add-event-dialog/add-event-dialog.component.html"),
            styles: [__webpack_require__(/*! ./add-event-dialog.component.scss */ "./src/app/dashboard/events/add-event-dialog/add-event-dialog.component.scss")]
        })
    ], AddEventDialogComponent);
    return AddEventDialogComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/events/delete-event-dialog/delete-event-dialog.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/dashboard/events/delete-event-dialog/delete-event-dialog.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9ldmVudHMvZGVsZXRlLWV2ZW50LWRpYWxvZy9kZWxldGUtZXZlbnQtZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/dashboard/events/delete-event-dialog/delete-event-dialog.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/dashboard/events/delete-event-dialog/delete-event-dialog.component.ts ***!
  \***************************************************************************************/
/*! exports provided: DeleteEventDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteEventDialogComponent", function() { return DeleteEventDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/events.service */ "./src/app/services/events.service.ts");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");





var DeleteEventDialogComponent = /** @class */ (function () {
    function DeleteEventDialogComponent(events, dialogRef, data) {
        this.events = events;
        this.dialogRef = dialogRef;
        this.id = data.id;
        this.title = data.title;
        this.organizer = data.organizer;
        this.location = data.location;
        this.date = data.date;
        this.description = data.description;
        this.photo = data.photo;
    }
    DeleteEventDialogComponent.prototype.ngOnInit = function () {
    };
    DeleteEventDialogComponent.prototype.delete = function (id) {
        var _this = this;
        this.events.deleteEvent(id).subscribe(function (data) {
            _this.events.getEvents().subscribe(function (events) {
                var e_1, _a;
                var eventsArray = Object.values(events);
                try {
                    for (var eventsArray_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](eventsArray), eventsArray_1_1 = eventsArray_1.next(); !eventsArray_1_1.done; eventsArray_1_1 = eventsArray_1.next()) {
                        var event_1 = eventsArray_1_1.value;
                        event_1.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(new Date(event_1.date), 'MMMM dd, yyyy');
                        event_1.time = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(new Date(event_1.date), 'hh:mm a');
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (eventsArray_1_1 && !eventsArray_1_1.done && (_a = eventsArray_1.return)) _a.call(eventsArray_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                _this.events.eventsSubject.next(eventsArray.reverse());
                _this.dialogRef.close();
            });
        });
    };
    DeleteEventDialogComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    DeleteEventDialogComponent.ctorParameters = function () { return [
        { type: _services_events_service__WEBPACK_IMPORTED_MODULE_3__["EventsService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    DeleteEventDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-delete-event-dialog',
            template: __webpack_require__(/*! raw-loader!./delete-event-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/events/delete-event-dialog/delete-event-dialog.component.html"),
            styles: [__webpack_require__(/*! ./delete-event-dialog.component.scss */ "./src/app/dashboard/events/delete-event-dialog/delete-event-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
    ], DeleteEventDialogComponent);
    return DeleteEventDialogComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/events/edit-event-dialog/edit-event-dialog.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/dashboard/events/edit-event-dialog/edit-event-dialog.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9ldmVudHMvZWRpdC1ldmVudC1kaWFsb2cvZWRpdC1ldmVudC1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/events/edit-event-dialog/edit-event-dialog.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/dashboard/events/edit-event-dialog/edit-event-dialog.component.ts ***!
  \***********************************************************************************/
/*! exports provided: EditEventDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEventDialogComponent", function() { return EditEventDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/events.service */ "./src/app/services/events.service.ts");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");






var EditEventDialogComponent = /** @class */ (function () {
    function EditEventDialogComponent(events, dialogRef, data, formBuilder) {
        this.events = events;
        this.dialogRef = dialogRef;
        this.formBuilder = formBuilder;
        this.id = data.id;
        this.title = data.title;
        this.organizer = data.organizer;
        this.addressOne = data.addressOne;
        this.addressTwo = data.addressTwo;
        this.city = data.city;
        this.state = data.state;
        this.zip = data.zip;
        this.date = data.date;
        this.time = data.time;
        this.description = data.description;
    }
    EditEventDialogComponent.prototype.ngOnInit = function () {
        this.editEventForm = this.formBuilder.group({
            title: [this.title, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            organizer: [this.organizer, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            addressOne: [this.addressOne, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            addressTwo: [this.addressTwo, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            city: [this.city, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            state: [this.state, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            zip: [this.zip, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            date: [this.date, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            time: [this.time, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            description: [this.description, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    };
    EditEventDialogComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    EditEventDialogComponent.prototype.update = function (event) {
        var _this = this;
        event._id = this.id;
        this.events.updateEvent(event).subscribe(function (data) {
            _this.events.getEvents().subscribe(function (events) {
                var e_1, _a;
                var eventsArray = Object.values(events);
                try {
                    for (var eventsArray_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](eventsArray), eventsArray_1_1 = eventsArray_1.next(); !eventsArray_1_1.done; eventsArray_1_1 = eventsArray_1.next()) {
                        var event_1 = eventsArray_1_1.value;
                        event_1.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["format"])(new Date(event_1.date), 'MMMM dd, yyyy');
                        event_1.time = Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["format"])(new Date(event_1.date), 'hh:mm a');
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (eventsArray_1_1 && !eventsArray_1_1.done && (_a = eventsArray_1.return)) _a.call(eventsArray_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                _this.events.eventsSubject.next(eventsArray.reverse());
            });
        });
        this.dialogRef.close();
    };
    EditEventDialogComponent.ctorParameters = function () { return [
        { type: _services_events_service__WEBPACK_IMPORTED_MODULE_4__["EventsService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
    ]; };
    EditEventDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-event-dialog',
            template: __webpack_require__(/*! raw-loader!./edit-event-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/events/edit-event-dialog/edit-event-dialog.component.html"),
            styles: [__webpack_require__(/*! ./edit-event-dialog.component.scss */ "./src/app/dashboard/events/edit-event-dialog/edit-event-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
    ], EditEventDialogComponent);
    return EditEventDialogComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/events/events-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/dashboard/events/events-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: EventsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsRoutingModule", function() { return EventsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    { path: 'events', loadChildren: function () { return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./events.module */ "./src/app/dashboard/events/events.module.ts")).then(function (m) { return m.EventsModule; }); } }
];
var EventsRoutingModule = /** @class */ (function () {
    function EventsRoutingModule() {
    }
    EventsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], EventsRoutingModule);
    return EventsRoutingModule;
}());



/***/ }),

/***/ "./src/app/dashboard/events/events.component.scss":
/*!********************************************************!*\
  !*** ./src/app/dashboard/events/events.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-grid-tile {\n  justify-content: flex-start !important;\n  align-items: flex-start !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvQWRtaW4vc3JjL2FwcC9kYXNoYm9hcmQvZXZlbnRzL2V2ZW50cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGFzaGJvYXJkL2V2ZW50cy9ldmVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQ0FBQTtFQUNBLGtDQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZXZlbnRzL2V2ZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1ncmlkLXRpbGUge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudCA7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG59XG4iLCJtYXQtZ3JpZC10aWxlIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/dashboard/events/events.component.ts":
/*!******************************************************!*\
  !*** ./src/app/dashboard/events/events.component.ts ***!
  \******************************************************/
/*! exports provided: EventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsComponent", function() { return EventsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/events.service */ "./src/app/services/events.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _events_delete_event_dialog_delete_event_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../events/delete-event-dialog/delete-event-dialog.component */ "./src/app/dashboard/events/delete-event-dialog/delete-event-dialog.component.ts");
/* harmony import */ var _events_add_event_dialog_add_event_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../events/add-event-dialog/add-event-dialog.component */ "./src/app/dashboard/events/add-event-dialog/add-event-dialog.component.ts");
/* harmony import */ var _events_edit_event_dialog_edit_event_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../events/edit-event-dialog/edit-event-dialog.component */ "./src/app/dashboard/events/edit-event-dialog/edit-event-dialog.component.ts");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");








var EventsComponent = /** @class */ (function () {
    function EventsComponent(events, dialog) {
        this.events = events;
        this.dialog = dialog;
        this.allEvents = [];
    }
    EventsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.events.getEvents().subscribe(function (events) {
            var e_1, _a;
            var eventsArray = Object.values(events);
            console.log(eventsArray);
            try {
                for (var eventsArray_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](eventsArray), eventsArray_1_1 = eventsArray_1.next(); !eventsArray_1_1.done; eventsArray_1_1 = eventsArray_1.next()) {
                    var event_1 = eventsArray_1_1.value;
                    event_1.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["format"])(new Date(event_1.date), 'MMMM dd, yyyy');
                    event_1.time = Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["format"])(new Date(event_1.date), 'hh:mm a');
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (eventsArray_1_1 && !eventsArray_1_1.done && (_a = eventsArray_1.return)) _a.call(eventsArray_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            _this.events.eventsSubject.next(eventsArray.reverse());
            // Subscribe to Events Subject in Events Service for Real time update changes
            _this.events.eventsSubject.subscribe(function (data) {
                _this.allEvents = data.reverse();
            });
        });
    };
    EventsComponent.prototype.openDeleteDialog = function (data) {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.data = {
            id: data._id,
            title: data.title,
            organizer: data.organizer,
            addressOne: data.addressOne,
            addressTwo: data.addressTwo,
            city: data.city,
            state: data.state,
            zip: data.zip,
            description: data.description,
            date: data.date,
            time: data.time,
            photo: data.photo
        };
        this.dialog.open(_events_delete_event_dialog_delete_event_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DeleteEventDialogComponent"], dialogConfig);
    };
    EventsComponent.prototype.openAddEventsDialog = function () {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        this.dialog.open(_events_add_event_dialog_add_event_dialog_component__WEBPACK_IMPORTED_MODULE_5__["AddEventDialogComponent"], dialogConfig);
    };
    EventsComponent.prototype.openEditEventDialog = function (data) {
        console.log(data);
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.data = {
            id: data._id,
            title: data.title,
            organizer: data.organizer,
            addressOne: data.addressOne,
            addressTwo: data.addressTwo,
            city: data.city,
            state: data.state,
            zip: data.zip,
            description: data.description,
            date: data.date,
            time: data.time,
            photo: data.photo
        };
        this.dialog.open(_events_edit_event_dialog_edit_event_dialog_component__WEBPACK_IMPORTED_MODULE_6__["EditEventDialogComponent"], dialogConfig);
    };
    EventsComponent.ctorParameters = function () { return [
        { type: _services_events_service__WEBPACK_IMPORTED_MODULE_2__["EventsService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
    ]; };
    EventsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-events',
            template: __webpack_require__(/*! raw-loader!./events.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/events/events.component.html"),
            styles: [__webpack_require__(/*! ./events.component.scss */ "./src/app/dashboard/events/events.component.scss")]
        })
    ], EventsComponent);
    return EventsComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/events/events.module.ts":
/*!***************************************************!*\
  !*** ./src/app/dashboard/events/events.module.ts ***!
  \***************************************************/
/*! exports provided: EventsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsModule", function() { return EventsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _events_add_event_dialog_add_event_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../events/add-event-dialog/add-event-dialog.component */ "./src/app/dashboard/events/add-event-dialog/add-event-dialog.component.ts");
/* harmony import */ var _events_delete_event_dialog_delete_event_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../events/delete-event-dialog/delete-event-dialog.component */ "./src/app/dashboard/events/delete-event-dialog/delete-event-dialog.component.ts");
/* harmony import */ var _events_edit_event_dialog_edit_event_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../events/edit-event-dialog/edit-event-dialog.component */ "./src/app/dashboard/events/edit-event-dialog/edit-event-dialog.component.ts");
/* harmony import */ var _events_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./events-routing.module */ "./src/app/dashboard/events/events-routing.module.ts");









var EventsModule = /** @class */ (function () {
    function EventsModule() {
    }
    EventsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _events_add_event_dialog_add_event_dialog_component__WEBPACK_IMPORTED_MODULE_5__["AddEventDialogComponent"],
                _events_delete_event_dialog_delete_event_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DeleteEventDialogComponent"],
                _events_edit_event_dialog_edit_event_dialog_component__WEBPACK_IMPORTED_MODULE_7__["EditEventDialogComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _events_routing_module__WEBPACK_IMPORTED_MODULE_8__["EventsRoutingModule"]
            ],
            entryComponents: [
                _events_delete_event_dialog_delete_event_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DeleteEventDialogComponent"],
                _events_add_event_dialog_add_event_dialog_component__WEBPACK_IMPORTED_MODULE_5__["AddEventDialogComponent"],
                _events_edit_event_dialog_edit_event_dialog_component__WEBPACK_IMPORTED_MODULE_7__["EditEventDialogComponent"]
            ]
        })
    ], EventsModule);
    return EventsModule;
}());



/***/ }),

/***/ "./src/app/dashboard/fairs/add-fair-dialog/add-fair-dialog.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/dashboard/fairs/add-fair-dialog/add-fair-dialog.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9mYWlycy9hZGQtZmFpci1kaWFsb2cvYWRkLWZhaXItZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/dashboard/fairs/add-fair-dialog/add-fair-dialog.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/dashboard/fairs/add-fair-dialog/add-fair-dialog.component.ts ***!
  \******************************************************************************/
/*! exports provided: AddFairDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFairDialogComponent", function() { return AddFairDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_fairs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/fairs.service */ "./src/app/services/fairs.service.ts");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");






var AddFairDialogComponent = /** @class */ (function () {
    function AddFairDialogComponent(fairs, dialogRef, formBuilder) {
        this.fairs = fairs;
        this.dialogRef = dialogRef;
        this.formBuilder = formBuilder;
    }
    AddFairDialogComponent.prototype.ngOnInit = function () {
        this.addFairForm = this.formBuilder.group({
            title: ['Tech Fair', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            address: ['777 Main', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            city: ['Detroit', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            state: ['MI', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            zip: ['48202', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            summary: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    };
    AddFairDialogComponent.prototype.add = function (fair) {
        var _this = this;
        console.log(fair);
        console.log('Adding fair...');
        fair.datedCreated = Date.now();
        this.fairs.addFair(fair).subscribe(function (data) {
            _this.fairs.getFairs().subscribe(function (fairs) {
                var e_1, _a;
                var fairsArray = Object.values(fairs);
                try {
                    for (var fairsArray_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](fairsArray), fairsArray_1_1 = fairsArray_1.next(); !fairsArray_1_1.done; fairsArray_1_1 = fairsArray_1.next()) {
                        var fair_1 = fairsArray_1_1.value;
                        fair_1.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["format"])(new Date(fair_1.date), 'MMMM dd, yyyy');
                        fair_1.time = Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["format"])(new Date(fair_1.date), 'hh:mm a');
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (fairsArray_1_1 && !fairsArray_1_1.done && (_a = fairsArray_1.return)) _a.call(fairsArray_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                _this.fairs.fairsSubject.next(fairsArray.reverse());
                _this.dialogRef.close();
            });
        });
    };
    AddFairDialogComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    AddFairDialogComponent.ctorParameters = function () { return [
        { type: _services_fairs_service__WEBPACK_IMPORTED_MODULE_4__["FairsService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
    ]; };
    AddFairDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-fair-dialog',
            template: __webpack_require__(/*! raw-loader!./add-fair-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/fairs/add-fair-dialog/add-fair-dialog.component.html"),
            styles: [__webpack_require__(/*! ./add-fair-dialog.component.scss */ "./src/app/dashboard/fairs/add-fair-dialog/add-fair-dialog.component.scss")]
        })
    ], AddFairDialogComponent);
    return AddFairDialogComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/fairs/delete-fair-dialog/delete-fair-dialog.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/dashboard/fairs/delete-fair-dialog/delete-fair-dialog.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9mYWlycy9kZWxldGUtZmFpci1kaWFsb2cvZGVsZXRlLWZhaXItZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/dashboard/fairs/delete-fair-dialog/delete-fair-dialog.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/dashboard/fairs/delete-fair-dialog/delete-fair-dialog.component.ts ***!
  \************************************************************************************/
/*! exports provided: DeleteFairsDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteFairsDialogComponent", function() { return DeleteFairsDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_fairs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/fairs.service */ "./src/app/services/fairs.service.ts");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");





var DeleteFairsDialogComponent = /** @class */ (function () {
    function DeleteFairsDialogComponent(fairs, dialogRef, data) {
        this.fairs = fairs;
        this.dialogRef = dialogRef;
        this.id = data.id;
        this.title = data.title;
        this.date = data.date;
        this.address = data.address;
        this.city = data.city;
        this.state = data.state;
        this.zip = data.zip;
        this.dateCreated = data.dateCreated;
        this.description = data.description;
        this.photo = data.photo;
    }
    DeleteFairsDialogComponent.prototype.ngOnInit = function () {
    };
    DeleteFairsDialogComponent.prototype.delete = function (id) {
        var _this = this;
        this.fairs.deleteFair(id).subscribe(function (data) {
            _this.fairs.getFairs().subscribe(function (fairs) {
                var e_1, _a;
                var fairsArray = Object.values(fairs);
                try {
                    for (var fairsArray_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](fairsArray), fairsArray_1_1 = fairsArray_1.next(); !fairsArray_1_1.done; fairsArray_1_1 = fairsArray_1.next()) {
                        var event_1 = fairsArray_1_1.value;
                        event_1.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(new Date(event_1.date), 'MMMM dd, yyyy');
                        event_1.time = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(new Date(event_1.date), 'hh:mm a');
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (fairsArray_1_1 && !fairsArray_1_1.done && (_a = fairsArray_1.return)) _a.call(fairsArray_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                _this.fairs.fairsSubject.next(fairsArray.reverse());
                _this.dialogRef.close();
            });
        });
    };
    DeleteFairsDialogComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    DeleteFairsDialogComponent.ctorParameters = function () { return [
        { type: _services_fairs_service__WEBPACK_IMPORTED_MODULE_3__["FairsService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    DeleteFairsDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-delete-fair-dialog',
            template: __webpack_require__(/*! raw-loader!./delete-fair-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/fairs/delete-fair-dialog/delete-fair-dialog.component.html"),
            styles: [__webpack_require__(/*! ./delete-fair-dialog.component.scss */ "./src/app/dashboard/fairs/delete-fair-dialog/delete-fair-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
    ], DeleteFairsDialogComponent);
    return DeleteFairsDialogComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/fairs/edit-fair-dialog/edit-fair-dialog.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/dashboard/fairs/edit-fair-dialog/edit-fair-dialog.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9mYWlycy9lZGl0LWZhaXItZGlhbG9nL2VkaXQtZmFpci1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/fairs/edit-fair-dialog/edit-fair-dialog.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/dashboard/fairs/edit-fair-dialog/edit-fair-dialog.component.ts ***!
  \********************************************************************************/
/*! exports provided: EditFairDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditFairDialogComponent", function() { return EditFairDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_fairs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/fairs.service */ "./src/app/services/fairs.service.ts");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");






var EditFairDialogComponent = /** @class */ (function () {
    function EditFairDialogComponent(fairs, dialogRef, data, formBuilder) {
        this.fairs = fairs;
        this.dialogRef = dialogRef;
        this.formBuilder = formBuilder;
        this.id = data.id;
        this.title = data.title;
        this.address = data.address;
        this.city = data.city;
        this.state = data.state;
        this.summary = data.summary;
        this.zip = data.zip;
        this.date = data.date;
        this.dateCreated = data.dateCreated;
        this.time = data.time;
        this.description = data.description;
    }
    EditFairDialogComponent.prototype.ngOnInit = function () {
        this.editFairForm = this.formBuilder.group({
            title: [this.title, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            address: [this.address, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            city: [this.city, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            state: [this.state, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            zip: [this.zip, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            date: [this.date, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            time: [this.time, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            summary: [this.summary, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            description: [this.description, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    };
    EditFairDialogComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    EditFairDialogComponent.prototype.update = function (fair) {
        var _this = this;
        fair._id = this.id;
        this.fairs.updateFair(fair).subscribe(function (data) {
            _this.fairs.getFairs().subscribe(function (fairs) {
                var e_1, _a;
                var fairsArray = Object.values(fairs);
                try {
                    for (var fairsArray_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](fairsArray), fairsArray_1_1 = fairsArray_1.next(); !fairsArray_1_1.done; fairsArray_1_1 = fairsArray_1.next()) {
                        var fair_1 = fairsArray_1_1.value;
                        fair_1.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["format"])(new Date(fair_1.date), 'MMMM dd, yyyy');
                        fair_1.time = Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["format"])(new Date(fair_1.date), 'hh:mm a');
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (fairsArray_1_1 && !fairsArray_1_1.done && (_a = fairsArray_1.return)) _a.call(fairsArray_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                _this.fairs.fairsSubject.next(fairsArray.reverse());
            });
        });
        this.dialogRef.close();
    };
    EditFairDialogComponent.ctorParameters = function () { return [
        { type: _services_fairs_service__WEBPACK_IMPORTED_MODULE_4__["FairsService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
    ]; };
    EditFairDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-fair-dialog',
            template: __webpack_require__(/*! raw-loader!./edit-fair-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/fairs/edit-fair-dialog/edit-fair-dialog.component.html"),
            styles: [__webpack_require__(/*! ./edit-fair-dialog.component.scss */ "./src/app/dashboard/fairs/edit-fair-dialog/edit-fair-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
    ], EditFairDialogComponent);
    return EditFairDialogComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/fairs/fairs-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/dashboard/fairs/fairs-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: FairsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FairsRoutingModule", function() { return FairsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    { path: 'fairs', loadChildren: function () { return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./fairs.module */ "./src/app/dashboard/fairs/fairs.module.ts")).then(function (m) { return m.FairsModule; }); } }
];
var FairsRoutingModule = /** @class */ (function () {
    function FairsRoutingModule() {
    }
    FairsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], FairsRoutingModule);
    return FairsRoutingModule;
}());



/***/ }),

/***/ "./src/app/dashboard/fairs/fairs.component.scss":
/*!******************************************************!*\
  !*** ./src/app/dashboard/fairs/fairs.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span {\n  font-weight: 900;\n  color: #005191;\n}\n\n.flex-container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\nmat-card {\n  margin: 20px;\n}\n\n/* Responsive Styles */\n\n/* Medium size viewport */\n\n@media screen and (max-width: 959px) {\n  .flex-container {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvQWRtaW4vc3JjL2FwcC9kYXNoYm9hcmQvZmFpcnMvZmFpcnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Rhc2hib2FyZC9mYWlycy9mYWlycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQ0FGOztBREdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0FDQUY7O0FER0Esc0JBQUE7O0FBQ0EseUJBQUE7O0FBQ0E7RUFDRTtJQUNFLHNCQUFBO0VDQUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9mYWlycy9mYWlycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGNvbG9yOiAjMDA1MTkxO1xufVxuXG4uZmxleC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5tYXQtY2FyZCB7XG4gIG1hcmdpbjogMjBweDtcbn1cblxuLyogUmVzcG9uc2l2ZSBTdHlsZXMgKi9cbi8qIE1lZGl1bSBzaXplIHZpZXdwb3J0ICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTlweCkge1xuICAuZmxleC1jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn0iLCJzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgY29sb3I6ICMwMDUxOTE7XG59XG5cbi5mbGV4LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbm1hdC1jYXJkIHtcbiAgbWFyZ2luOiAyMHB4O1xufVxuXG4vKiBSZXNwb25zaXZlIFN0eWxlcyAqL1xuLyogTWVkaXVtIHNpemUgdmlld3BvcnQgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XG4gIC5mbGV4LWNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/fairs/fairs.component.ts":
/*!****************************************************!*\
  !*** ./src/app/dashboard/fairs/fairs.component.ts ***!
  \****************************************************/
/*! exports provided: FairsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FairsComponent", function() { return FairsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_fairs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/fairs.service */ "./src/app/services/fairs.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fairs_delete_fair_dialog_delete_fair_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fairs/delete-fair-dialog/delete-fair-dialog.component */ "./src/app/dashboard/fairs/delete-fair-dialog/delete-fair-dialog.component.ts");
/* harmony import */ var _fairs_add_fair_dialog_add_fair_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fairs/add-fair-dialog/add-fair-dialog.component */ "./src/app/dashboard/fairs/add-fair-dialog/add-fair-dialog.component.ts");
/* harmony import */ var _fairs_edit_fair_dialog_edit_fair_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../fairs/edit-fair-dialog/edit-fair-dialog.component */ "./src/app/dashboard/fairs/edit-fair-dialog/edit-fair-dialog.component.ts");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");








var FairsComponent = /** @class */ (function () {
    function FairsComponent(dialog, fairs) {
        this.dialog = dialog;
        this.fairs = fairs;
        this.allFairs = [];
    }
    FairsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fairs.getFairs().subscribe(function (fairs) {
            var e_1, _a;
            var fairsArray = Object.values(fairs);
            console.log(fairsArray);
            try {
                for (var fairsArray_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](fairsArray), fairsArray_1_1 = fairsArray_1.next(); !fairsArray_1_1.done; fairsArray_1_1 = fairsArray_1.next()) {
                    var fair = fairsArray_1_1.value;
                    fair.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["format"])(new Date(fair.date), 'MMMM dd, yyyy');
                    fair.time = Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["format"])(new Date(fair.date), 'hh:mm a');
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (fairsArray_1_1 && !fairsArray_1_1.done && (_a = fairsArray_1.return)) _a.call(fairsArray_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            _this.fairs.fairsSubject.next(fairsArray.reverse());
            // Subscribe to Fairs Subject in Fairs Service for Real time update changes
            _this.fairs.fairsSubject.subscribe(function (data) {
                _this.allFairs = data.reverse();
            });
        });
    };
    FairsComponent.prototype.openDeleteFairsDialog = function (data) {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.data = {
            id: data._id,
            title: data.title,
            organizer: data.organizer,
            addressOne: data.addressOne,
            addressTwo: data.addressTwo,
            city: data.city,
            state: data.state,
            zip: data.zip,
            description: data.description,
            date: data.date,
            time: data.time,
            photo: data.photo
        };
        this.dialog.open(_fairs_delete_fair_dialog_delete_fair_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DeleteFairsDialogComponent"], dialogConfig);
    };
    FairsComponent.prototype.openAddFairsDialog = function () {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        this.dialog.open(_fairs_add_fair_dialog_add_fair_dialog_component__WEBPACK_IMPORTED_MODULE_5__["AddFairDialogComponent"], dialogConfig);
    };
    FairsComponent.prototype.openEditFairDialog = function (data) {
        console.log(data);
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.data = {
            id: data._id,
            title: data.title,
            dateCreated: data.dateCreated,
            address: data.address,
            city: data.city,
            state: data.state,
            zip: data.zip,
            summary: data.summary,
            description: data.description,
            date: data.date,
            time: data.time,
            photo: data.photo
        };
        this.dialog.open(_fairs_edit_fair_dialog_edit_fair_dialog_component__WEBPACK_IMPORTED_MODULE_6__["EditFairDialogComponent"], dialogConfig);
    };
    FairsComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: _services_fairs_service__WEBPACK_IMPORTED_MODULE_2__["FairsService"] }
    ]; };
    FairsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fairs',
            template: __webpack_require__(/*! raw-loader!./fairs.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/fairs/fairs.component.html"),
            styles: [__webpack_require__(/*! ./fairs.component.scss */ "./src/app/dashboard/fairs/fairs.component.scss")]
        })
    ], FairsComponent);
    return FairsComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/fairs/fairs.module.ts":
/*!*************************************************!*\
  !*** ./src/app/dashboard/fairs/fairs.module.ts ***!
  \*************************************************/
/*! exports provided: FairsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FairsModule", function() { return FairsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _add_fair_dialog_add_fair_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-fair-dialog/add-fair-dialog.component */ "./src/app/dashboard/fairs/add-fair-dialog/add-fair-dialog.component.ts");
/* harmony import */ var _delete_fair_dialog_delete_fair_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./delete-fair-dialog/delete-fair-dialog.component */ "./src/app/dashboard/fairs/delete-fair-dialog/delete-fair-dialog.component.ts");
/* harmony import */ var _edit_fair_dialog_edit_fair_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-fair-dialog/edit-fair-dialog.component */ "./src/app/dashboard/fairs/edit-fair-dialog/edit-fair-dialog.component.ts");
/* harmony import */ var _fairs_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fairs-routing.module */ "./src/app/dashboard/fairs/fairs-routing.module.ts");









var FairsModule = /** @class */ (function () {
    function FairsModule() {
    }
    FairsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _add_fair_dialog_add_fair_dialog_component__WEBPACK_IMPORTED_MODULE_5__["AddFairDialogComponent"],
                _delete_fair_dialog_delete_fair_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DeleteFairsDialogComponent"],
                _edit_fair_dialog_edit_fair_dialog_component__WEBPACK_IMPORTED_MODULE_7__["EditFairDialogComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                _fairs_routing_module__WEBPACK_IMPORTED_MODULE_8__["FairsRoutingModule"]
            ],
            entryComponents: [
                _add_fair_dialog_add_fair_dialog_component__WEBPACK_IMPORTED_MODULE_5__["AddFairDialogComponent"],
                _delete_fair_dialog_delete_fair_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DeleteFairsDialogComponent"],
                _edit_fair_dialog_edit_fair_dialog_component__WEBPACK_IMPORTED_MODULE_7__["EditFairDialogComponent"]
            ]
        })
    ], FairsModule);
    return FairsModule;
}());



/***/ }),

/***/ "./src/app/dashboard/jobs/add-job-dialog/add-job-dialog.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/jobs/add-job-dialog/add-job-dialog.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvQWRtaW4vc3JjL2FwcC9kYXNoYm9hcmQvam9icy9hZGQtam9iLWRpYWxvZy9hZGQtam9iLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGFzaGJvYXJkL2pvYnMvYWRkLWpvYi1kaWFsb2cvYWRkLWpvYi1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2pvYnMvYWRkLWpvYi1kaWFsb2cvYWRkLWpvYi1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4iLCJidXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/dashboard/jobs/add-job-dialog/add-job-dialog.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/dashboard/jobs/add-job-dialog/add-job-dialog.component.ts ***!
  \***************************************************************************/
/*! exports provided: AddJobDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddJobDialogComponent", function() { return AddJobDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_jobs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/jobs.service */ "./src/app/services/jobs.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var AddJobDialogComponent = /** @class */ (function () {
    function AddJobDialogComponent(jobs, dialogRef, formBuilder) {
        this.jobs = jobs;
        this.dialogRef = dialogRef;
        this.formBuilder = formBuilder;
    }
    AddJobDialogComponent.prototype.ngOnInit = function () {
        this.addJobForm = this.formBuilder.group({
            title: ['this is a title', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            companyName: ['company name', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            companyEmail: ['eddie@gmail.com', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            summary: ['this is a summary', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            fullJobDescription: ['this is a full description of the job', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            rateOfPay: ['10', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    };
    AddJobDialogComponent.prototype.add = function (job) {
        var _this = this;
        console.log('Adding job...');
        job['datedCreated'] = Date.now();
        this.jobs.addJob(job).subscribe(function (data) {
            _this.jobs.getJobs().subscribe(function (data) {
                var jobsArray = Object.values(data);
                _this.jobs.jobsSubject.next(jobsArray);
            });
        });
        this.dialogRef.close();
    };
    AddJobDialogComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    AddJobDialogComponent.ctorParameters = function () { return [
        { type: _services_jobs_service__WEBPACK_IMPORTED_MODULE_2__["JobsService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
    ]; };
    AddJobDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-job-dialog',
            template: __webpack_require__(/*! raw-loader!./add-job-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/jobs/add-job-dialog/add-job-dialog.component.html"),
            styles: [__webpack_require__(/*! ./add-job-dialog.component.scss */ "./src/app/dashboard/jobs/add-job-dialog/add-job-dialog.component.scss")]
        })
    ], AddJobDialogComponent);
    return AddJobDialogComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/jobs/delete-dialog/delete-dialog.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/dashboard/jobs/delete-dialog/delete-dialog.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvQWRtaW4vc3JjL2FwcC9kYXNoYm9hcmQvam9icy9kZWxldGUtZGlhbG9nL2RlbGV0ZS1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Rhc2hib2FyZC9qb2JzL2RlbGV0ZS1kaWFsb2cvZGVsZXRlLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvam9icy9kZWxldGUtZGlhbG9nL2RlbGV0ZS1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4iLCJidXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/dashboard/jobs/delete-dialog/delete-dialog.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/jobs/delete-dialog/delete-dialog.component.ts ***!
  \*************************************************************************/
/*! exports provided: DeleteDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteDialogComponent", function() { return DeleteDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_jobs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/jobs.service */ "./src/app/services/jobs.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var DeleteDialogComponent = /** @class */ (function () {
    function DeleteDialogComponent(jobs, dialogRef, data) {
        this.jobs = jobs;
        this.dialogRef = dialogRef;
        this.title = data.title;
        this.id = data.id;
        this.companyName = data.companyName;
        this.companyEmail = data.companyEmail;
        this.summary = data.summary;
        this.fullJobDescription = data.fullJobDescription;
        this.rateOfPay = data.rateOfPay;
    }
    DeleteDialogComponent.prototype.ngOnInit = function () {
    };
    DeleteDialogComponent.prototype.delete = function (id) {
        var _this = this;
        this.jobs.deleteJob(id).subscribe(function (data) {
            _this.jobs.getJobs().subscribe(function (data) {
                var jobsArray = Object.values(data);
                _this.jobs.jobsSubject.next(jobsArray);
            });
        });
        this.dialogRef.close();
    };
    DeleteDialogComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    DeleteDialogComponent.ctorParameters = function () { return [
        { type: _services_jobs_service__WEBPACK_IMPORTED_MODULE_2__["JobsService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] }
    ]; };
    DeleteDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dialog',
            template: __webpack_require__(/*! raw-loader!./delete-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/jobs/delete-dialog/delete-dialog.component.html"),
            styles: [__webpack_require__(/*! ./delete-dialog.component.scss */ "./src/app/dashboard/jobs/delete-dialog/delete-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
    ], DeleteDialogComponent);
    return DeleteDialogComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/jobs/edit-job-dialog/edit-job-dialog.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard/jobs/edit-job-dialog/edit-job-dialog.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9qb2JzL2VkaXQtam9iLWRpYWxvZy9lZGl0LWpvYi1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/jobs/edit-job-dialog/edit-job-dialog.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/jobs/edit-job-dialog/edit-job-dialog.component.ts ***!
  \*****************************************************************************/
/*! exports provided: EditJobDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditJobDialogComponent", function() { return EditJobDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_jobs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/jobs.service */ "./src/app/services/jobs.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var EditJobDialogComponent = /** @class */ (function () {
    function EditJobDialogComponent(jobs, dialogRef, data, formBuilder) {
        this.jobs = jobs;
        this.dialogRef = dialogRef;
        this.formBuilder = formBuilder;
        this.id = data.id;
        this.title = data.title;
        this.companyName = data.companyName;
        this.companyEmail = data.companyEmail;
        this.summary = data.summary;
        this.fullJobDescription = data.fullJobDescription;
        this.rateOfPay = data.rateOfPay;
    }
    EditJobDialogComponent.prototype.ngOnInit = function () {
        this.editJobForm = this.formBuilder.group({
            title: [this.title, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            companyName: [this.companyName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            companyEmail: [this.companyEmail, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            summary: [this.summary, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            fullJobDescription: [this.fullJobDescription, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            rateOfPay: [this.rateOfPay, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    };
    EditJobDialogComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    EditJobDialogComponent.prototype.update = function (job) {
        var _this = this;
        job._id = this.id;
        this.jobs.updateJob(job).subscribe(function (data) {
            _this.jobs.getJobs().subscribe(function (data) {
                var jobsArray = Object.values(data);
                _this.jobs.jobsSubject.next(jobsArray);
            });
        });
        this.dialogRef.close();
    };
    EditJobDialogComponent.ctorParameters = function () { return [
        { type: _services_jobs_service__WEBPACK_IMPORTED_MODULE_2__["JobsService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
    ]; };
    EditJobDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-job-dialog',
            template: __webpack_require__(/*! raw-loader!./edit-job-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/jobs/edit-job-dialog/edit-job-dialog.component.html"),
            styles: [__webpack_require__(/*! ./edit-job-dialog.component.scss */ "./src/app/dashboard/jobs/edit-job-dialog/edit-job-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
    ], EditJobDialogComponent);
    return EditJobDialogComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/jobs/jobs-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/jobs/jobs-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: JobRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobRoutingModule", function() { return JobRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var JobRoutingModule = /** @class */ (function () {
    function JobRoutingModule() {
    }
    JobRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], JobRoutingModule);
    return JobRoutingModule;
}());



/***/ }),

/***/ "./src/app/dashboard/jobs/jobs.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/jobs/jobs.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9qb2JzL2pvYnMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/jobs/jobs.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/jobs/jobs.component.ts ***!
  \**************************************************/
/*! exports provided: JobsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsComponent", function() { return JobsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_jobs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/jobs.service */ "./src/app/services/jobs.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _jobs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../jobs/delete-dialog/delete-dialog.component */ "./src/app/dashboard/jobs/delete-dialog/delete-dialog.component.ts");
/* harmony import */ var _jobs_add_job_dialog_add_job_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../jobs/add-job-dialog/add-job-dialog.component */ "./src/app/dashboard/jobs/add-job-dialog/add-job-dialog.component.ts");
/* harmony import */ var _jobs_edit_job_dialog_edit_job_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../jobs/edit-job-dialog/edit-job-dialog.component */ "./src/app/dashboard/jobs/edit-job-dialog/edit-job-dialog.component.ts");







var JobsComponent = /** @class */ (function () {
    function JobsComponent(jobs, dialog) {
        this.jobs = jobs;
        this.dialog = dialog;
        this.allJobs = [];
    }
    JobsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jobs.getJobs().subscribe(function (jobs) {
            var jobsArray = Object.values(jobs);
            _this.jobs.jobsSubject.next(jobsArray);
            // Subscribe to Jobs Subject in Jobs Service for Real time updates
            _this.jobs.jobsSubject.subscribe(function (data) {
                _this.allJobs = data;
                console.log(_this.allJobs);
            });
        });
    };
    JobsComponent.prototype.openDeleteDialog = function (data) {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.data = {
            id: data._id,
            title: data.title,
            companyName: data.companyName,
            companyEmail: data.companyEmail,
            summary: data.summary,
            fullJobDescription: data.fullJobDescription,
            rateOfPay: data.rateOfPay
        };
        this.dialog.open(_jobs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DeleteDialogComponent"], dialogConfig);
    };
    JobsComponent.prototype.openAddJobDialog = function () {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        this.dialog.open(_jobs_add_job_dialog_add_job_dialog_component__WEBPACK_IMPORTED_MODULE_5__["AddJobDialogComponent"], dialogConfig);
    };
    JobsComponent.prototype.openEditDialog = function (data) {
        console.log(data);
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.data = {
            id: data._id,
            title: data.title,
            companyName: data.companyName,
            companyEmail: data.companyEmail,
            summary: data.summary,
            fullJobDescription: data.fullJobDescription,
            rateOfPay: data.rateOfPay,
        };
        this.dialog.open(_jobs_edit_job_dialog_edit_job_dialog_component__WEBPACK_IMPORTED_MODULE_6__["EditJobDialogComponent"], dialogConfig);
    };
    JobsComponent.ctorParameters = function () { return [
        { type: _services_jobs_service__WEBPACK_IMPORTED_MODULE_2__["JobsService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
    ]; };
    JobsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-jobs',
            template: __webpack_require__(/*! raw-loader!./jobs.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/jobs/jobs.component.html"),
            styles: [__webpack_require__(/*! ./jobs.component.scss */ "./src/app/dashboard/jobs/jobs.component.scss")]
        })
    ], JobsComponent);
    return JobsComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/jobs/jobs.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/jobs/jobs.module.ts ***!
  \***********************************************/
/*! exports provided: JobsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsModule", function() { return JobsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _jobs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../jobs/delete-dialog/delete-dialog.component */ "./src/app/dashboard/jobs/delete-dialog/delete-dialog.component.ts");
/* harmony import */ var _jobs_add_job_dialog_add_job_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../jobs/add-job-dialog/add-job-dialog.component */ "./src/app/dashboard/jobs/add-job-dialog/add-job-dialog.component.ts");
/* harmony import */ var _jobs_edit_job_dialog_edit_job_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../jobs/edit-job-dialog/edit-job-dialog.component */ "./src/app/dashboard/jobs/edit-job-dialog/edit-job-dialog.component.ts");
/* harmony import */ var _jobs_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./jobs-routing.module */ "./src/app/dashboard/jobs/jobs-routing.module.ts");









var JobsModule = /** @class */ (function () {
    function JobsModule() {
    }
    JobsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _jobs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DeleteDialogComponent"],
                _jobs_add_job_dialog_add_job_dialog_component__WEBPACK_IMPORTED_MODULE_6__["AddJobDialogComponent"],
                _jobs_edit_job_dialog_edit_job_dialog_component__WEBPACK_IMPORTED_MODULE_7__["EditJobDialogComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _jobs_routing_module__WEBPACK_IMPORTED_MODULE_8__["JobRoutingModule"]
            ],
            entryComponents: [
                _jobs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DeleteDialogComponent"],
                _jobs_add_job_dialog_add_job_dialog_component__WEBPACK_IMPORTED_MODULE_6__["AddJobDialogComponent"],
                _jobs_edit_job_dialog_edit_job_dialog_component__WEBPACK_IMPORTED_MODULE_7__["EditJobDialogComponent"]
            ]
        })
    ], JobsModule);
    return JobsModule;
}());



/***/ }),

/***/ "./src/app/dashboard/logout/logout.component.scss":
/*!********************************************************!*\
  !*** ./src/app/dashboard/logout/logout.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  position: relative;\n  top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvQWRtaW4vc3JjL2FwcC9kYXNoYm9hcmQvbG9nb3V0L2xvZ291dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGFzaGJvYXJkL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9sb2dvdXQvbG9nb3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDIwcHg7XG59XG4iLCJidXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/logout/logout.component.ts":
/*!******************************************************!*\
  !*** ./src/app/dashboard/logout/logout.component.ts ***!
  \******************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");



var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(auth) {
        this.auth = auth;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        console.log('Are you sure you want to log out?');
    };
    LogoutComponent.prototype.logout = function () {
        this.auth.logout();
    };
    LogoutComponent.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! raw-loader!./logout.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.scss */ "./src/app/dashboard/logout/logout.component.scss")]
        })
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/mentors/add-mentor-dialog/add-mentor-dialog.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/dashboard/mentors/add-mentor-dialog/add-mentor-dialog.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9tZW50b3JzL2FkZC1tZW50b3ItZGlhbG9nL2FkZC1tZW50b3ItZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/dashboard/mentors/add-mentor-dialog/add-mentor-dialog.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/dashboard/mentors/add-mentor-dialog/add-mentor-dialog.component.ts ***!
  \************************************************************************************/
/*! exports provided: AddMentorDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMentorDialogComponent", function() { return AddMentorDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_mentors_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/mentors.service */ "./src/app/services/mentors.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var AddMentorDialogComponent = /** @class */ (function () {
    function AddMentorDialogComponent(mentors, dialogRef, formBuilder) {
        this.mentors = mentors;
        this.dialogRef = dialogRef;
        this.formBuilder = formBuilder;
    }
    AddMentorDialogComponent.prototype.ngOnInit = function () {
        this.addMentorForm = this.formBuilder.group({
            name: ['Eddie', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            email: ['eddie@gmail.com', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            address: ['12344 LOL', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            city: ['Detroit', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            state: ['MI', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            zip: ['48228', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            phone: ['732237792', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            title: ['Web Dev', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            description: ['LOLOLOLOLOLOLOLO', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            photo: ['No photo', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    };
    AddMentorDialogComponent.prototype.add = function (mentor) {
        var _this = this;
        console.log('Adding mentor...');
        this.mentors.addMentor(mentor).subscribe(function (data) {
            _this.mentors.getMentors().subscribe(function (data) {
                var mentorsArray = Object.values(data);
                _this.mentors.mentorsSubject.next(mentorsArray);
            });
        });
        this.dialogRef.close();
    };
    AddMentorDialogComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    AddMentorDialogComponent.ctorParameters = function () { return [
        { type: _services_mentors_service__WEBPACK_IMPORTED_MODULE_2__["MentorsService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
    ]; };
    AddMentorDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-mentor-dialog',
            template: __webpack_require__(/*! raw-loader!./add-mentor-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/mentors/add-mentor-dialog/add-mentor-dialog.component.html"),
            styles: [__webpack_require__(/*! ./add-mentor-dialog.component.scss */ "./src/app/dashboard/mentors/add-mentor-dialog/add-mentor-dialog.component.scss")]
        })
    ], AddMentorDialogComponent);
    return AddMentorDialogComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/mentors/delete-mentor-dialog/delete-mentor-dialog.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/dashboard/mentors/delete-mentor-dialog/delete-mentor-dialog.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9tZW50b3JzL2RlbGV0ZS1tZW50b3ItZGlhbG9nL2RlbGV0ZS1tZW50b3ItZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/dashboard/mentors/delete-mentor-dialog/delete-mentor-dialog.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/dashboard/mentors/delete-mentor-dialog/delete-mentor-dialog.component.ts ***!
  \******************************************************************************************/
/*! exports provided: DeleteMentorDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteMentorDialogComponent", function() { return DeleteMentorDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_mentors_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/mentors.service */ "./src/app/services/mentors.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var DeleteMentorDialogComponent = /** @class */ (function () {
    function DeleteMentorDialogComponent(mentors, dialogRef, data) {
        this.mentors = mentors;
        this.dialogRef = dialogRef;
        this.id = data.id;
        this.name = data.name;
        this.email = data.email;
        this.address = data.address;
        this.city = data.city;
        this.state = data.state;
        this.zip = data.zip;
        this.phone = data.phone;
        this.title = data.title;
        this.description = data.description;
        this.photo = data.photo;
    }
    DeleteMentorDialogComponent.prototype.ngOnInit = function () {
    };
    DeleteMentorDialogComponent.prototype.delete = function (id) {
        var _this = this;
        this.mentors.deleteMentor(id).subscribe(function (data) {
            _this.mentors.getMentors().subscribe(function (data) {
                var mentorsArray = Object.values(data);
                _this.mentors.mentorsSubject.next(mentorsArray);
            });
        });
        this.dialogRef.close();
    };
    DeleteMentorDialogComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    DeleteMentorDialogComponent.ctorParameters = function () { return [
        { type: _services_mentors_service__WEBPACK_IMPORTED_MODULE_2__["MentorsService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] }
    ]; };
    DeleteMentorDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-delete-mentor-dialog',
            template: __webpack_require__(/*! raw-loader!./delete-mentor-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/mentors/delete-mentor-dialog/delete-mentor-dialog.component.html"),
            styles: [__webpack_require__(/*! ./delete-mentor-dialog.component.scss */ "./src/app/dashboard/mentors/delete-mentor-dialog/delete-mentor-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
    ], DeleteMentorDialogComponent);
    return DeleteMentorDialogComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/mentors/edit-mentor-dialog/edit-mentor-dialog.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/dashboard/mentors/edit-mentor-dialog/edit-mentor-dialog.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9tZW50b3JzL2VkaXQtbWVudG9yLWRpYWxvZy9lZGl0LW1lbnRvci1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/mentors/edit-mentor-dialog/edit-mentor-dialog.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/dashboard/mentors/edit-mentor-dialog/edit-mentor-dialog.component.ts ***!
  \**************************************************************************************/
/*! exports provided: EditMentorDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditMentorDialogComponent", function() { return EditMentorDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_mentors_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/mentors.service */ "./src/app/services/mentors.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var EditMentorDialogComponent = /** @class */ (function () {
    function EditMentorDialogComponent(mentors, dialogRef, data, formBuilder) {
        this.mentors = mentors;
        this.dialogRef = dialogRef;
        this.formBuilder = formBuilder;
        this.id = data.id;
        this.name = data.name;
        this.email = data.email;
        this.address = data.address;
        this.city = data.city;
        this.state = data.state;
        this.zip = data.zip;
        this.phone = data.phone;
        this.title = data.title;
        this.description = data.description;
        this.photo = data.photo;
    }
    EditMentorDialogComponent.prototype.ngOnInit = function () {
        this.editMentorForm = this.formBuilder.group({
            name: ['Eddie', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            email: ['eddie@gmail.com', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            address: ['12344 LOL', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            city: ['Detroit', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            state: ['MI', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            zip: ['48228', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            phone: ['732237792', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            title: ['Web Dev', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            description: ['LOLOLOLOLOLOLOLO', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            photo: ['No photo', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    };
    EditMentorDialogComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    EditMentorDialogComponent.prototype.update = function (mentor) {
        var _this = this;
        mentor._id = this.id;
        this.mentors.updateMentor(mentor).subscribe(function (data) {
            _this.mentors.getMentors().subscribe(function (data) {
                var mentorsArray = Object.values(data);
                _this.mentors.mentorsSubject.next(mentorsArray);
            });
        });
        this.dialogRef.close();
    };
    EditMentorDialogComponent.ctorParameters = function () { return [
        { type: _services_mentors_service__WEBPACK_IMPORTED_MODULE_2__["MentorsService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
    ]; };
    EditMentorDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-mentor-dialog',
            template: __webpack_require__(/*! raw-loader!./edit-mentor-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/mentors/edit-mentor-dialog/edit-mentor-dialog.component.html"),
            styles: [__webpack_require__(/*! ./edit-mentor-dialog.component.scss */ "./src/app/dashboard/mentors/edit-mentor-dialog/edit-mentor-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
    ], EditMentorDialogComponent);
    return EditMentorDialogComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/mentors/mentors-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/dashboard/mentors/mentors-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: MentorsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MentorsRoutingModule", function() { return MentorsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    { path: 'mentors', loadChildren: function () { return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./mentors.module */ "./src/app/dashboard/mentors/mentors.module.ts")).then(function (m) { return m.MentorsModule; }); } }
];
var MentorsRoutingModule = /** @class */ (function () {
    function MentorsRoutingModule() {
    }
    MentorsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], MentorsRoutingModule);
    return MentorsRoutingModule;
}());



/***/ }),

/***/ "./src/app/dashboard/mentors/mentors.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/mentors/mentors.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9tZW50b3JzL21lbnRvcnMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/mentors/mentors.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/mentors/mentors.component.ts ***!
  \********************************************************/
/*! exports provided: MentorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MentorsComponent", function() { return MentorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_mentors_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/mentors.service */ "./src/app/services/mentors.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _mentors_delete_mentor_dialog_delete_mentor_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mentors/delete-mentor-dialog/delete-mentor-dialog.component */ "./src/app/dashboard/mentors/delete-mentor-dialog/delete-mentor-dialog.component.ts");
/* harmony import */ var _mentors_add_mentor_dialog_add_mentor_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mentors/add-mentor-dialog/add-mentor-dialog.component */ "./src/app/dashboard/mentors/add-mentor-dialog/add-mentor-dialog.component.ts");
/* harmony import */ var _mentors_edit_mentor_dialog_edit_mentor_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../mentors/edit-mentor-dialog/edit-mentor-dialog.component */ "./src/app/dashboard/mentors/edit-mentor-dialog/edit-mentor-dialog.component.ts");







var MentorsComponent = /** @class */ (function () {
    function MentorsComponent(mentors, dialog) {
        this.mentors = mentors;
        this.dialog = dialog;
        this.allMentors = [];
    }
    MentorsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mentors.getMentors().subscribe(function (mentors) {
            var mentorsArray = Object.values(mentors);
            _this.mentors.mentorsSubject.next(mentorsArray);
            // Subscribe to Jobs Subject in Jobs Service for Real time update changes
            _this.mentors.mentorsSubject.subscribe(function (data) {
                _this.allMentors = data;
                console.log(_this.allMentors);
            });
        });
    };
    MentorsComponent.prototype.openDeleteDialog = function (data) {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.data = {
            id: data._id,
            name: data.name,
            email: data.email,
            address: data.address,
            city: data.city,
            state: data.state,
            zip: data.zip,
            phone: data.phone,
            title: data.title,
            description: data.description,
            photo: data.photo
        };
        this.dialog.open(_mentors_delete_mentor_dialog_delete_mentor_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DeleteMentorDialogComponent"], dialogConfig);
    };
    MentorsComponent.prototype.openAddMentorDialog = function () {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        this.dialog.open(_mentors_add_mentor_dialog_add_mentor_dialog_component__WEBPACK_IMPORTED_MODULE_5__["AddMentorDialogComponent"], dialogConfig);
    };
    MentorsComponent.prototype.openEditMentorDialog = function (data) {
        console.log(data);
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.data = {
            id: data._id,
            name: data.name,
            email: data.email,
            address: data.address,
            city: data.city,
            state: data.state,
            zip: data.zip,
            phone: data.phone,
            title: data.title,
            description: data.description,
            photo: data.photo
        };
        this.dialog.open(_mentors_edit_mentor_dialog_edit_mentor_dialog_component__WEBPACK_IMPORTED_MODULE_6__["EditMentorDialogComponent"], dialogConfig);
    };
    MentorsComponent.ctorParameters = function () { return [
        { type: _services_mentors_service__WEBPACK_IMPORTED_MODULE_2__["MentorsService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
    ]; };
    MentorsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mentors',
            template: __webpack_require__(/*! raw-loader!./mentors.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/mentors/mentors.component.html"),
            styles: [__webpack_require__(/*! ./mentors.component.scss */ "./src/app/dashboard/mentors/mentors.component.scss")]
        })
    ], MentorsComponent);
    return MentorsComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/mentors/mentors.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/dashboard/mentors/mentors.module.ts ***!
  \*****************************************************/
/*! exports provided: MentorsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MentorsModule", function() { return MentorsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _mentors_edit_mentor_dialog_edit_mentor_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mentors/edit-mentor-dialog/edit-mentor-dialog.component */ "./src/app/dashboard/mentors/edit-mentor-dialog/edit-mentor-dialog.component.ts");
/* harmony import */ var _mentors_add_mentor_dialog_add_mentor_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../mentors/add-mentor-dialog/add-mentor-dialog.component */ "./src/app/dashboard/mentors/add-mentor-dialog/add-mentor-dialog.component.ts");
/* harmony import */ var _mentors_delete_mentor_dialog_delete_mentor_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../mentors/delete-mentor-dialog/delete-mentor-dialog.component */ "./src/app/dashboard/mentors/delete-mentor-dialog/delete-mentor-dialog.component.ts");
/* harmony import */ var _mentors_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mentors-routing.module */ "./src/app/dashboard/mentors/mentors-routing.module.ts");









var MentorsModule = /** @class */ (function () {
    function MentorsModule() {
    }
    MentorsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _mentors_edit_mentor_dialog_edit_mentor_dialog_component__WEBPACK_IMPORTED_MODULE_5__["EditMentorDialogComponent"],
                _mentors_add_mentor_dialog_add_mentor_dialog_component__WEBPACK_IMPORTED_MODULE_6__["AddMentorDialogComponent"],
                _mentors_delete_mentor_dialog_delete_mentor_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DeleteMentorDialogComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _mentors_routing_module__WEBPACK_IMPORTED_MODULE_8__["MentorsRoutingModule"]
            ],
            entryComponents: [
                _mentors_delete_mentor_dialog_delete_mentor_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DeleteMentorDialogComponent"],
                _mentors_add_mentor_dialog_add_mentor_dialog_component__WEBPACK_IMPORTED_MODULE_6__["AddMentorDialogComponent"],
                _mentors_edit_mentor_dialog_edit_mentor_dialog_component__WEBPACK_IMPORTED_MODULE_5__["EditMentorDialogComponent"]
            ]
        })
    ], MentorsModule);
    return MentorsModule;
}());



/***/ }),

/***/ "./src/app/dashboard/posts/comments-dialog/comments-dialog.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/dashboard/posts/comments-dialog/comments-dialog.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-dialog-title {\n  position: fixed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvQWRtaW4vc3JjL2FwcC9kYXNoYm9hcmQvcG9zdHMvY29tbWVudHMtZGlhbG9nL2NvbW1lbnRzLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGFzaGJvYXJkL3Bvc3RzL2NvbW1lbnRzLWRpYWxvZy9jb21tZW50cy1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvcG9zdHMvY29tbWVudHMtZGlhbG9nL2NvbW1lbnRzLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1kaWFsb2ctdGl0bGUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG4iLCJtYXQtZGlhbG9nLXRpdGxlIHtcbiAgcG9zaXRpb246IGZpeGVkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/posts/comments-dialog/comments-dialog.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/dashboard/posts/comments-dialog/comments-dialog.component.ts ***!
  \******************************************************************************/
/*! exports provided: CommentsDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsDialogComponent", function() { return CommentsDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/posts.service */ "./src/app/services/posts.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _delete_comment_dialog_delete_comment_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../delete-comment-dialog/delete-comment-dialog.component */ "./src/app/dashboard/posts/delete-comment-dialog/delete-comment-dialog.component.ts");






var CommentsDialogComponent = /** @class */ (function () {
    function CommentsDialogComponent(posts, dialog, dialogRef, data) {
        this.posts = posts;
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.id = data.id,
            this.comments = data.comments;
    }
    CommentsDialogComponent.prototype.ngOnInit = function () {
        console.log(this.comments);
    };
    CommentsDialogComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    CommentsDialogComponent.prototype.openDeleteCommentDialog = function (data) {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.width = '800px';
        dialogConfig.height = '400px';
        dialogConfig.autoFocus = false;
        dialogConfig.data = {
            postID: this.id,
            commentID: data._id,
            userFullName: data.userFullName,
            userEmail: data.userEmail,
            comment: data.comment,
            likes: data.likes,
        };
        this.dialog.open(_delete_comment_dialog_delete_comment_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DeleteCommentDialogComponent"], dialogConfig);
    };
    CommentsDialogComponent.ctorParameters = function () { return [
        { type: _services_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] }
    ]; };
    CommentsDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-comments-dialog',
            template: __webpack_require__(/*! raw-loader!./comments-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/posts/comments-dialog/comments-dialog.component.html"),
            styles: [__webpack_require__(/*! ./comments-dialog.component.scss */ "./src/app/dashboard/posts/comments-dialog/comments-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
    ], CommentsDialogComponent);
    return CommentsDialogComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/posts/delete-comment-dialog/delete-comment-dialog.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/dashboard/posts/delete-comment-dialog/delete-comment-dialog.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9wb3N0cy9kZWxldGUtY29tbWVudC1kaWFsb2cvZGVsZXRlLWNvbW1lbnQtZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/dashboard/posts/delete-comment-dialog/delete-comment-dialog.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/dashboard/posts/delete-comment-dialog/delete-comment-dialog.component.ts ***!
  \******************************************************************************************/
/*! exports provided: DeleteCommentDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteCommentDialogComponent", function() { return DeleteCommentDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/posts.service */ "./src/app/services/posts.service.ts");




var DeleteCommentDialogComponent = /** @class */ (function () {
    function DeleteCommentDialogComponent(posts, dialogRef, commentsDialogRef, data) {
        this.posts = posts;
        this.dialogRef = dialogRef;
        this.commentsDialogRef = commentsDialogRef;
        this.postID = data.postID;
        this.commentID = data.commentID;
        this.userFullName = data.userFullName;
        this.userEmail = data.userEmail;
        this.comment = data.comment;
        this.likes = data.likes;
    }
    DeleteCommentDialogComponent.prototype.ngOnInit = function () {
    };
    DeleteCommentDialogComponent.prototype.delete = function () {
        var _this = this;
        this.posts.deleteComment(this.postID, this.commentID).subscribe(function (data) {
            _this.posts.getPosts().subscribe(function (data) {
                var postsArray = Object.values(data);
                _this.posts.posts$.next(postsArray);
            });
        });
        this.dialogRef.close();
        this.commentsDialogRef.close();
    };
    DeleteCommentDialogComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    DeleteCommentDialogComponent.ctorParameters = function () { return [
        { type: _services_posts_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    DeleteCommentDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-delete-comment-dialog',
            template: __webpack_require__(/*! raw-loader!./delete-comment-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/posts/delete-comment-dialog/delete-comment-dialog.component.html"),
            styles: [__webpack_require__(/*! ./delete-comment-dialog.component.scss */ "./src/app/dashboard/posts/delete-comment-dialog/delete-comment-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
    ], DeleteCommentDialogComponent);
    return DeleteCommentDialogComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/posts/delete-post-dialog/delete-post-dialog.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/dashboard/posts/delete-post-dialog/delete-post-dialog.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9wb3N0cy9kZWxldGUtcG9zdC1kaWFsb2cvZGVsZXRlLXBvc3QtZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/dashboard/posts/delete-post-dialog/delete-post-dialog.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/dashboard/posts/delete-post-dialog/delete-post-dialog.component.ts ***!
  \************************************************************************************/
/*! exports provided: DeletePostDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeletePostDialogComponent", function() { return DeletePostDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/posts.service */ "./src/app/services/posts.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var DeletePostDialogComponent = /** @class */ (function () {
    function DeletePostDialogComponent(posts, dialogRef, data) {
        this.posts = posts;
        this.dialogRef = dialogRef;
        this.id = data.id;
        this.post = data.post;
        this.creatorName = data.creatorName;
        this.creatorEmail = data.creatorEmail;
    }
    DeletePostDialogComponent.prototype.ngOnInit = function () {
    };
    DeletePostDialogComponent.prototype.delete = function (id) {
        var _this = this;
        console.log(id);
        this.posts.deletePost(id).subscribe(function (data) {
            _this.posts.getPosts().subscribe(function (data) {
                var postsArray = Object.values(data);
                _this.posts.posts$.next(postsArray);
            });
        });
        this.dialogRef.close();
    };
    DeletePostDialogComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    DeletePostDialogComponent.ctorParameters = function () { return [
        { type: _services_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] }
    ]; };
    DeletePostDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-delete-post-dialog',
            template: __webpack_require__(/*! raw-loader!./delete-post-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/posts/delete-post-dialog/delete-post-dialog.component.html"),
            styles: [__webpack_require__(/*! ./delete-post-dialog.component.scss */ "./src/app/dashboard/posts/delete-post-dialog/delete-post-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
    ], DeletePostDialogComponent);
    return DeletePostDialogComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/posts/followers-dialog/followers-dialog.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/dashboard/posts/followers-dialog/followers-dialog.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9wb3N0cy9mb2xsb3dlcnMtZGlhbG9nL2ZvbGxvd2Vycy1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/posts/followers-dialog/followers-dialog.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/dashboard/posts/followers-dialog/followers-dialog.component.ts ***!
  \********************************************************************************/
/*! exports provided: FollowersDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowersDialogComponent", function() { return FollowersDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/posts.service */ "./src/app/services/posts.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var FollowersDialogComponent = /** @class */ (function () {
    function FollowersDialogComponent(posts, dialogRef, data) {
        this.posts = posts;
        this.dialogRef = dialogRef;
        this.id = data.id,
            this.followers = data.followers;
    }
    FollowersDialogComponent.prototype.ngOnInit = function () {
        console.log(this.followers);
    };
    FollowersDialogComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    FollowersDialogComponent.ctorParameters = function () { return [
        { type: _services_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] }
    ]; };
    FollowersDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-followers-dialog',
            template: __webpack_require__(/*! raw-loader!./followers-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/posts/followers-dialog/followers-dialog.component.html"),
            styles: [__webpack_require__(/*! ./followers-dialog.component.scss */ "./src/app/dashboard/posts/followers-dialog/followers-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
    ], FollowersDialogComponent);
    return FollowersDialogComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/posts/posts-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/dashboard/posts/posts-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: PostsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsRoutingModule", function() { return PostsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _posts_reported_reported_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../posts/reported/reported.component */ "./src/app/dashboard/posts/reported/reported.component.ts");
/* harmony import */ var _posts_verify_verify_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../posts/verify/verify.component */ "./src/app/dashboard/posts/verify/verify.component.ts");





var routes = [
    { path: 'posts', loadChildren: function () { return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./posts.module */ "./src/app/dashboard/posts/posts.module.ts")).then(function (m) { return m.PostsModule; }); } },
    { path: 'verify', component: _posts_verify_verify_component__WEBPACK_IMPORTED_MODULE_4__["VerifyComponent"] },
    { path: 'reported', component: _posts_reported_reported_component__WEBPACK_IMPORTED_MODULE_3__["ReportedComponent"] }
];
var PostsRoutingModule = /** @class */ (function () {
    function PostsRoutingModule() {
    }
    PostsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], PostsRoutingModule);
    return PostsRoutingModule;
}());



/***/ }),

/***/ "./src/app/dashboard/posts/posts.component.scss":
/*!******************************************************!*\
  !*** ./src/app/dashboard/posts/posts.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9wb3N0cy9wb3N0cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/posts/posts.component.ts":
/*!****************************************************!*\
  !*** ./src/app/dashboard/posts/posts.component.ts ***!
  \****************************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/posts.service */ "./src/app/services/posts.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _delete_post_dialog_delete_post_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./delete-post-dialog/delete-post-dialog.component */ "./src/app/dashboard/posts/delete-post-dialog/delete-post-dialog.component.ts");
/* harmony import */ var _followers_dialog_followers_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./followers-dialog/followers-dialog.component */ "./src/app/dashboard/posts/followers-dialog/followers-dialog.component.ts");
/* harmony import */ var _comments_dialog_comments_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comments-dialog/comments-dialog.component */ "./src/app/dashboard/posts/comments-dialog/comments-dialog.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var PostsComponent = /** @class */ (function () {
    function PostsComponent(posts, dialog, router) {
        this.posts = posts;
        this.dialog = dialog;
        this.router = router;
        this.allPosts = [];
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.posts.getPosts().subscribe(function (posts) {
            var postsArray = Object.values(posts);
            _this.posts.posts$.next(postsArray);
            // Subscribe to Posts Subject in Posts Service for Real time updates
            _this.posts.posts$.subscribe(function (data) {
                _this.allPosts = data;
                console.log(_this.allPosts);
            });
        });
        this.posts.getReportedComments().subscribe(function (posts) {
            _this.reportedPost = Object.values(posts);
        });
        this.posts.getUnverifiedPosts().subscribe(function (posts) {
            _this.unverifiedPost = Object.values(posts);
        });
    };
    PostsComponent.prototype.reportedPage = function () {
        console.log('Going to reported Page');
        this.router.navigate(['reported']);
    };
    PostsComponent.prototype.verifyPage = function () {
        console.log('Going to verified Page');
        this.router.navigate(['verify']);
    };
    PostsComponent.prototype.openDeleteDialog = function (data) {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.data = {
            id: data._id,
            creatorEmail: data.creatorEmail,
            creatorName: data.creatorName,
            post: data.post
        };
        this.dialog.open(_delete_post_dialog_delete_post_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DeletePostDialogComponent"], dialogConfig);
    };
    PostsComponent.prototype.openFollowersDialog = function (data) {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.data = {
            id: data._id,
            followers: data.followers
        };
        this.dialog.open(_followers_dialog_followers_dialog_component__WEBPACK_IMPORTED_MODULE_5__["FollowersDialogComponent"], dialogConfig);
    };
    PostsComponent.prototype.openCommentsDialog = function (data) {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.width = '800px';
        dialogConfig.height = '800px';
        dialogConfig.autoFocus = false;
        dialogConfig.data = {
            id: data._id,
            comments: data.comments
        };
        this.dialog.open(_comments_dialog_comments_dialog_component__WEBPACK_IMPORTED_MODULE_6__["CommentsDialogComponent"], dialogConfig);
    };
    PostsComponent.ctorParameters = function () { return [
        { type: _services_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
    ]; };
    PostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-posts',
            template: __webpack_require__(/*! raw-loader!./posts.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/posts/posts.component.html"),
            styles: [__webpack_require__(/*! ./posts.component.scss */ "./src/app/dashboard/posts/posts.component.scss")]
        })
    ], PostsComponent);
    return PostsComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/posts/posts.module.ts":
/*!*************************************************!*\
  !*** ./src/app/dashboard/posts/posts.module.ts ***!
  \*************************************************/
/*! exports provided: PostsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsModule", function() { return PostsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _posts_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./posts-routing.module */ "./src/app/dashboard/posts/posts-routing.module.ts");
/* harmony import */ var _reported_reported_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reported/reported.component */ "./src/app/dashboard/posts/reported/reported.component.ts");
/* harmony import */ var _verify_verify_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./verify/verify.component */ "./src/app/dashboard/posts/verify/verify.component.ts");
/* harmony import */ var _delete_post_dialog_delete_post_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./delete-post-dialog/delete-post-dialog.component */ "./src/app/dashboard/posts/delete-post-dialog/delete-post-dialog.component.ts");
/* harmony import */ var _followers_dialog_followers_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./followers-dialog/followers-dialog.component */ "./src/app/dashboard/posts/followers-dialog/followers-dialog.component.ts");
/* harmony import */ var _comments_dialog_comments_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./comments-dialog/comments-dialog.component */ "./src/app/dashboard/posts/comments-dialog/comments-dialog.component.ts");
/* harmony import */ var _delete_comment_dialog_delete_comment_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./delete-comment-dialog/delete-comment-dialog.component */ "./src/app/dashboard/posts/delete-comment-dialog/delete-comment-dialog.component.ts");
/* harmony import */ var _reported_delete_reported_comment_dialog_delete_reported_comment_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./reported/delete-reported-comment-dialog/delete-reported-comment-dialog.component */ "./src/app/dashboard/posts/reported/delete-reported-comment-dialog/delete-reported-comment-dialog.component.ts");
/* harmony import */ var _reported_seen_comment_dialog_seen_comment_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./reported/seen-comment-dialog/seen-comment-dialog.component */ "./src/app/dashboard/posts/reported/seen-comment-dialog/seen-comment-dialog.component.ts");
/* harmony import */ var _verify_verify_dialog_verify_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./verify/verify-dialog/verify-dialog.component */ "./src/app/dashboard/posts/verify/verify-dialog/verify-dialog.component.ts");
/* harmony import */ var _verify_deny_dialog_deny_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./verify/deny-dialog/deny-dialog.component */ "./src/app/dashboard/posts/verify/deny-dialog/deny-dialog.component.ts");
/* harmony import */ var _verify_denied_denied_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./verify/denied/denied.component */ "./src/app/dashboard/posts/verify/denied/denied.component.ts");
/* harmony import */ var _reported_reported_archive_reported_archive_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./reported/reported-archive/reported-archive.component */ "./src/app/dashboard/posts/reported/reported-archive/reported-archive.component.ts");

















var PostsModule = /** @class */ (function () {
    function PostsModule() {
    }
    PostsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _delete_post_dialog_delete_post_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DeletePostDialogComponent"],
                _reported_reported_component__WEBPACK_IMPORTED_MODULE_5__["ReportedComponent"],
                _verify_verify_component__WEBPACK_IMPORTED_MODULE_6__["VerifyComponent"],
                _followers_dialog_followers_dialog_component__WEBPACK_IMPORTED_MODULE_8__["FollowersDialogComponent"],
                _comments_dialog_comments_dialog_component__WEBPACK_IMPORTED_MODULE_9__["CommentsDialogComponent"],
                _delete_comment_dialog_delete_comment_dialog_component__WEBPACK_IMPORTED_MODULE_10__["DeleteCommentDialogComponent"],
                _reported_delete_reported_comment_dialog_delete_reported_comment_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DeleteReportedCommentDialogComponent"],
                _reported_seen_comment_dialog_seen_comment_dialog_component__WEBPACK_IMPORTED_MODULE_12__["SeenCommentDialogComponent"],
                _verify_verify_dialog_verify_dialog_component__WEBPACK_IMPORTED_MODULE_13__["VerifyDialogComponent"],
                _verify_deny_dialog_deny_dialog_component__WEBPACK_IMPORTED_MODULE_14__["DenyDialogComponent"],
                _verify_denied_denied_component__WEBPACK_IMPORTED_MODULE_15__["DeniedComponent"],
                _reported_reported_archive_reported_archive_component__WEBPACK_IMPORTED_MODULE_16__["ReportedArchiveComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _posts_routing_module__WEBPACK_IMPORTED_MODULE_4__["PostsRoutingModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]
            ],
            entryComponents: [
                _delete_post_dialog_delete_post_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DeletePostDialogComponent"],
                _followers_dialog_followers_dialog_component__WEBPACK_IMPORTED_MODULE_8__["FollowersDialogComponent"],
                _comments_dialog_comments_dialog_component__WEBPACK_IMPORTED_MODULE_9__["CommentsDialogComponent"],
                _delete_comment_dialog_delete_comment_dialog_component__WEBPACK_IMPORTED_MODULE_10__["DeleteCommentDialogComponent"],
                _reported_delete_reported_comment_dialog_delete_reported_comment_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DeleteReportedCommentDialogComponent"],
                _reported_seen_comment_dialog_seen_comment_dialog_component__WEBPACK_IMPORTED_MODULE_12__["SeenCommentDialogComponent"],
                _verify_verify_dialog_verify_dialog_component__WEBPACK_IMPORTED_MODULE_13__["VerifyDialogComponent"],
                _verify_deny_dialog_deny_dialog_component__WEBPACK_IMPORTED_MODULE_14__["DenyDialogComponent"]
            ]
        })
    ], PostsModule);
    return PostsModule;
}());



/***/ }),

/***/ "./src/app/dashboard/posts/reported/delete-reported-comment-dialog/delete-reported-comment-dialog.component.scss":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/dashboard/posts/reported/delete-reported-comment-dialog/delete-reported-comment-dialog.component.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9wb3N0cy9yZXBvcnRlZC9kZWxldGUtcmVwb3J0ZWQtY29tbWVudC1kaWFsb2cvZGVsZXRlLXJlcG9ydGVkLWNvbW1lbnQtZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/dashboard/posts/reported/delete-reported-comment-dialog/delete-reported-comment-dialog.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/dashboard/posts/reported/delete-reported-comment-dialog/delete-reported-comment-dialog.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: DeleteReportedCommentDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteReportedCommentDialogComponent", function() { return DeleteReportedCommentDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/posts.service */ "./src/app/services/posts.service.ts");




var DeleteReportedCommentDialogComponent = /** @class */ (function () {
    function DeleteReportedCommentDialogComponent(posts, dialogRef, data) {
        this.posts = posts;
        this.dialogRef = dialogRef;
        this.postID = data.postID;
        this.commentID = data.commentID;
        this.reportedUserEmail = data.reportedUserEmail;
        this.reportedUserName = data.reportedUserName;
        this.comment = data.comment;
    }
    DeleteReportedCommentDialogComponent.prototype.ngOnInit = function () {
    };
    DeleteReportedCommentDialogComponent.prototype.delete = function () {
        var _this = this;
        this.posts.deleteReportedComment(this.postID, this.commentID).subscribe(function (data) {
            _this.posts.getReportedComments().subscribe(function (data) {
                var commentsArray = Object.values(data);
                _this.posts.posts$.next(commentsArray);
            });
        });
        this.dialogRef.close();
    };
    DeleteReportedCommentDialogComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    DeleteReportedCommentDialogComponent.ctorParameters = function () { return [
        { type: _services_posts_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    DeleteReportedCommentDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-delete-reported-comment-dialog',
            template: __webpack_require__(/*! raw-loader!./delete-reported-comment-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/posts/reported/delete-reported-comment-dialog/delete-reported-comment-dialog.component.html"),
            styles: [__webpack_require__(/*! ./delete-reported-comment-dialog.component.scss */ "./src/app/dashboard/posts/reported/delete-reported-comment-dialog/delete-reported-comment-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
    ], DeleteReportedCommentDialogComponent);
    return DeleteReportedCommentDialogComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/posts/reported/reported-archive/reported-archive.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/dashboard/posts/reported/reported-archive/reported-archive.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9wb3N0cy9yZXBvcnRlZC9yZXBvcnRlZC1hcmNoaXZlL3JlcG9ydGVkLWFyY2hpdmUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/posts/reported/reported-archive/reported-archive.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/dashboard/posts/reported/reported-archive/reported-archive.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ReportedArchiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportedArchiveComponent", function() { return ReportedArchiveComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/posts.service */ "./src/app/services/posts.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ReportedArchiveComponent = /** @class */ (function () {
    function ReportedArchiveComponent(comments, dialog, router) {
        this.comments = comments;
        this.dialog = dialog;
        this.router = router;
        this.allReportedPosts = [];
    }
    ReportedArchiveComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.comments.getReportedCommentsArchive().subscribe(function (comments) {
            var commentsArray = Object.values(comments);
            _this.comments.deniedPosts$.next(commentsArray);
            // Subscribe to Posts Subject in Posts Service for Real time updates
            _this.comments.deniedPosts$.subscribe(function (data) {
                _this.allReportedPosts = data;
                console.log(_this.allReportedPosts);
            });
        });
    };
    ReportedArchiveComponent.prototype.goBack = function () {
        console.log('Going back to cali');
        this.router.navigate(['dashboard']);
    };
    ReportedArchiveComponent.ctorParameters = function () { return [
        { type: _services_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    ReportedArchiveComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reported-archive',
            template: __webpack_require__(/*! raw-loader!./reported-archive.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/posts/reported/reported-archive/reported-archive.component.html"),
            styles: [__webpack_require__(/*! ./reported-archive.component.scss */ "./src/app/dashboard/posts/reported/reported-archive/reported-archive.component.scss")]
        })
    ], ReportedArchiveComponent);
    return ReportedArchiveComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/posts/reported/reported.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/posts/reported/reported.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9wb3N0cy9yZXBvcnRlZC9yZXBvcnRlZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/posts/reported/reported.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/posts/reported/reported.component.ts ***!
  \****************************************************************/
/*! exports provided: ReportedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportedComponent", function() { return ReportedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/posts.service */ "./src/app/services/posts.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _reported_delete_reported_comment_dialog_delete_reported_comment_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reported/delete-reported-comment-dialog/delete-reported-comment-dialog.component */ "./src/app/dashboard/posts/reported/delete-reported-comment-dialog/delete-reported-comment-dialog.component.ts");
/* harmony import */ var _reported_seen_comment_dialog_seen_comment_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reported/seen-comment-dialog/seen-comment-dialog.component */ "./src/app/dashboard/posts/reported/seen-comment-dialog/seen-comment-dialog.component.ts");







var ReportedComponent = /** @class */ (function () {
    function ReportedComponent(posts, router, dialog) {
        this.posts = posts;
        this.router = router;
        this.dialog = dialog;
    }
    ReportedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.posts.getReportedComments().subscribe(function (posts) {
            _this.allReportedComments = posts['reportedComments'];
            console.log(_this.allReportedComments);
        });
    };
    ReportedComponent.prototype.goBack = function () {
        this.router.navigate(['dashboard']);
    };
    ReportedComponent.prototype.openDeleteReportedCommentDialog = function (data) {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        console.log(data);
        dialogConfig.width = '800px';
        dialogConfig.height = '800px';
        dialogConfig.data = {
            postID: data._id,
            commentID: data.commentID,
            comment: data.comment,
            reportedUserEmail: data.reportedUserEmail,
            reportedUserName: data.reportedUserName
        };
        this.dialog.open(_reported_delete_reported_comment_dialog_delete_reported_comment_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DeleteReportedCommentDialogComponent"], dialogConfig);
    };
    ReportedComponent.prototype.openSeenReportedCommentDialog = function (data) {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.width = '800px';
        dialogConfig.height = '800px';
        dialogConfig.autoFocus = false;
        dialogConfig.data = {
            id: data._id,
            comments: data.comments
        };
        this.dialog.open(_reported_seen_comment_dialog_seen_comment_dialog_component__WEBPACK_IMPORTED_MODULE_6__["SeenCommentDialogComponent"], dialogConfig);
    };
    ReportedComponent.ctorParameters = function () { return [
        { type: _services_posts_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
    ]; };
    ReportedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reported',
            template: __webpack_require__(/*! raw-loader!./reported.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/posts/reported/reported.component.html"),
            styles: [__webpack_require__(/*! ./reported.component.scss */ "./src/app/dashboard/posts/reported/reported.component.scss")]
        })
    ], ReportedComponent);
    return ReportedComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/posts/reported/seen-comment-dialog/seen-comment-dialog.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/dashboard/posts/reported/seen-comment-dialog/seen-comment-dialog.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9wb3N0cy9yZXBvcnRlZC9zZWVuLWNvbW1lbnQtZGlhbG9nL3NlZW4tY29tbWVudC1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/posts/reported/seen-comment-dialog/seen-comment-dialog.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/dashboard/posts/reported/seen-comment-dialog/seen-comment-dialog.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: SeenCommentDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeenCommentDialogComponent", function() { return SeenCommentDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/posts.service */ "./src/app/services/posts.service.ts");




var SeenCommentDialogComponent = /** @class */ (function () {
    function SeenCommentDialogComponent(posts, dialogRef, data) {
        this.posts = posts;
        this.dialogRef = dialogRef;
        this.postID = data.postID;
        this.commentID = data.commentID;
        this.reportedUserEmail = data.reportedUserEmail;
        this.reportedUserName = data.reportedUserName;
        this.comment = data.comment;
    }
    SeenCommentDialogComponent.prototype.ngOnInit = function () {
    };
    SeenCommentDialogComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    SeenCommentDialogComponent.prototype.reportedCommentsArchive = function () {
        console.log('create reported comments archieve');
        console.log('add was deleted boolean propety. in this case it would be set to false');
        this.dialogRef.close();
    };
    SeenCommentDialogComponent.ctorParameters = function () { return [
        { type: _services_posts_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    SeenCommentDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-seen-comment-dialog',
            template: __webpack_require__(/*! raw-loader!./seen-comment-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/posts/reported/seen-comment-dialog/seen-comment-dialog.component.html"),
            styles: [__webpack_require__(/*! ./seen-comment-dialog.component.scss */ "./src/app/dashboard/posts/reported/seen-comment-dialog/seen-comment-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
    ], SeenCommentDialogComponent);
    return SeenCommentDialogComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/posts/verify/denied/denied.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/posts/verify/denied/denied.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9wb3N0cy92ZXJpZnkvZGVuaWVkL2RlbmllZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/posts/verify/denied/denied.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard/posts/verify/denied/denied.component.ts ***!
  \*******************************************************************/
/*! exports provided: DeniedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeniedComponent", function() { return DeniedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/posts.service */ "./src/app/services/posts.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var DeniedComponent = /** @class */ (function () {
    function DeniedComponent(posts, dialog, router) {
        this.posts = posts;
        this.dialog = dialog;
        this.router = router;
        this.allDeniedPosts = [];
    }
    DeniedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.posts.getDeniedPosts().subscribe(function (posts) {
            var postsArray = Object.values(posts);
            _this.posts.deniedPosts$.next(postsArray);
            // Subscribe to Posts Subject in Posts Service for Real time updates
            _this.posts.deniedPosts$.subscribe(function (data) {
                _this.allDeniedPosts = data;
                console.log(_this.allDeniedPosts);
            });
        });
    };
    DeniedComponent.prototype.goBack = function () {
        console.log('Going back to cali');
        this.router.navigate(['dashboard']);
    };
    DeniedComponent.ctorParameters = function () { return [
        { type: _services_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    DeniedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-denied',
            template: __webpack_require__(/*! raw-loader!./denied.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/posts/verify/denied/denied.component.html"),
            styles: [__webpack_require__(/*! ./denied.component.scss */ "./src/app/dashboard/posts/verify/denied/denied.component.scss")]
        })
    ], DeniedComponent);
    return DeniedComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/posts/verify/deny-dialog/deny-dialog.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard/posts/verify/deny-dialog/deny-dialog.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9wb3N0cy92ZXJpZnkvZGVueS1kaWFsb2cvZGVueS1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/posts/verify/deny-dialog/deny-dialog.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/posts/verify/deny-dialog/deny-dialog.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DenyDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DenyDialogComponent", function() { return DenyDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/posts.service */ "./src/app/services/posts.service.ts");




var DenyDialogComponent = /** @class */ (function () {
    function DenyDialogComponent(posts, dialogRef, data) {
        this.posts = posts;
        this.dialogRef = dialogRef;
        this.id = data.id;
        this.creatorEmail = data.creatorEmail;
        this.creatorName = data.creatorName;
        this.post = data.post;
        this.date = data.date;
    }
    DenyDialogComponent.prototype.ngOnInit = function () {
    };
    DenyDialogComponent.prototype.deny = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.posts.deny(id).subscribe()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.dialogRef.close()];
                    case 2:
                        _a.sent();
                        console.log('This post has been denied and added to Denied Post Collection');
                        return [2 /*return*/];
                }
            });
        });
    };
    DenyDialogComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    DenyDialogComponent.ctorParameters = function () { return [
        { type: _services_posts_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    DenyDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-deny-dialog',
            template: __webpack_require__(/*! raw-loader!./deny-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/posts/verify/deny-dialog/deny-dialog.component.html"),
            styles: [__webpack_require__(/*! ./deny-dialog.component.scss */ "./src/app/dashboard/posts/verify/deny-dialog/deny-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
    ], DenyDialogComponent);
    return DenyDialogComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/posts/verify/verify-dialog/verify-dialog.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/dashboard/posts/verify/verify-dialog/verify-dialog.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9wb3N0cy92ZXJpZnkvdmVyaWZ5LWRpYWxvZy92ZXJpZnktZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/dashboard/posts/verify/verify-dialog/verify-dialog.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/dashboard/posts/verify/verify-dialog/verify-dialog.component.ts ***!
  \*********************************************************************************/
/*! exports provided: VerifyDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyDialogComponent", function() { return VerifyDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/posts.service */ "./src/app/services/posts.service.ts");




var VerifyDialogComponent = /** @class */ (function () {
    function VerifyDialogComponent(posts, dialogRef, data) {
        this.posts = posts;
        this.dialogRef = dialogRef;
        this.id = data.id,
            this.creatorEmail = data.creatorEmail;
        this.creatorName = data.creatorName;
        this.post = data.post;
        this.date = data.date;
    }
    VerifyDialogComponent.prototype.ngOnInit = function () {
    };
    VerifyDialogComponent.prototype.verify = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.posts.verify(id).subscribe()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.dialogRef.close()];
                    case 2:
                        _a.sent();
                        console.log('This post has been verified and added to Post Collection');
                        return [2 /*return*/];
                }
            });
        });
    };
    VerifyDialogComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    VerifyDialogComponent.ctorParameters = function () { return [
        { type: _services_posts_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    VerifyDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-verify-dialog',
            template: __webpack_require__(/*! raw-loader!./verify-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/posts/verify/verify-dialog/verify-dialog.component.html"),
            styles: [__webpack_require__(/*! ./verify-dialog.component.scss */ "./src/app/dashboard/posts/verify/verify-dialog/verify-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
    ], VerifyDialogComponent);
    return VerifyDialogComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/posts/verify/verify.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/posts/verify/verify.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9wb3N0cy92ZXJpZnkvdmVyaWZ5LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/dashboard/posts/verify/verify.component.ts":
/*!************************************************************!*\
  !*** ./src/app/dashboard/posts/verify/verify.component.ts ***!
  \************************************************************/
/*! exports provided: VerifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyComponent", function() { return VerifyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/posts.service */ "./src/app/services/posts.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _verify_verify_dialog_verify_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../verify/verify-dialog/verify-dialog.component */ "./src/app/dashboard/posts/verify/verify-dialog/verify-dialog.component.ts");
/* harmony import */ var _verify_deny_dialog_deny_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../verify/deny-dialog/deny-dialog.component */ "./src/app/dashboard/posts/verify/deny-dialog/deny-dialog.component.ts");







var VerifyComponent = /** @class */ (function () {
    function VerifyComponent(posts, router, dialog) {
        this.posts = posts;
        this.router = router;
        this.dialog = dialog;
    }
    VerifyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.posts.getUnverifiedPosts().subscribe(function (posts) {
            _this.allUnverifiedPosts = posts;
            console.log(_this.allUnverifiedPosts);
        });
    };
    VerifyComponent.prototype.goBack = function () {
        console.log('Going back to cali');
        this.router.navigate(['dashboard']);
    };
    VerifyComponent.prototype.verifyYesDialog = function (data) {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.width = '800px';
        dialogConfig.height = 'auto';
        dialogConfig.autoFocus = false;
        dialogConfig.data = {
            id: data._id,
            creatorName: data.creatorName,
            creatorEmail: data.creatorEmail,
            post: data.post,
            date: data.date
        };
        this.dialog.open(_verify_verify_dialog_verify_dialog_component__WEBPACK_IMPORTED_MODULE_5__["VerifyDialogComponent"], dialogConfig);
    };
    VerifyComponent.prototype.verifyNoDialog = function (data) {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.width = '800px';
        dialogConfig.height = 'auto';
        dialogConfig.autoFocus = false;
        dialogConfig.data = {
            id: data._id,
            creatorName: data.creatorName,
            creatorEmail: data.creatorEmail,
            post: data.post,
            date: data.date
        };
        this.dialog.open(_verify_deny_dialog_deny_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DenyDialogComponent"], dialogConfig);
    };
    VerifyComponent.ctorParameters = function () { return [
        { type: _services_posts_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
    ]; };
    VerifyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-verify',
            template: __webpack_require__(/*! raw-loader!./verify.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/posts/verify/verify.component.html"),
            styles: [__webpack_require__(/*! ./verify.component.scss */ "./src/app/dashboard/posts/verify/verify.component.scss")]
        })
    ], VerifyComponent);
    return VerifyComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/students/delete-student-dialog/delete-dialog.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/dashboard/students/delete-student-dialog/delete-dialog.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvQWRtaW4vc3JjL2FwcC9kYXNoYm9hcmQvc3R1ZGVudHMvZGVsZXRlLXN0dWRlbnQtZGlhbG9nL2RlbGV0ZS1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Rhc2hib2FyZC9zdHVkZW50cy9kZWxldGUtc3R1ZGVudC1kaWFsb2cvZGVsZXRlLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvc3R1ZGVudHMvZGVsZXRlLXN0dWRlbnQtZGlhbG9nL2RlbGV0ZS1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4iLCJidXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/dashboard/students/delete-student-dialog/delete-dialog.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/dashboard/students/delete-student-dialog/delete-dialog.component.ts ***!
  \*************************************************************************************/
/*! exports provided: DeleteStudentDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteStudentDialogComponent", function() { return DeleteStudentDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_students_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/students.service */ "./src/app/services/students.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var DeleteStudentDialogComponent = /** @class */ (function () {
    function DeleteStudentDialogComponent(students, dialogRef, data) {
        this.students = students;
        this.dialogRef = dialogRef;
        this.fullName = data.fullName;
        this.id = data.id;
        this.addressOne = data.addressOne;
        this.addressTwo = data.addressTwo;
        this.phone = data.phone;
        this.city = data.city;
        this.state = data.state;
        this.zip = data.zip;
        this.gender = data.gender;
        this.dob = data.dob;
        this.school = data.school;
        this.grade = data.grade;
        this.email = data.email;
    }
    DeleteStudentDialogComponent.prototype.ngOnInit = function () {
    };
    DeleteStudentDialogComponent.prototype.delete = function (id) {
        var _this = this;
        this.students.deleteStudent(id).subscribe(function (data) {
            _this.students.getStudents().subscribe(function (data) {
                var jobsArray = Object.values(data);
                _this.students.studentsSubject.next(jobsArray);
            });
        });
        this.dialogRef.close();
    };
    DeleteStudentDialogComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    DeleteStudentDialogComponent.ctorParameters = function () { return [
        { type: _services_students_service__WEBPACK_IMPORTED_MODULE_2__["StudentsService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] }
    ]; };
    DeleteStudentDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dialog',
            template: __webpack_require__(/*! raw-loader!./delete-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/students/delete-student-dialog/delete-dialog.component.html"),
            styles: [__webpack_require__(/*! ./delete-dialog.component.scss */ "./src/app/dashboard/students/delete-student-dialog/delete-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
    ], DeleteStudentDialogComponent);
    return DeleteStudentDialogComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/students/edit-student-dialog/edit-student-dialog.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/dashboard/students/edit-student-dialog/edit-student-dialog.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9zdHVkZW50cy9lZGl0LXN0dWRlbnQtZGlhbG9nL2VkaXQtc3R1ZGVudC1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/students/edit-student-dialog/edit-student-dialog.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/dashboard/students/edit-student-dialog/edit-student-dialog.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: EditStudentDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditStudentDialogComponent", function() { return EditStudentDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_students_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/students.service */ "./src/app/services/students.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var EditStudentDialogComponent = /** @class */ (function () {
    function EditStudentDialogComponent(students, dialogRef, data, formBuilder) {
        this.students = students;
        this.dialogRef = dialogRef;
        this.formBuilder = formBuilder;
        this.id = data.id;
        this.fullName = data.fullName;
        this.addressOne = data.addressOne;
        this.addressTwo = data.addressTwo;
        this.phone = data.phone;
        this.city = data.city;
        this.state = data.state;
        this.zip = data.zip;
        this.dob = data.dob;
        this.gender = data.gender;
        this.school = data.school;
        this.grade = data.grade;
        this.email = data.email;
        this.profilePicture = data.profilePicture;
    }
    EditStudentDialogComponent.prototype.ngOnInit = function () {
        this.editStudentForm = this.formBuilder.group({
            fullName: [this.fullName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            email: [this.email, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            addressOne: [this.addressOne, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            addressTwo: [this.addressTwo, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            phone: [this.phone, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            city: [this.city, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            state: [this.state, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            zip: [this.zip, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            gender: [this.gender, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            dob: [this.dob, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            school: [this.school, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            grade: [this.grade, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    };
    EditStudentDialogComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    EditStudentDialogComponent.prototype.update = function (student) {
        var _this = this;
        student.id = this.id;
        this.students.editStudent(student).subscribe(function (data) {
            _this.students.getStudents().subscribe(function (data) {
                var jobsArray = Object.values(data);
                _this.students.studentsSubject.next(jobsArray);
            });
        });
        this.dialogRef.close();
    };
    EditStudentDialogComponent.ctorParameters = function () { return [
        { type: _services_students_service__WEBPACK_IMPORTED_MODULE_2__["StudentsService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
    ]; };
    EditStudentDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-student-dialog',
            template: __webpack_require__(/*! raw-loader!./edit-student-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/students/edit-student-dialog/edit-student-dialog.component.html"),
            styles: [__webpack_require__(/*! ./edit-student-dialog.component.scss */ "./src/app/dashboard/students/edit-student-dialog/edit-student-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
    ], EditStudentDialogComponent);
    return EditStudentDialogComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/students/students.component.scss":
/*!************************************************************!*\
  !*** ./src/app/dashboard/students/students.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9zdHVkZW50cy9zdHVkZW50cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/students/students.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/students/students.component.ts ***!
  \**********************************************************/
/*! exports provided: StudentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsComponent", function() { return StudentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_students_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/students.service */ "./src/app/services/students.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _delete_student_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./delete-student-dialog/delete-dialog.component */ "./src/app/dashboard/students/delete-student-dialog/delete-dialog.component.ts");
/* harmony import */ var _edit_student_dialog_edit_student_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-student-dialog/edit-student-dialog.component */ "./src/app/dashboard/students/edit-student-dialog/edit-student-dialog.component.ts");






var StudentsComponent = /** @class */ (function () {
    function StudentsComponent(students, dialog) {
        this.students = students;
        this.dialog = dialog;
        this.allStudents = [];
    }
    StudentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.students.getStudents().subscribe(function (students) {
            // Turn Object to Array to be used with Behvavior Subject
            var studentsArray = Object.values(students);
            _this.students.studentsSubject.next(studentsArray);
            // Subscribe to Jobs Subject in Jobs Service for Real time update changes
            _this.students.studentsSubject.subscribe(function (data) {
                _this.allStudents = data;
                console.log(_this.allStudents);
            });
        });
    };
    StudentsComponent.prototype.openDeleteDialog = function (student) {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.data = {
            id: student._id,
            fullName: student.fullName
        };
        this.dialog.open(_delete_student_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DeleteStudentDialogComponent"], dialogConfig);
    };
    StudentsComponent.prototype.openEditDialog = function (data) {
        console.log(data);
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.data = {
            fullName: data.fullName,
            id: data._id,
            addressOne: data.addressOne,
            addressTwo: data.addressTwo,
            phone: data.phone,
            city: data.city,
            state: data.state,
            zip: data.zip,
            gender: data.gender,
            dob: data.dob,
            school: data.school,
            grade: data.grade,
            email: data.email
        };
        this.dialog.open(_edit_student_dialog_edit_student_dialog_component__WEBPACK_IMPORTED_MODULE_5__["EditStudentDialogComponent"], dialogConfig);
    };
    StudentsComponent.ctorParameters = function () { return [
        { type: _services_students_service__WEBPACK_IMPORTED_MODULE_2__["StudentsService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
    ]; };
    StudentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-students',
            template: __webpack_require__(/*! raw-loader!./students.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/students/students.component.html"),
            styles: [__webpack_require__(/*! ./students.component.scss */ "./src/app/dashboard/students/students.component.scss")]
        })
    ], StudentsComponent);
    return StudentsComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/students/students.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/students/students.module.ts ***!
  \*******************************************************/
/*! exports provided: StudentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsModule", function() { return StudentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _delete_student_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./delete-student-dialog/delete-dialog.component */ "./src/app/dashboard/students/delete-student-dialog/delete-dialog.component.ts");
/* harmony import */ var _edit_student_dialog_edit_student_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-student-dialog/edit-student-dialog.component */ "./src/app/dashboard/students/edit-student-dialog/edit-student-dialog.component.ts");







var StudentsModule = /** @class */ (function () {
    function StudentsModule() {
    }
    StudentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _edit_student_dialog_edit_student_dialog_component__WEBPACK_IMPORTED_MODULE_6__["EditStudentDialogComponent"],
                _delete_student_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DeleteStudentDialogComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]
            ],
            entryComponents: [
                _edit_student_dialog_edit_student_dialog_component__WEBPACK_IMPORTED_MODULE_6__["EditStudentDialogComponent"],
                _delete_student_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DeleteStudentDialogComponent"]
            ]
        })
    ], StudentsModule);
    return StudentsModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-container {\n  background: #f0f0f0;\n  width: 400px;\n  height: 400px;\n  margin: 0 auto;\n  position: relative;\n  top: 100px;\n  padding: 25px;\n}\n\nbutton {\n  margin: 0 auto;\n  position: relative;\n  top: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvQWRtaW4vc3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQwLDI0MCwyNDApO1xuICB3aWR0aDogNDAwcHg7XG4gIGhlaWdodDogNDAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTAwcHg7XG4gIHBhZGRpbmc6IDI1cHg7XG59XG5cbmJ1dHRvbiB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNTBweDtcbn1cbiIsIi5sb2dpbi1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xuICB3aWR0aDogNDAwcHg7XG4gIGhlaWdodDogNDAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTAwcHg7XG4gIHBhZGRpbmc6IDI1cHg7XG59XG5cbmJ1dHRvbiB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, auth, router) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ['admin1234', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: ['4321nimda', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    LoginComponent.prototype.login = function (data) {
        this.auth.login(data);
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");












var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [
                _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url;
        this.authenticationState = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
        console.log('Authentication State: ');
        this.authenticationState.subscribe(console.log);
    }
    AuthService.prototype.isAuthenticated = function () {
        return this.authenticationState.value;
    };
    // Login User
    AuthService.prototype.login = function (data) {
        var _this = this;
        return this.http.post(this.BACKEND_URL + "/api/admin/login", data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log('Logging in...');
            _this.authenticationState.next(true);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
            throw new Error(e);
        })).subscribe();
    };
    AuthService.prototype.logout = function () {
        console.log('Logging out...');
        this.authenticationState.next(false);
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/events.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/events.service.ts ***!
  \********************************************/
/*! exports provided: EventsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsService", function() { return EventsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var EventsService = /** @class */ (function () {
    function EventsService(http) {
        this.http = http;
        this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url;
        this.eventsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
    }
    EventsService.prototype.getEvents = function () {
        return this.http.get(this.BACKEND_URL + "/api/admin/events");
    };
    EventsService.prototype.addEvent = function (event) {
        return this.http.post(this.BACKEND_URL + "/api/admin/events/add-event", event);
    };
    EventsService.prototype.deleteEvent = function (id) {
        return this.http.delete(this.BACKEND_URL + "/api/admin/events/delete-event/" + id);
    };
    EventsService.prototype.updateEvent = function (event) {
        console.log('Updating Job...');
        return this.http.put(this.BACKEND_URL + "/api/admin/events/update-event", event);
    };
    EventsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    EventsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], EventsService);
    return EventsService;
}());



/***/ }),

/***/ "./src/app/services/fairs.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/fairs.service.ts ***!
  \*******************************************/
/*! exports provided: FairsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FairsService", function() { return FairsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var FairsService = /** @class */ (function () {
    function FairsService(http) {
        this.http = http;
        this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url;
        this.fairsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
    }
    FairsService.prototype.getFairs = function () {
        return this.http.get(this.BACKEND_URL + "/api/admin/fairs");
    };
    FairsService.prototype.addFair = function (fair) {
        console.log('From Fairs service: ');
        console.log(fair);
        return this.http.post(this.BACKEND_URL + "/api/admin/fairs/add-fair", fair);
    };
    FairsService.prototype.deleteFair = function (id) {
        return this.http.delete(this.BACKEND_URL + "/api/admin/fairs/delete-fair/" + id);
    };
    FairsService.prototype.updateFair = function (fair) {
        console.log(fair);
        return this.http.put(this.BACKEND_URL + "/api/admin/fairs/update-fair", fair);
    };
    FairsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    FairsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], FairsService);
    return FairsService;
}());



/***/ }),

/***/ "./src/app/services/jobs.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/jobs.service.ts ***!
  \******************************************/
/*! exports provided: JobsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsService", function() { return JobsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var JobsService = /** @class */ (function () {
    function JobsService(http) {
        this.http = http;
        this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url;
        this.jobsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
    }
    JobsService.prototype.getJobs = function () {
        return this.http.get(this.BACKEND_URL + "/api/admin/jobs");
    };
    JobsService.prototype.addJob = function (job) {
        return this.http.post(this.BACKEND_URL + "/api/admin/jobs/add-job", job);
    };
    JobsService.prototype.deleteJob = function (_id) {
        return this.http.delete(this.BACKEND_URL + "/api/admin/jobs/delete-job/" + _id);
    };
    JobsService.prototype.updateJob = function (job) {
        console.log('Updating Job...');
        return this.http.put(this.BACKEND_URL + "/api/admin/jobs/update-job", job);
    };
    JobsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    JobsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], JobsService);
    return JobsService;
}());



/***/ }),

/***/ "./src/app/services/mentors.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/mentors.service.ts ***!
  \*********************************************/
/*! exports provided: MentorsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MentorsService", function() { return MentorsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var MentorsService = /** @class */ (function () {
    function MentorsService(http) {
        this.http = http;
        this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url;
        this.mentorsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
    }
    MentorsService.prototype.getMentors = function () {
        return this.http.get(this.BACKEND_URL + "/api/admin/mentors");
    };
    MentorsService.prototype.addMentor = function (mentor) {
        return this.http.post(this.BACKEND_URL + "/api/admin/mentors/add-mentor", mentor);
    };
    MentorsService.prototype.deleteMentor = function (_id) {
        return this.http.delete(this.BACKEND_URL + "/api/admin/mentors/delete-mentor/" + _id);
    };
    MentorsService.prototype.updateMentor = function (mentor) {
        console.log('Updating Mentor...');
        return this.http.put(this.BACKEND_URL + "/api/admin/mentors/update-mentor", mentor);
    };
    MentorsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    MentorsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], MentorsService);
    return MentorsService;
}());



/***/ }),

/***/ "./src/app/services/posts.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/posts.service.ts ***!
  \*******************************************/
/*! exports provided: PostsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsService", function() { return PostsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var PostsService = /** @class */ (function () {
    function PostsService(http) {
        this.http = http;
        this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url;
        this.posts$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.deniedPosts$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.ReportedPosts$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
    }
    PostsService.prototype.getPosts = function () {
        return this.http.get(this.BACKEND_URL + "/api/admin/posts");
    };
    PostsService.prototype.getReportedComments = function () {
        return this.http.get(this.BACKEND_URL + "/api/admin/posts/reported-comments");
    };
    PostsService.prototype.getReportedCommentsArchive = function () {
        return this.http.get(this.BACKEND_URL + "/api/admin/posts/reported-comments-archive");
    };
    PostsService.prototype.getUnverifiedPosts = function () {
        return this.http.get(this.BACKEND_URL + "/api/admin/posts/verify");
    };
    PostsService.prototype.getDeniedPosts = function () {
        return this.http.get(this.BACKEND_URL + "/api/admin/posts/denied");
    };
    PostsService.prototype.verify = function (id) {
        return this.http.post(this.BACKEND_URL + "/api/admin/posts/verify", { _id: id });
    };
    PostsService.prototype.deny = function (id) {
        return this.http.post(this.BACKEND_URL + "/api/admin/posts/deny", { _id: id });
    };
    PostsService.prototype.deletePost = function (_id) {
        return this.http.delete(this.BACKEND_URL + "/api/admin/posts/delete-post/" + _id);
    };
    PostsService.prototype.deleteComment = function (_id, commentID) {
        return this.http.delete(this.BACKEND_URL + "/api/admin/posts/delete-comment/" + _id + "/" + commentID);
    };
    PostsService.prototype.deleteReportedComment = function (_id, commentID) {
        return this.http.delete(this.BACKEND_URL + "/api/admin/posts/delete-reported-comment/" + _id + "/" + commentID);
    };
    PostsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PostsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], PostsService);
    return PostsService;
}());



/***/ }),

/***/ "./src/app/services/students.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/students.service.ts ***!
  \**********************************************/
/*! exports provided: StudentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsService", function() { return StudentsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var StudentsService = /** @class */ (function () {
    function StudentsService(http) {
        this.http = http;
        this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url;
        this.studentsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
    }
    StudentsService.prototype.getStudents = function () {
        return this.http.get(this.BACKEND_URL + "/api/admin/students");
    };
    StudentsService.prototype.deleteStudent = function (id) {
        return this.http.delete(this.BACKEND_URL + "/api/admin/students/delete/" + id);
    };
    StudentsService.prototype.editStudent = function (student) {
        return this.http.post(this.BACKEND_URL + "/api/admin/students/edit", student);
    };
    StudentsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    StudentsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], StudentsService);
    return StudentsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js/dist/zone-error */ "./node_modules/zone.js/dist/zone-error.js");
/* harmony import */ var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0__);
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var ip = '127.0.0.1';
var baseUrl = "http://" + ip + ":3000";
var url = baseUrl + '/api';
var environment = {
    production: false,
    url: baseUrl,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ferro/Desktop/United-Way/Admin/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map
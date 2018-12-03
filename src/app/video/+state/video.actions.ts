import { Action } from '@ngrx/store';
import { Video } from '../models/video.interface';

export enum VideoActionTypes {
    LoadVideoCourses = '[Video Courses] Load Video Courses',
    LoadVideoCoursesSuccess = '[Video Courses] Load Video Courses Success',
    LoadVideoCoursesFail = '[Video Courses] Load Video Courses Fail',
    CreateVideoCourse = '[Video Courses] Create Course',
    CreateVideoCourseSuccess = '[Video Courses] Create Course Success',
    CreateCourseFail = '[Video Courses] Create Course Failed',
}

export class LoadVideoCourses implements Action {
    readonly type = VideoActionTypes.LoadVideoCourses;
}

export class LoadVideoCoursesSuccess implements Action {
    readonly type = VideoActionTypes.LoadVideoCoursesSuccess;

    constructor(public payload: Video[]) {}
}

export class LoadVideoCoursesFail implements Action {
    readonly type = VideoActionTypes.LoadVideoCoursesFail;

    constructor(public payload: string) {}
}

export class CreateVideoCourse implements Action {
    readonly type = VideoActionTypes.CreateVideoCourse;

    constructor(public payload: Video) {}
}

export class CreateVideoCourseSuccess implements Action {
    readonly type = VideoActionTypes.CreateVideoCourseSuccess;

    constructor(public payload: Video) {}
}

export class CreateVideoCourseFail implements Action {
    readonly type = VideoActionTypes.CreateCourseFail;

    constructor(public payload: string) {}
}

export type VideoActions = LoadVideoCourses
    | LoadVideoCoursesSuccess
    | LoadVideoCoursesFail
    | CreateVideoCourse
    | CreateVideoCourseSuccess
    | CreateVideoCourseFail;
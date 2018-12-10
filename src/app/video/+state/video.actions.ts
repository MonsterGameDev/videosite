import { Action } from '@ngrx/store';
import { Video } from '../models/video.interface';

export enum VideoActionTypes {
    LoadVideoCourses = '[Video Courses] Load Video Courses',
    LoadVideoCoursesSuccess = '[Video Courses] Load Video Courses Success',
    LoadVideoCoursesFail = '[Video Courses] Load Video Courses Fail',
    CreateVideoCourse = '[Video Courses] Create Course',
    CreateVideoCourseSuccess = '[Video Courses] Create Course Success',
    CreateCourseFail = '[Video Courses] Create Course Failed',
    SetCurrentVideoCourseId = '[Video Courses] Set Current VideoCourse',
    ClearCurrentVideoCourseId = '[Video Courses] Clear Current VideoCourse',
    InitializeCurrentVideoCourseId = '[Video Courses] Initialize Current VideoCourse',
    DeleteVideoCourse = '[Video Courses] Delete Current Video',
    DeleteVideoSuccess = '[Video Courses] Delete Video Success',
    DeleteVideoFail = '[Video Courses] Delete Video Fail'

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

export class SetCurrentVideoCourseId implements Action {
    readonly type = VideoActionTypes.SetCurrentVideoCourseId;

    constructor(public payload: number) {}
}

export class ClearCurrentVideoCourseId implements Action {
    readonly type = VideoActionTypes.ClearCurrentVideoCourseId;

}

export class InitializeCurrentVideoCourseId implements Action {
    readonly type = VideoActionTypes.InitializeCurrentVideoCourseId;
}

export class DeleteVideoCourse implements Action {
    readonly type = VideoActionTypes.DeleteVideoCourse;

    constructor(public payload: number) {}
}

export class DeleteVideoCourseSuccess implements Action {
    readonly type = VideoActionTypes.DeleteVideoSuccess;

    constructor (public payload: number) {}
}

export class DeleteVideoCourseFail implements Action {
    readonly type = VideoActionTypes.DeleteVideoFail;

    constructor (public payload: string) {}
}

export type VideoActions = LoadVideoCourses
    | LoadVideoCoursesSuccess
    | LoadVideoCoursesFail
    | CreateVideoCourse
    | CreateVideoCourseSuccess
    | CreateVideoCourseFail
    | SetCurrentVideoCourseId
    | ClearCurrentVideoCourseId
    | InitializeCurrentVideoCourseId
    | DeleteVideoCourse
    | DeleteVideoCourseSuccess
    | DeleteVideoCourseFail;

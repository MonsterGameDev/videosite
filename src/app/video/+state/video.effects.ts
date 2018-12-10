import { Injectable } from '@angular/core';
import { VideoService } from '../common/video.service';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as videoActions from './video.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Video } from '../models/video.interface';

@Injectable()
export class VideoCourseEffectsService {

    constructor(private actions$: Actions, private videoCourseService: VideoService) { }

    @Effect()
    loadVideoCourses$ = this.actions$.pipe(
        ofType(videoActions.VideoActionTypes.LoadVideoCourses),
        mergeMap( () => this.videoCourseService.getAllVideos().pipe(
            map ((videoCourses: Video[]) => new videoActions.LoadVideoCoursesSuccess(videoCourses)),
            catchError (err => of(new videoActions.LoadVideoCoursesFail(err)))
        ))
    );

    @Effect()
    createVideoCourse$ = this.actions$.pipe (
        ofType(videoActions.VideoActionTypes.CreateVideoCourse),
        mergeMap((action: videoActions.CreateVideoCourse) => this.videoCourseService.postVideo(action.payload)
            .pipe(
                map((videoCourse: Video) => new videoActions.CreateVideoCourseSuccess(videoCourse)),
                catchError(err => of(new videoActions.LoadVideoCoursesFail(err)))
            )
        )
    );

    @Effect()
    deleteVideoCourse$ = this.actions$.pipe(
        ofType(videoActions.VideoActionTypes.DeleteVideoCourse),
        mergeMap( (action: videoActions.DeleteVideoCourse) => this.videoCourseService.deleteVideo(action.payload)
        .pipe(
            map(() => new videoActions.DeleteVideoCourseSuccess(action.payload),
            catchError (err => of(new videoActions.DeleteVideoCourseFail(err))))
        ))
    );
}

import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Video } from '../models/video.interface';

@Injectable()
export class VideoService {

    // private baseUrl = 'http://localhost:3000';
    private baseUrl = 'https://videocourses20181202062812.azurewebsites.net/api';

    constructor(private http: HttpClient) { }

    getAllVideos(): Observable<Video[]> {
        const url = `${this.baseUrl}/videocourses`;
        return this.http.get<Video[]>(url);
    }

    getVideo(id: number): Observable<Video> {
        const url = `${this.baseUrl}/videocourses/${id}`;
        return this.http.get<Video>(url);
    }

    postVideo (newVideoCourse: Video): Observable<Video> {
        const url = `${this.baseUrl}/videocourses`;
        return this.http.post<Video>(url, newVideoCourse, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        });
    }

    updateVideo (updateVideoCourse: Video): Observable<void> {
        const url = `${this.baseUrl}/videocourses/${updateVideoCourse.id}`;
        return this.http.put<void>(url, updateVideoCourse, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        });
    }

    deleteVideo(id: number): Observable<void> {
        const url = `${this.baseUrl}/videocourses/${id}`;
        return this.http.delete<void>(url, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        });
    }
}

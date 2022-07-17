import {Pipe, PipeTransform} from '@angular/core';
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {firstValueFrom} from "rxjs";

@Pipe({
    name: 'fireImgSrc'
})
export class FireImgSrcPipe implements PipeTransform {
    constructor(private storage: AngularFireStorage) {
    }

    async transform(value: string, ...args: unknown[]): Promise<string> {
        const subUrl = this.storage.ref(value).getDownloadURL();
        let url: string = "";

        await firstValueFrom(subUrl).then(r => url = r);

        return url;
    }

}

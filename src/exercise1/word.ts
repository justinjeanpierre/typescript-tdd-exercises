/// <reference path="../../references.ts" />

module Exercise1 {
    export class Word {
        constructor(private word:string) {

        }

        public removeVowels():string {
            return this.word.replace(/[aeiou]/ig, '');
        }

        public removeNumbers():string {
            return this.word.replace(/[0-9]/ig, '');
        }
    }
}

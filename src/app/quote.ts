export class Quote {
    showQuotes: boolean;
    likeVotes: number;
    dislikeVotes:number;

    constructor(public author:string, public quote: string, public complete:Date)
    {
        this.likeVotes=0;
        this.dislikeVotes=0;
    }


}

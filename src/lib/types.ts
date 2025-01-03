export interface Controller {
	cid: number;
	name: string;
	rating: string;
	title: string;
	positions: {
		DEL?: boolean;
		GND?: boolean;
		TWR?: boolean;
		APP?: boolean;
		CTR?: boolean;
	};
}

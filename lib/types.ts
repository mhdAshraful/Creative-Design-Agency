export interface ContactFormData {
	name: string;
	email: string;
	projectDetails: string;
	budget: string;
	interests: string[];
}

export interface ContactResponse {
	success: boolean;
	message: string;
	messageID?: string;
	previewUrl?: string;
	error?: string;
}

declare namespace APIData {
  interface Gallery {
    pageMEI: string;
    pageTitle: string;
    pageSlug: string;
    postcards: Postcard[];
  }
  interface Postcard {
    title: string;
    context: string;
    image: string;
    imageTitle: string;
    width: string;
    height: string;
    link: string;
  }
  interface APIRequestInfo {
    ProviderVersion: string;
    ProviderIdentity: string;
    ProviderID: string;
    Module: string;
    APIVersion: string;
    Resource: string;
    IsLoggedIn: boolean;
    Parameters: {
      Package: string;
      PackageFields: string;
      RepresentativeFields: string;
      ContentFields: string;
    };
    Status: string;
    UserLogin: string;
    Session: string;
    TimeoutPeriodMinutes: number;
  }

  interface Representative {
    SystemIdentifier: string;
    MediaEncryptedIdentifier: string;
    Title: string;
    MaxWidth: string;
    MaxHeight: string;
  }

  interface ContentItem {
    SystemIdentifier: string;
    MediaEncryptedIdentifier: string;
    Title: string;
    "CoreField.IIIFResourceType": string;
  }

  interface APIResponse {
    SystemIdentifier: string;
    MediaEncryptedIdentifier: string;
    Title: string;
    "new.Context": string;
    Representative: Representative;
    Content: ContentItem[];
    useremail: string;
  }

  export interface CortexAPIData {
    APIRequestInfo: APIRequestInfo;
    APIResponse: APIResponse;
  }
}
export default APIData;

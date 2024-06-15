// ❌ esta mal pero podria romper todo si no lo encuentra...
const canvas2 = document.getElementById('canvas') as HTMLCanvasElement;


const ctx = canvas2.getContext('2d'); // podria dar error si no lo encuentra.


// Esta es un poco mejor, aunque podria romperse...

const canvas3 = document.getElementById('canvas') as HTMLCanvasElement;


if(canvas3 != null){
    const ctx = canvas3.getContext('2d'); 
}



// ✅ esta forma es la correcta!!!
const canvas = document.getElementById('canvas'); // as HTMLCanvasElement


// as HTMLCanvasElement es una asercion de tipo para decirle a TS que el elemento que se esta recuperando es un <canvas />


// null si no lo encuentra
// HTMLElement si lo encuentra

// ???? como sabe TS de que realmente estas recuperando un elemento <canvas />


// es inferencia --> TypeScript se da cuenta que dentro del if
// ya solo el canvas va a poder ser un HTMLCanvasElement
if(canvas instanceof HTMLCanvasElement){ // <-- ✅ deduciendo que canvas es un HTMLCanvasElement
    //JavaScript está ejecutando el código de la condición.
    const ctx = canvas.getContext('2d');
} 


// typeof --> para tipos 
// instanceof --> para instancias.



// fetching de datos en TypeScript

// para convertir en modulo agregamos una m al .ts de nuestro archivo y quedaria ej: asersion.ts -> asersion.mts o playgroud.ts -> playgroud.mts



const API_URL = 'https://api.github.com/search/repositories?q=javascript';


const response = await fetch(API_URL); 

if (!response.ok){

    throw new Error('Request failed');
}

// type APIresponse = {
//     items: object[]
// }

// COPIAS LA RESPUESTA DEL JSON DE LA API Y NOS VAMOS A QUICKTYPE O ALGUNA HERRAMIENTA 

export type GithubAPIResponse = {
    total_count:        number;
    incomplete_results: boolean;
    items:              Item[];
}

export type Item = {
    id:                          number;
    node_id:                     string;
    name:                        string;
    full_name:                   string;
    private:                     boolean;
    owner:                       Owner;
    html_url:                    string;
    description:                 null | string;
    fork:                        boolean;
    url:                         string;
    forks_url:                   string;
    keys_url:                    string;
    collaborators_url:           string;
    teams_url:                   string;
    hooks_url:                   string;
    issue_events_url:            string;
    events_url:                  string;
    assignees_url:               string;
    branches_url:                string;
    tags_url:                    string;
    blobs_url:                   string;
    git_tags_url:                string;
    git_refs_url:                string;
    trees_url:                   string;
    statuses_url:                string;
    languages_url:               string;
    stargazers_url:              string;
    contributors_url:            string;
    subscribers_url:             string;
    subscription_url:            string;
    commits_url:                 string;
    git_commits_url:             string;
    comments_url:                string;
    issue_comment_url:           string;
    contents_url:                string;
    compare_url:                 string;
    merges_url:                  string;
    archive_url:                 string;
    downloads_url:               string;
    issues_url:                  string;
    pulls_url:                   string;
    milestones_url:              string;
    notifications_url:           string;
    labels_url:                  string;
    releases_url:                string;
    deployments_url:             string;
    created_at:                  Date;
    updated_at:                  Date;
    pushed_at:                   Date;
    git_url:                     string;
    ssh_url:                     string;
    clone_url:                   string;
    svn_url:                     string;
    homepage:                    null | string;
    size:                        number;
    stargazers_count:            number;
    watchers_count:              number;
    language:                    Language | null;
    has_issues:                  boolean;
    has_projects:                boolean;
    has_downloads:               boolean;
    has_wiki:                    boolean;
    has_pages:                   boolean;
    has_discussions:             boolean;
    forks_count:                 number;
    mirror_url:                  null;
    archived:                    boolean;
    disabled:                    boolean;
    open_issues_count:           number;
    license:                     License | null;
    allow_forking:               boolean;
    is_template:                 boolean;
    web_commit_signoff_required: boolean;
    topics:                      string[];
    visibility:                  Visibility;
    forks:                       number;
    open_issues:                 number;
    watchers:                    number;
    default_branch:              DefaultBranch;
    score:                       number;
}

export enum DefaultBranch {
    Dev = "dev",
    Main = "main",
    Master = "master",
}

export enum Language {
    CSS = "CSS",
    HTML = "HTML",
    JavaScript = "JavaScript",
    ObjectiveC = "Objective-C",
    TypeScript = "TypeScript",
}

export type License = {
    key:     string;
    name:    string;
    spdx_id: string;
    url:     null | string;
    node_id: string;
}

export type Owner = {
    login:               string;
    id:                  number;
    node_id:             string;
    avatar_url:          string;
    gravatar_id:         string;
    url:                 string;
    html_url:            string;
    followers_url:       string;
    following_url:       string;
    gists_url:           string;
    starred_url:         string;
    subscriptions_url:   string;
    organizations_url:   string;
    repos_url:           string;
    events_url:          string;
    received_events_url: string;
    type:                Type;
    site_admin:          boolean;
}

export enum Type {
    Organization = "Organization",
    User = "User",
}

export enum Visibility {
    Public = "public",
}



const data = await response.json() as GithubAPIResponse;


const repos = data.items.map(repo => {
    console.log(repo);
});


// aunque puede ser que no sea seguro. con typescript zod es codigo que se ejecuta.
data.items.map(repo => {
    return{
        name: repo.name, 
        id: repo.id,
        url: repo.html_url
    }
}
)

//typescript zod VALIDACIÓN DE TIPOS Y SE VALIDAN EN TIEMPO DE EJECUCIÓN

/* import * as z from "zod";


export const DefaultBranchSchema = z.enum([
    "dev",
    "main",
    "master",
]);
export type DefaultBranch = z.infer<typeof DefaultBranchSchema>;


export const LanguageSchema = z.enum([
    "CSS",
    "HTML",
    "JavaScript",
    "Objective-C",
    "TypeScript",
]);
export type Language = z.infer<typeof LanguageSchema>;


export const TypeSchema = z.enum([
    "Organization",
    "User",
]);
export type Type = z.infer<typeof TypeSchema>;


export const VisibilitySchema = z.enum([
    "public",
]);
export type Visibility = z.infer<typeof VisibilitySchema>;

export const LicenseSchema = z.object({
    "key": z.string(),
    "name": z.string(),
    "spdx_id": z.string(),
    "url": z.union([z.null(), z.string()]),
    "node_id": z.string(),
});
export type License = z.infer<typeof LicenseSchema>;

export const OwnerSchema = z.object({
    "login": z.string(),
    "id": z.number(),
    "node_id": z.string(),
    "avatar_url": z.string(),
    "gravatar_id": z.string(),
    "url": z.string(),
    "html_url": z.string(),
    "followers_url": z.string(),
    "following_url": z.string(),
    "gists_url": z.string(),
    "starred_url": z.string(),
    "subscriptions_url": z.string(),
    "organizations_url": z.string(),
    "repos_url": z.string(),
    "events_url": z.string(),
    "received_events_url": z.string(),
    "type": TypeSchema,
    "site_admin": z.boolean(),
});
export type Owner = z.infer<typeof OwnerSchema>;

export const ItemSchema = z.object({
    "id": z.number(),
    "node_id": z.string(),
    "name": z.string(),
    "full_name": z.string(),
    "private": z.boolean(),
    "owner": OwnerSchema,
    "html_url": z.string(),
    "description": z.union([z.null(), z.string()]),
    "fork": z.boolean(),
    "url": z.string(),
    "forks_url": z.string(),
    "keys_url": z.string(),
    "collaborators_url": z.string(),
    "teams_url": z.string(),
    "hooks_url": z.string(),
    "issue_events_url": z.string(),
    "events_url": z.string(),
    "assignees_url": z.string(),
    "branches_url": z.string(),
    "tags_url": z.string(),
    "blobs_url": z.string(),
    "git_tags_url": z.string(),
    "git_refs_url": z.string(),
    "trees_url": z.string(),
    "statuses_url": z.string(),
    "languages_url": z.string(),
    "stargazers_url": z.string(),
    "contributors_url": z.string(),
    "subscribers_url": z.string(),
    "subscription_url": z.string(),
    "commits_url": z.string(),
    "git_commits_url": z.string(),
    "comments_url": z.string(),
    "issue_comment_url": z.string(),
    "contents_url": z.string(),
    "compare_url": z.string(),
    "merges_url": z.string(),
    "archive_url": z.string(),
    "downloads_url": z.string(),
    "issues_url": z.string(),
    "pulls_url": z.string(),
    "milestones_url": z.string(),
    "notifications_url": z.string(),
    "labels_url": z.string(),
    "releases_url": z.string(),
    "deployments_url": z.string(),
    "created_at": z.coerce.date(),
    "updated_at": z.coerce.date(),
    "pushed_at": z.coerce.date(),
    "git_url": z.string(),
    "ssh_url": z.string(),
    "clone_url": z.string(),
    "svn_url": z.string(),
    "homepage": z.union([z.null(), z.string()]),
    "size": z.number(),
    "stargazers_count": z.number(),
    "watchers_count": z.number(),
    "language": z.union([LanguageSchema, z.null()]),
    "has_issues": z.boolean(),
    "has_projects": z.boolean(),
    "has_downloads": z.boolean(),
    "has_wiki": z.boolean(),
    "has_pages": z.boolean(),
    "has_discussions": z.boolean(),
    "forks_count": z.number(),
    "mirror_url": z.null(),
    "archived": z.boolean(),
    "disabled": z.boolean(),
    "open_issues_count": z.number(),
    "license": z.union([LicenseSchema, z.null()]),
    "allow_forking": z.boolean(),
    "is_template": z.boolean(),
    "web_commit_signoff_required": z.boolean(),
    "topics": z.array(z.string()),
    "visibility": VisibilitySchema,
    "forks": z.number(),
    "open_issues": z.number(),
    "watchers": z.number(),
    "default_branch": DefaultBranchSchema,
    "score": z.number(),
});
export type Item = z.infer<typeof ItemSchema>;

export const GithubApiResponseSchema = z.object({
    "total_count": z.number(),
    "incomplete_results": z.boolean(),
    "items": z.array(ItemSchema),
});
export type GithubApiResponse = z.infer<typeof GithubApiResponseSchema>;
 */





"use strict";(self.webpackChunkinfra_portal=self.webpackChunkinfra_portal||[]).push([[4712],{1141:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var o=i(4848),r=i(8453);const s={custom_edit_url:null},c="Config",l={id:"knowledge-base/packages/config/README",title:"Config",description:"This package provide a solution for handling the configuration for NodeJs applications.",source:"@site/docs/knowledge-base/packages/config/README.md",sourceDirName:"knowledge-base/packages/config",slug:"/knowledge-base/packages/config/",permalink:"/infra-portal/pr-preview/pr-26/docs/knowledge-base/packages/config/",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{custom_edit_url:null},sidebar:"knowledgeBaseSidebar",previous:{title:"Packages",permalink:"/infra-portal/pr-preview/pr-26/docs/category/packages"},next:{title:"error-express-handler",permalink:"/infra-portal/pr-preview/pr-26/docs/knowledge-base/packages/error-express-handler/"}},t={},d=[{value:"API Documentation",id:"api-documentation",level:2},{value:"<code>ConfigInstance&lt;T&gt;</code>",id:"configinstancet",level:3},{value:"Methods",id:"methods",level:4},{value:"<code>get&lt;TPath extends string&gt;(path: TPath): _.GetFieldType&lt;T, TPath&gt;</code>",id:"gettpath-extends-stringpath-tpath-_getfieldtypet-tpath",level:5},{value:"<code>getAll(): T</code>",id:"getall-t",level:5},{value:"<code>getConfigParts(): { localConfig: object; config: object; envConfig: object }</code>",id:"getconfigparts--localconfig-object-config-object-envconfig-object-",level:5},{value:"<code>getResolvedOptions(): BaseOptions</code>",id:"getresolvedoptions-baseoptions",level:5},{value:"<code>initializeMetrics(registry: promClient.Registry): void</code>",id:"initializemetricsregistry-promclientregistry-void",level:5},{value:"Options",id:"options",level:2},{value:"<code>schema</code>",id:"schema",level:3},{value:"<code>configName</code>",id:"configname",level:3},{value:"<code>version</code>",id:"version",level:3},{value:"<code>configServerUrl</code>",id:"configserverurl",level:3},{value:"<code>offlineMode</code>",id:"offlinemode",level:3},{value:"<code>ignoreServerIsOlderVersionError</code>",id:"ignoreserverisolderversionerror",level:3},{value:"<code>localConfigPath</code>",id:"localconfigpath",level:3},{value:"Environment Variable Configuration",id:"environment-variable-configuration",level:2},{value:"Configuration Merging and Validation",id:"configuration-merging-and-validation",level:2},{value:"Local Configuration",id:"local-configuration",level:3},{value:"Remote Configuration",id:"remote-configuration",level:3},{value:"Environment Variables",id:"environment-variables",level:3},{value:"Merging Configurations",id:"merging-configurations",level:3},{value:"Validation",id:"validation",level:3},{value:"Identifying errors",id:"identifying-errors",level:2},{value:"Errors",id:"errors",level:2},{value:"<code>optionValidationError</code>",id:"optionvalidationerror",level:3},{value:"<code>configValidationError</code>",id:"configvalidationerror",level:3},{value:"<code>httpResponseError</code>",id:"httpresponseerror",level:3},{value:"<code>httpGeneralError</code>",id:"httpgeneralerror",level:3},{value:"<code>schemaNotFoundError</code>",id:"schemanotfounderror",level:3},{value:"<code>schemasPackageVersionMismatchError</code>",id:"schemaspackageversionmismatcherror",level:3},{value:"<code>schemaVersionMismatchError</code>",id:"schemaversionmismatcherror",level:3},{value:"<code>promClientNotInstalledError</code>",id:"promclientnotinstallederror",level:3},{value:"<code>DEBUG=*</code>",id:"debug",level:3},{value:"<code>DEBUG=@map-colonies/config*</code>",id:"debugmap-coloniesconfig",level:3},{value:"<code>DEBUG=@map-colonies/config:config</code>",id:"debugmap-coloniesconfigconfig",level:3},{value:"<code>DEBUG=@map-colonies/config:env</code>",id:"debugmap-coloniesconfigenv",level:3},{value:"<code>DEBUG=@map-colonies/config:http</code>",id:"debugmap-coloniesconfighttp",level:3},{value:"<code>DEBUG=@map-colonies/config:options</code>",id:"debugmap-coloniesconfigoptions",level:3},{value:"<code>DEBUG=@map-colonies/config:schemas</code>",id:"debugmap-coloniesconfigschemas",level:3},{value:"<code>DEBUG=@map-colonies/config:validator</code>",id:"debugmap-coloniesconfigvalidator",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"config",children:"Config"})}),"\n",(0,o.jsxs)(n.p,{children:["This package provide a solution for handling the configuration for NodeJs applications.\nThe package supports both working as a standalone solution and online using ",(0,o.jsx)(n.a,{href:"https://github.com/MapColonies/config-server",children:"config-server"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["The configs are defined in the ",(0,o.jsx)(n.a,{href:"https://github.com/MapColonies/schemas",children:"schemas"})," package. It is used for validation, defining environment variable override, and for generating typescript types."]}),"\n",(0,o.jsx)(n.h1,{id:"installation",children:"Installation"}),"\n",(0,o.jsx)(n.p,{children:"In order to use the package you need to install both the package itself, and the schemas package that handles all the config schemas."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"npm install @map-colonies/schemas @map-colonies/config\n"})}),"\n",(0,o.jsx)(n.h1,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import { config } from '@map-colonies/config';\nimport { commonBoilerplateV4 } from '@map-colonies/schemas';\n\nconst configInstance = await config({\n  configName: 'boiler-config',\n  configServerUrl: 'http://localhost:8080',\n  schema: commonBoilerplateV4,\n  version: 'latest',\n  offlineMode: false\n});\n\nconst port = configInstance.get('server.port');\n"})}),"\n",(0,o.jsx)(n.h2,{id:"api-documentation",children:"API Documentation"}),"\n",(0,o.jsx)(n.p,{children:"This section describes the API provided by the package for interacting with the configuration."}),"\n",(0,o.jsx)(n.h3,{id:"configinstancet",children:(0,o.jsx)(n.code,{children:"ConfigInstance<T>"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"ConfigInstance"})," interface represents the your way to interact with the configuration. It provides methods to retrieve configuration values and parts.\n",(0,o.jsx)(n.code,{children:"T"})," is the typescript type associated with the chosen schema. it can be imported from the ",(0,o.jsx)(n.code,{children:"@map-colonies/schemas"})," package."]}),"\n",(0,o.jsx)(n.h4,{id:"methods",children:"Methods"}),"\n",(0,o.jsx)(n.h5,{id:"gettpath-extends-stringpath-tpath-_getfieldtypet-tpath",children:(0,o.jsx)(n.code,{children:"get<TPath extends string>(path: TPath): _.GetFieldType<T, TPath>"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Description"}),": Retrieves the value at the specified path from the configuration object. Note that the type of returned object is based on the path in the schema."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Parameters"}),":\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"path"})," (",(0,o.jsx)(n.code,{children:"TPath"}),"): The path to the desired value."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Returns"}),": The value at the specified path."]}),"\n"]}),"\n",(0,o.jsx)(n.h5,{id:"getall-t",children:(0,o.jsx)(n.code,{children:"getAll(): T"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Description"}),": Retrieves the entire configuration object."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Returns"}),": The entire configuration object."]}),"\n"]}),"\n",(0,o.jsx)(n.h5,{id:"getconfigparts--localconfig-object-config-object-envconfig-object-",children:(0,o.jsx)(n.code,{children:"getConfigParts(): { localConfig: object; config: object; envConfig: object }"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Description"}),": Retrieves different parts of the configuration object before being merged and validated. Useful for debugging."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Returns"}),": An object containing the ",(0,o.jsx)(n.code,{children:"localConfig"}),", ",(0,o.jsx)(n.code,{children:"config"}),", and ",(0,o.jsx)(n.code,{children:"envConfig"})," parts of the configuration.\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"localConfig"}),": The local configuration object."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"config"}),": The remote configuration object."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"envConfig"}),": The environment configuration object."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h5,{id:"getresolvedoptions-baseoptions",children:(0,o.jsx)(n.code,{children:"getResolvedOptions(): BaseOptions"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Description"}),": Retrieves the resolved options from the configuration object. Useful for debugging."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Returns"}),": The resolved options, which are an instance of ",(0,o.jsx)(n.code,{children:"BaseOptions"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h5,{id:"initializemetricsregistry-promclientregistry-void",children:(0,o.jsx)(n.code,{children:"initializeMetrics(registry: promClient.Registry): void"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Description"}),": Initializes the metrics for the configuration."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Parameters"}),":\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"registry"})," (",(0,o.jsx)(n.code,{children:"promClient.Registry"}),"): The prometheus registry to use for the metrics."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h1,{id:"configuration-options",children:"Configuration Options"}),"\n",(0,o.jsx)(n.p,{children:"This package allows you to configure various options for loading and managing configurations. Below are the available options and their descriptions."}),"\n",(0,o.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,o.jsx)(n.h3,{id:"schema",children:(0,o.jsx)(n.code,{children:"schema"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Type"}),": ",(0,o.jsx)(n.code,{children:"T extends SchemaWithType"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Optional"}),": ",(0,o.jsx)(n.code,{children:"false"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Description"}),": The schema of the configuration object."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"configname",children:(0,o.jsx)(n.code,{children:"configName"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Type"}),": ",(0,o.jsx)(n.code,{children:"string"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Optional"}),": ",(0,o.jsx)(n.code,{children:"true"})]}),"\n",(0,o.jsx)(n.li,{}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Description"}),": The name of the remote configuration."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Environment Variable"}),": ",(0,o.jsx)(n.code,{children:"CONFIG_NAME"})]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"version",children:(0,o.jsx)(n.code,{children:"version"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Type"}),": ",(0,o.jsx)(n.code,{children:"'latest' | number"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Optional"}),": ",(0,o.jsx)(n.code,{children:"true"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Default"}),": ",(0,o.jsx)(n.code,{children:"latest"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Description"}),": The version of the remote configuration. It can be either ",(0,o.jsx)(n.code,{children:"'latest'"})," or a number."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Environment Variable"}),": ",(0,o.jsx)(n.code,{children:"CONFIG_VERSION"})]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"configserverurl",children:(0,o.jsx)(n.code,{children:"configServerUrl"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Type"}),": ",(0,o.jsx)(n.code,{children:"string"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Optional"}),": ",(0,o.jsx)(n.code,{children:"true"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Default"}),": ",(0,o.jsx)(n.code,{children:"http://localhost:8080"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Description"}),": The URL of the configuration server."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Environment Variable"}),": ",(0,o.jsx)(n.code,{children:"CONFIG_SERVER_URL"})]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"offlinemode",children:(0,o.jsx)(n.code,{children:"offlineMode"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Type"}),": ",(0,o.jsx)(n.code,{children:"boolean"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Optional"}),": ",(0,o.jsx)(n.code,{children:"true"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Default"}),": ",(0,o.jsx)(n.code,{children:"false"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Description"}),": Indicates whether the configuration should be loaded in offline mode."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Environment Variable"}),": ",(0,o.jsx)(n.code,{children:"CONFIG_OFFLINE_MODE"})]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"ignoreserverisolderversionerror",children:(0,o.jsx)(n.code,{children:"ignoreServerIsOlderVersionError"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Type"}),": ",(0,o.jsx)(n.code,{children:"boolean"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Optional"}),": ",(0,o.jsx)(n.code,{children:"true"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Description"}),": Indicates whether to ignore the error when the server version is older than the requested version."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Environment Variable"}),": ",(0,o.jsx)(n.code,{children:"CONFIG_IGNORE_SERVER_IS_OLDER_VERSION_ERROR"})]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"localconfigpath",children:(0,o.jsx)(n.code,{children:"localConfigPath"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Type"}),": ",(0,o.jsx)(n.code,{children:"string"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Optional"}),": ",(0,o.jsx)(n.code,{children:"true"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Default"}),": ",(0,o.jsx)(n.code,{children:"./config"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Description"}),": The path to the local configuration folder."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"environment-variable-configuration",children:"Environment Variable Configuration"}),"\n",(0,o.jsx)(n.p,{children:"The following environment variables can be used to configure the options:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"CONFIG_NAME"}),": Sets the ",(0,o.jsx)(n.code,{children:"configName"})," option."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"CONFIG_VERSION"}),": Sets the ",(0,o.jsx)(n.code,{children:"version"})," option."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"CONFIG_SERVER_URL"}),": Sets the ",(0,o.jsx)(n.code,{children:"configServerUrl"})," option."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"CONFIG_OFFLINE_MODE"}),": Sets the ",(0,o.jsx)(n.code,{children:"offlineMode"})," option."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"CONFIG_IGNORE_SERVER_IS_OLDER_VERSION_ERROR"}),": Sets the ",(0,o.jsx)(n.code,{children:"ignoreServerIsOlderVersionError"})," option."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"configuration-merging-and-validation",children:"Configuration Merging and Validation"}),"\n",(0,o.jsx)(n.p,{children:"The package supports merging configurations from multiple sources (local, remote, and environment variables) and then validates the merged configuration against the schema."}),"\n",(0,o.jsx)(n.h3,{id:"local-configuration",children:"Local Configuration"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["The local configuration is loaded from the path specified by the ",(0,o.jsx)(n.code,{children:"localConfigPath"})," option. The default path is ",(0,o.jsx)(n.code,{children:"./config"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"remote-configuration",children:"Remote Configuration"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["The remote configuration is fetched from the server specified by the ",(0,o.jsx)(n.code,{children:"configServerUrl"})," option."]}),"\n",(0,o.jsxs)(n.li,{children:["If the ",(0,o.jsx)(n.code,{children:"version"})," is set to ",(0,o.jsx)(n.code,{children:"'latest'"}),", the latest version of the configuration is fetched. Otherwise, the specified version is fetched."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"environment-variables",children:"Environment Variables"}),"\n",(0,o.jsxs)(n.p,{children:["Configuration options can be overridden by setting the corresponding environment variables as described in schema using the ",(0,o.jsx)(n.code,{children:"x-env-value"})," key."]}),"\n",(0,o.jsx)(n.h3,{id:"merging-configurations",children:"Merging Configurations"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"The configurations are merged in the following order of precedence:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Environment variables"}),"\n",(0,o.jsx)(n.li,{children:"Remote configuration"}),"\n",(0,o.jsx)(n.li,{children:"Local configuration"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"If a configuration option is specified in multiple sources, the value from the source with higher precedence (as listed above) is used."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"validation",children:"Validation"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"After merging, the final configuration is validated against the defined schema using ajv."}),"\n",(0,o.jsx)(n.li,{children:"The validation ensures that all required properties are present, and the types and values of properties conform to the schema."}),"\n",(0,o.jsx)(n.li,{children:"Any default value according to the schema is added to the final object."}),"\n",(0,o.jsx)(n.li,{children:"If the validation fails, an error is thrown, indicating the invalid properties and their issues."}),"\n"]}),"\n",(0,o.jsx)(n.h1,{id:"error-handling",children:"Error handling"}),"\n",(0,o.jsx)(n.p,{children:"This section describes the possible errors that can occur when using the package, along with their codes and payload structures."}),"\n",(0,o.jsx)(n.h2,{id:"identifying-errors",children:"Identifying errors"}),"\n",(0,o.jsxs)(n.p,{children:["The package exposes a helper function called ",(0,o.jsx)(n.code,{children:"isConfigError"})," to assert what is the error that was thrown and handle it as needed."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import { config, isConfigError } from '@map-colonies/config';\n\ntry {\n  const configInstance = await config({\n    configName: 'boiler-config',\n    configServerUrl: 'http://localhost:8080',\n    schema: commonBoilerplateV4,\n    version: 'latest',\n    offlineMode: false\n  });\n  \n} catch (error) {\n  if (isConfigError(error, 'configValidationError')) {\n    console.error('Config validation error:', error.payload);\n  }\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"errors",children:"Errors"}),"\n",(0,o.jsx)(n.h3,{id:"optionvalidationerror",children:(0,o.jsx)(n.code,{children:"optionValidationError"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Code"}),": ",(0,o.jsx)(n.code,{children:"1"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Payload"}),": ",(0,o.jsx)(n.code,{children:"ValidationError[]"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Description"}),": This error occurs when there is a validation error with one of the configuration options."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"configvalidationerror",children:(0,o.jsx)(n.code,{children:"configValidationError"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Code"}),": ",(0,o.jsx)(n.code,{children:"2"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Payload"}),": ",(0,o.jsx)(n.code,{children:"ValidationError[]"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Description"}),": This error occurs when the configuration as a whole fails validation."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"httpresponseerror",children:(0,o.jsx)(n.code,{children:"httpResponseError"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Code"}),": ",(0,o.jsx)(n.code,{children:"3"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Payload"}),":\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"{\n  headers: Record<string, string>;\n  statusCode: number;\n  body: string;\n}\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Description"}),": This error occurs when an HTTP request results in an error response. The payload includes the response headers, status code and body."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"httpgeneralerror",children:(0,o.jsx)(n.code,{children:"httpGeneralError"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Code"}),": ",(0,o.jsx)(n.code,{children:"4"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Payload"}),": ",(0,o.jsx)(n.code,{children:"Error"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Description"}),": This error occurs when there is a general HTTP error. The payload contains the error object."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"schemanotfounderror",children:(0,o.jsx)(n.code,{children:"schemaNotFoundError"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Code"}),": ",(0,o.jsx)(n.code,{children:"5"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Payload"}),":\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"{\n  schemaPath: string;\n}\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Description"}),": This error occurs when the specified schema cannot be found. The payload includes the path of the missing schema."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"schemaspackageversionmismatcherror",children:(0,o.jsx)(n.code,{children:"schemasPackageVersionMismatchError"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Code"}),": ",(0,o.jsx)(n.code,{children:"6"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Payload"}),":\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"{\n  remotePackageVersion: string;\n  localPackageVersion: string;\n}\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Description"}),": This error occurs when there is a version mismatch between the remote and local schema packages. The payload includes the versions of both the remote and local packages."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"schemaversionmismatcherror",children:(0,o.jsx)(n.code,{children:"schemaVersionMismatchError"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Code"}),": ",(0,o.jsx)(n.code,{children:"7"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Payload"}),":\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"{\n  remoteSchemaVersion: string;\n  localSchemaVersion: string;\n}\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Description"}),": This error occurs when there is a version mismatch between the remote and local schemas. The payload includes the versions of both the remote and local schemas."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"promclientnotinstallederror",children:(0,o.jsx)(n.code,{children:"promClientNotInstalledError"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Code"}),": ",(0,o.jsx)(n.code,{children:"8"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Payload"}),": ",(0,o.jsx)(n.code,{children:"Error"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Description"}),": This error occurs when the ",(0,o.jsx)(n.code,{children:"prom-client"})," package is not installed. The payload contains the error object."]}),"\n"]}),"\n",(0,o.jsx)(n.h1,{id:"debugging",children:"Debugging"}),"\n",(0,o.jsxs)(n.p,{children:["If for some reason you want to debug the package you can either use the ",(0,o.jsx)(n.code,{children:"getConfigParts"})," or the ",(0,o.jsx)(n.code,{children:"getResolvedOptions"})," functions described in the API or use the more powerful debug logger."]}),"\n",(0,o.jsxs)(n.p,{children:["The package debug logger is implemented using the ",(0,o.jsx)(n.a,{href:"https://www.npmjs.com/package/debug",children:(0,o.jsx)(n.code,{children:"debug"})})," npm package and is configured using the ",(0,o.jsx)(n.code,{children:"DEBUG"})," Environment variable."]}),"\n",(0,o.jsx)(n.p,{children:"The following are the values you can configure to use the debug option."}),"\n",(0,o.jsx)(n.h3,{id:"debug",children:(0,o.jsx)(n.code,{children:"DEBUG=*"})}),"\n",(0,o.jsx)(n.p,{children:"Enables all the logs. Note that setting this option might enable debug logging of other packages."}),"\n",(0,o.jsx)(n.h3,{id:"debugmap-coloniesconfig",children:(0,o.jsx)(n.code,{children:"DEBUG=@map-colonies/config*"})}),"\n",(0,o.jsx)(n.p,{children:"Enables all the logs available in this package."}),"\n",(0,o.jsx)(n.h3,{id:"debugmap-coloniesconfigconfig",children:(0,o.jsx)(n.code,{children:"DEBUG=@map-colonies/config:config"})}),"\n",(0,o.jsx)(n.p,{children:"Enables only the logs related to the main logic of the package."}),"\n",(0,o.jsx)(n.h3,{id:"debugmap-coloniesconfigenv",children:(0,o.jsx)(n.code,{children:"DEBUG=@map-colonies/config:env"})}),"\n",(0,o.jsx)(n.p,{children:"Enables only the logs related to parsing environment variables from schemas, and retrieving them for use in the configuration."}),"\n",(0,o.jsx)(n.h3,{id:"debugmap-coloniesconfighttp",children:(0,o.jsx)(n.code,{children:"DEBUG=@map-colonies/config:http"})}),"\n",(0,o.jsxs)(n.p,{children:["Enables only the logs related to http requests to the ",(0,o.jsx)(n.code,{children:"config-server"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"debugmap-coloniesconfigoptions",children:(0,o.jsx)(n.code,{children:"DEBUG=@map-colonies/config:options"})}),"\n",(0,o.jsx)(n.p,{children:"Enables only the logs related to parsing and validation of the package initialization options."}),"\n",(0,o.jsx)(n.h3,{id:"debugmap-coloniesconfigschemas",children:(0,o.jsx)(n.code,{children:"DEBUG=@map-colonies/config:schemas"})}),"\n",(0,o.jsx)(n.p,{children:"Enables only the logs related to the retrieving of schemas."}),"\n",(0,o.jsx)(n.h3,{id:"debugmap-coloniesconfigvalidator",children:(0,o.jsx)(n.code,{children:"DEBUG=@map-colonies/config:validator"})}),"\n",(0,o.jsx)(n.p,{children:"Enables only the logs related to the validation of configurations."}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["This page was generated from a remote source. you can find it on ",(0,o.jsx)(n.a,{href:"https://github.com/MapColonies/config/blob/master/README.md",children:"https://github.com/MapColonies/config/blob/master/README.md"})]})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>l});var o=i(6540);const r={},s=o.createContext(r);function c(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);
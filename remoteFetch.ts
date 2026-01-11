import path from 'node:path';
import fs from 'node:fs';
import { PluginOptions } from '@docusaurus/types';
import { RemoteContentPluginOptions } from 'docusaurus-plugin-remote-content';
import { $, tmpdir } from 'zx';
import { TypeDocOptions } from 'typedoc';
import { PluginOptions as TypedocMarkdownOptions } from 'typedoc-plugin-markdown';
import { PluginOptions as DocusaurusTypedocOptions } from 'docusaurus-plugin-typedoc';

const DEST_BASE_FOLDER = process.cwd();

export interface GithubSource {
  type: 'github';
  name: string;
  repo: string;
  branch: string;
  documents: string[];
  targetDir: string;
  typedoc?: boolean;
}

export interface InfraPackagesSource {
  type: 'infra-packages';
  name: string;
  package: string;
  documents: string[];
  targetDir: string;
  typedoc?: boolean;
}

interface Source {
  type: 'normal';
  name: string;
  fileDownloadPath: string;
  fileLinkPath: string;
  rawLinkPath: string;
  documents: string[];
  targetDir: string;
}

function githubSourceToSource(source: GithubSource): Source {
  return {
    type: 'normal',
    name: source.name,
    fileDownloadPath: `https://raw.githubusercontent.com/${source.repo}/refs/heads/${source.branch}`,
    fileLinkPath: `https://github.com/${source.repo}/blob/${source.branch}/`,
    documents: source.documents,
    rawLinkPath: `https://github.com/${source.repo}/raw/refs/heads/${source.branch}/`,
    targetDir: source.targetDir,
  };
}

function infraPackagesSourceToSource(source: InfraPackagesSource): Source {
  return {
    type: 'normal',
    name: source.name,
    fileDownloadPath: `https://raw.githubusercontent.com/MapColonies/infra-packages/refs/heads/master/packages/${source.package}`,
    fileLinkPath: `https://github.com/MapColonies/infra-packages/blob/master/packages/${source.package}`,
    documents: source.documents,
    rawLinkPath: `https://github.com/MapColonies/infra-packages/raw/refs/heads/master/packages/${source.package}`,
    targetDir: source.targetDir,
  };
}

export const sources: (GithubSource | Source | InfraPackagesSource)[] = [
  {
    type: 'github',
    documents: ['README.md'],
    branch: 'master',
    name: 'telemetry',
    repo: 'MapColonies/telemetry',
    targetDir: 'docs/knowledge-base/packages/telemetry',
    typedoc: true,
  },
  {
    type: 'infra-packages',
    documents: ['README.md'],
    package: 'error-express-handler',
    name: 'error-express-handler',
    targetDir: 'docs/knowledge-base/packages/error-express-handler',
    typedoc: true,
  },
  {
    type: 'infra-packages',
    documents: ['README.md'],
    package: 'eslint-config',
    name: 'eslint-config',
    targetDir: 'docs/knowledge-base/packages/eslint-config',
  },
  {
    type: 'infra-packages',
    documents: ['README.md'],
    package: 'express-access-log-middleware',
    name: 'express-access-log-middleware',
    targetDir: 'docs/knowledge-base/packages/express-access-log-middleware',
    typedoc: true,
  },
  {
    type: 'github',
    documents: ['README.md'],
    branch: 'master',
    name: 'js-logger',
    repo: 'MapColonies/js-logger',
    targetDir: 'docs/knowledge-base/packages/js-logger',
    typedoc: true,
  },
  {
    type: 'github',
    documents: ['README.md'],
    branch: 'master',
    name: 'openapi-express-viewer',
    repo: 'MapColonies/openapi-express-viewer',
    targetDir: 'docs/knowledge-base/packages/openapi-express-viewer',
    typedoc: true,
  },
  {
    type: 'infra-packages',
    documents: ['README.md'],
    package: 'prettier-config',
    name: 'prettier-config',
    targetDir: 'docs/knowledge-base/packages/prettier-config',
  },
  {
    type: 'github',
    documents: ['README.md'],
    branch: 'master',
    name: 'read-pkg',
    repo: 'MapColonies/read-pkg',
    targetDir: 'docs/knowledge-base/packages/read-pkg',
    typedoc: true,
  },
  {
    type: 'github',
    documents: ['README.md'],
    branch: 'master',
    name: 'config',
    repo: 'MapColonies/config',
    targetDir: 'docs/knowledge-base/packages/config',
    typedoc: true,
  },
  {
    type: 'infra-packages',
    documents: ['README.md'],
    package: 'typescript-config',
    name: 'typescript-config',
    targetDir: 'docs/knowledge-base/packages/typescript-config',
  },
  {
    type: 'github',
    documents: ['README.md'],
    branch: 'master',
    name: 'openapi-helpers',
    repo: 'MapColonies/openapi-helpers',
    targetDir: 'docs/knowledge-base/packages/openapi-helpers',
    typedoc: true,
  },
  {
    type: 'infra-packages',
    documents: ['README.md'],
    package: 'commitlint-config',
    name: 'commitlint-config',
    targetDir: 'docs/knowledge-base/packages/commitlint-config',
    typedoc: false,
  },
  {
    type: 'github',
    documents: ['README.md'],
    branch: 'master',
    name: 'jobnik-sdk',
    repo: 'MapColonies/jobnik-sdk',
    targetDir: 'docs/knowledge-base/packages/jobnik-sdk',
    typedoc: true,
  },
  {
    type: 'github',
    documents: ['README.md'],
    branch: 'master',
    name: 'jobnik-worker-boilerplate',
    repo: 'MapColonies/jobnik-worker-boilerplate',
    targetDir: 'docs/knowledge-base/jobnik/boilerplate',
    typedoc: false,
  },
];

type ModifyContent = (
  filename: string,
  content: string
) =>
  | {
      filename?: string;
      content?: string;
    }
  | undefined;

function modifyContentBuilder(source: Source): ModifyContent {
  return (filename, content) => {
    // const regex = /(?=\[(!\[.+?\]\(.+?\)|.+?)]\((?!https:\/\/)([^\)]+)\))/gi;

    const imageRegex = /!\[(!\[.+?\]\(.+?\)|.+?)]\((?!https?:\/\/)([^\)]+)\)/gi;

    const imageLinks = [...content.matchAll(imageRegex)].map((m) => ({
      // text: m[1],
      link: m[2],
      url: new URL(m[2], source.rawLinkPath).href,
    }));

    for (const { link, url } of imageLinks) {
      content = content.replace(link, url);
    }

    const linksRegex = /\[(!\[.+?\]\(.+?\)|.+?)]\((?!https?:\/\/)([^\)]+)\)/gi;
    const links = [...content.matchAll(linksRegex)].map((m) => ({
      // text: m[1],
      link: m[2],
      url: new URL(m[2], source.fileLinkPath).href,
    }));

    for (const { link, url } of links) {
      content = content.replace(link, url);
    }

    content =
      '---\ncustom_edit_url: null\n---\n' +
      content +
      `:::note\nThis page was generated from a remote source. you can find it on ${new URL(filename, source.fileLinkPath)}\n:::`;

    return { filename, content };
  };
}

export function remotePluginGenerator(): [string, PluginOptions][] {
  const processedSources = sources.map((source) => {
    if (source.type === 'github') {
      return githubSourceToSource(source);
    }
    if (source.type === 'infra-packages') {
      return infraPackagesSourceToSource(source);
    }
    return source;
  });
  return processedSources.map((source): [string, RemoteContentPluginOptions & PluginOptions] => {
    return [
      'docusaurus-plugin-remote-content',
      {
        name: source.name,
        documents: source.documents,
        outDir: source.targetDir,
        sourceBaseUrl: source.fileDownloadPath,
        modifyContent: modifyContentBuilder(source),
      },
    ];
  });
}
// plugins: [["docusaurus-plugin-remote-content", {name: 'telemetry', sourceBaseUrl: 'https://raw.githubusercontent.com/MapColonies/telemetry/refs/heads/master', outDir: 'docs/telemetry', documents: ['README.md']}]],

const baseTypedocOptions: Partial<TypeDocOptions & TypedocMarkdownOptions & DocusaurusTypedocOptions> = {
  readme: 'none',
  hidePageTitle: false,
  outputFileStrategy: 'members',
  cleanOutputDir: true,
  hidePageHeader: false,
};

export async function typedocPluginGenerator(): Promise<[string, PluginOptions][]> {
  const typedocSources = sources.filter(
    (source): source is GithubSource | InfraPackagesSource => (source.type === 'github' || source.type === 'infra-packages') && source.typedoc
  );
  const tempDir = tmpdir('typedoc');

  const infraPackagesDir = await cloneGithubRepo(tempDir, { repo: 'MapColonies/infra-packages', branch: 'master', name: 'infra-packages' }, true);

  const plugins: [string, PluginOptions][] = [];

  for (const source of typedocSources) {
    let destDir = '';
    if (source.type === 'github') {
      destDir = await cloneGithubRepo(tempDir, source);
    } else if (source.type === 'infra-packages') {
      destDir = path.join(infraPackagesDir, 'packages', source.package);
    }
    const possibleTypedocConfigs = ['typedoc.config.js', 'typedoc.json'];

    let extraConfig: Partial<TypeDocOptions & TypedocMarkdownOptions & DocusaurusTypedocOptions & { processedEntryPoints?: boolean }> = {};
    possibleTypedocConfigs.forEach((fileName) => {
      const configPath = path.join(destDir, fileName);
      const doesConfigPathExists = fs.existsSync(configPath);

      if (doesConfigPathExists) {
        extraConfig = require(configPath);

        if (!extraConfig.processedEntryPoints) {
          extraConfig.processedEntryPoints = true;
          if (extraConfig.entryPoints && Array.isArray(extraConfig.entryPoints)) {
            extraConfig.entryPoints = extraConfig.entryPoints.map((entry: string) => path.join(destDir, entry));
          }
        }
      }
    });

    const { processedEntryPoints, ...extraConfigWithoutFlag } = extraConfig;
    plugins.push([
      'docusaurus-plugin-typedoc',
      {
        id: source.name,
        entryPoints: [path.join(destDir, 'src', 'index.ts')],
        ...baseTypedocOptions,
        ...extraConfigWithoutFlag,
        tsconfig: path.join(destDir, 'tsconfig.build.json'),
        basePath: path.join(destDir, 'src'),
        out: path.join(DEST_BASE_FOLDER, source.targetDir, 'typedoc'),
      },
    ]);
  }
  return plugins;
}
async function cloneGithubRepo(tempDir: string, source: { repo: string; branch: string; name: string }, pnpm?: boolean): Promise<string> {
  const destDir = path.join(tempDir, source.name);
  if (!fs.existsSync(destDir)) {
    await $({ cwd: tempDir })`git clone --depth 1 --branch ${source.branch} https://github.com/${source.repo}.git `;
  }
  if (pnpm) {
    await $({ cwd: destDir })`pnpm install --loglevel error`;
  } else {
    await $({ cwd: destDir })`npm ci --ignore-scripts --loglevel error --omit=""`;
  }
  return destDir;
}

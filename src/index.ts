export interface Options {
    URL_BROWSER: string;
    FILE_DIR: string;
    PDF_DIR: string;
    TEMPLATE_DIR: string;
    BROWSER_NAME?: string;
    PORT: number;
    printingMarginTop?: string | number;
    printingMarginBottom?: string | number;
    printingMarginLeft?: string | number;
    printingMarginRight?: string | number;
    libs: Array<string>;
    pdfMergerDelegator?: PdfMergerDelegator;
};

export interface ParamData {
    $templateName: string,
    $parameters: any,
    $extraParams?: ExtraParamData
};

export interface PdfMergerDelegator {
    getPdfTotalPages: (pdfBuffer: Buffer) => Promise<number>;
    merge: (pdfList: Array<Buffer>) => Promise<Buffer>;
};

export interface ExtraParamData {
    [key: string]: any;
    orientation?: string;
    preview?: boolean;
    previewHTML?: boolean;
};
export interface PDFGeneratorResult {
    fileName: string;
    totalPages: number;
    buffer: Buffer | Array<Buffer>;
    templateType: 'application/pdf' | 'text/html' | 'array/pdf';
};
export interface PDFGenerator {
    processTemplate: (data: ParamData) => Promise<PDFGeneratorResult>;
    dispose: () => Promise<void>;
};

import { useEffect } from "react";

const SEO = ({
    title,
    description,
    canonical,
}) => {
    useEffect(() => {
        // Page title
        document.title = title;

        // Description
        let descriptionTag = document.querySelector(
            'meta[name="description"]'
        );

        if (!descriptionTag) {
            descriptionTag = document.createElement("meta");
            descriptionTag.setAttribute("name", "description");
            document.head.appendChild(descriptionTag);
        }

        descriptionTag.setAttribute("content", description);

        // Canonical URL
        let canonicalTag = document.querySelector(
            'link[rel="canonical"]'
        );

        if (!canonicalTag) {
            canonicalTag = document.createElement("link");
            canonicalTag.setAttribute("rel", "canonical");
            document.head.appendChild(canonicalTag);
        }

        canonicalTag.setAttribute("href", canonical);

        // Open Graph Title
        let ogTitle = document.querySelector(
            'meta[property="og:title"]'
        );

        if (!ogTitle) {
            ogTitle = document.createElement("meta");
            ogTitle.setAttribute("property", "og:title");
            document.head.appendChild(ogTitle);
        }

        ogTitle.setAttribute("content", title);

        // Open Graph Description
        let ogDescription = document.querySelector(
            'meta[property="og:description"]'
        );

        if (!ogDescription) {
            ogDescription = document.createElement("meta");
            ogDescription.setAttribute(
                "property",
                "og:description"
            );
            document.head.appendChild(ogDescription);
        }

        ogDescription.setAttribute("content", description);

        // Open Graph URL
        let ogUrl = document.querySelector(
            'meta[property="og:url"]'
        );

        if (!ogUrl) {
            ogUrl = document.createElement("meta");
            ogUrl.setAttribute("property", "og:url");
            document.head.appendChild(ogUrl);
        }

        ogUrl.setAttribute("content", canonical);
    }, [title, description, canonical]);

    return null;
};

export default SEO;
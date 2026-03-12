/**
 * Publications data for Olga Zaghen's academic website.
 *
 * To add a new publication, insert a new object at the top of the array
 * (newest first). Follow this format:
 *
 * {
 *   title:    "Full paper title",
 *   authors:  "Author 1, <strong>Olga Zaghen</strong>, Author 3, ...",
 *             // Use <strong> to bold your name
 *             // Use * after a name to mark equal contribution
 *   venue:    "Conference / Journal name with year",
 *   url:      "https://arxiv.org/abs/...",   // link to paper
 *   year:     "2025",                        // submission / arxiv year
 *   highlight: "Spotlight" | "Oral" | "Under review" | null
 * }
 */

const publications = [
    {
        title: "Graph Homomorphism Distortion: A Metric to Distinguish Them All and in the Latent Space Bind Them",
        authors: "Martin Carrasco*, <strong>Olga Zaghen*</strong>, Kavir Sumaraj, Erik Bekkers, Bastian Rieck",
        venue: "Under review",
        url: "https://arxiv.org/abs/2511.03068",
        year: "2025",
        highlight: "Under review"
    },
    {
        title: "Riemannian Variational Flow Matching for Material and Protein Design",
        authors: "<strong>Olga Zaghen</strong>, Floor Eijkelboom*, Alison Pouplin*, Cong Liu, Max Welling, Jan-Willem van de Meent, Erik J. Bekkers",
        venue: "ICLR 2026",
        url: "https://arxiv.org/abs/2502.12981v2",
        year: "2025",
        highlight: null
    },
    {
        title: "Towards Variational Flow Matching on General Geometries",
        authors: "<strong>Olga Zaghen</strong>, Floor Eijkelboom, Alison Pouplin, Erik J. Bekkers",
        venue: "ICLR 2025 DeLTa Workshop",
        url: "https://arxiv.org/abs/2502.12981v1",
        year: "2025",
        highlight: "Oral"
    },
    {
        title: "Graph Discrete Diffusion: a Spectral Study",
        authors: "<strong>Olga Zaghen</strong>, Manuel Madeira, Laura Toni, Pascal Frossard",
        venue: "ICLR 2025 DeLTa Workshop &amp; XAI4Science Workshop",
        url: "https://openreview.net/forum?id=vPx5855q0L",
        year: "2025",
        highlight: null
    },
    {
        title: "Revisiting Random Walks for Learning on Graphs",
        authors: "Jinwoo Kim, <strong>Olga Zaghen*</strong>, Ayhan Suleymanzade*, Youngmin Ryou, Seunghoon Hong",
        venue: "ICLR 2025",
        url: "https://arxiv.org/abs/2407.01214",
        year: "2024",
        highlight: "Spotlight"
    },
    {
        title: "Sheaf Diffusion Goes Nonlinear: Enhancing GNNs with Adaptive Sheaf Laplacians",
        authors: "<strong>Olga Zaghen</strong>, Antonio Longa, Steve Azzolin, Lev Telyatnikov, Andrea Passerini, Pietro Liò",
        venue: "ICML 2024 GRaM Workshop",
        url: "https://openreview.net/forum?id=MGQtGV5gPO",
        year: "2024",
        highlight: null
    },
    {
        title: "TopoX: A Suite of Python Packages for Machine Learning on Topological Domains",
        authors: "Mustafa Hajij et al.",
        venue: "JMLR",
        url: "https://arxiv.org/abs/2402.02441",
        year: "2024",
        highlight: null
    }
];

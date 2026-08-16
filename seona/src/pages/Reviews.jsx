import { useEffect, useState } from "react";
import { useApp } from "../context/AppContext";
import { apiPost, formatDate } from "../api";
import Stars from "../components/Stars";

export default function Reviews() {
  const { products, reviews, currentUser, openAuthModal, toast, reloadReviews, navigate } = useApp();

  const [productId, setProductId] = useState("");
  const [reviewerName, setReviewerName] = useState(currentUser ? currentUser.name : "");
  const [pickedRating, setPickedRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (currentUser && !reviewerName) setReviewerName(currentUser.name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  async function submitReview(e) {
    e.preventDefault();
    if (!currentUser) {
      toast("Please log in", "You need an account to submit a review.", "error");
      openAuthModal("login");
      return;
    }
    const pid = parseInt(productId);
    const name = reviewerName.trim();
    if (!pid || !name) return;

    setSubmitting(true);
    try {
      const res = await apiPost("/reviews.php", {
        productId: pid,
        reviewerName: name,
        rating: pickedRating,
        title: title.trim(),
        body: body.trim(),
      });
      if (!res.ok) throw new Error("Request failed");

      await reloadReviews();
      toast("Review submitted", "Thank you for your feedback!");
      setProductId("");
      setTitle("");
      setBody("");
      setPickedRating(5);
    } catch {
      toast("Couldn't submit review", "Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  const displayRating = hoverRating || pickedRating;

  return (
    <div id="page-review" className="page active">
      <div className="container" style={{ paddingTop: "3rem", paddingBottom: "5rem" }}>
        <div className="section-head">
          <div className="section-title">Customer Reviews</div>
          <p style={{ color: "var(--muted-fg)", maxWidth: "500px", margin: "0 auto", fontSize: "0.9rem" }}>
            Read what our community has to say about their favorite products.
          </p>
        </div>
        <div className="review-page-layout">
          <div className="review-form-col">
            <div className="form-box">
              <h3>Write a Review</h3>
              <form onSubmit={submitReview}>
                <div className="form-field">
                  <label className="form-label">Product *</label>
                  <select className="form-select" required value={productId} onChange={(e) => setProductId(e.target.value)}>
                    <option value="">Select a product</option>
                    {products.map((p) => (
                      <option key={p.id} value={p.id}>{p.name}</option>
                    ))}
                  </select>
                </div>
                <div className="form-field">
                  <label className="form-label">Name *</label>
                  <input className="form-input" required value={reviewerName} onChange={(e) => setReviewerName(e.target.value)} />
                </div>
                <div className="form-field">
                  <label className="form-label">Rating *</label>
                  <div className="star-picker" onMouseLeave={() => setHoverRating(0)}>
                    {[1, 2, 3, 4, 5].map((v) => (
                      <span
                        key={v}
                        className={`star-pick ${v <= displayRating ? "on" : ""}`}
                        onClick={() => setPickedRating(v)}
                        onMouseOver={() => setHoverRating(v)}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <div className="form-field">
                  <label className="form-label">Review Title</label>
                  <input className="form-input" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="form-field">
                  <label className="form-label">Review Body</label>
                  <textarea className="form-textarea" rows="4" value={body} onChange={(e) => setBody(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary w-full btn-sq" style={{ borderRadius: "var(--radius)" }} disabled={submitting}>
                  SUBMIT REVIEW
                </button>
              </form>
            </div>
          </div>

          <div className="review-list-col">
            {reviews.length > 0 ? (
              reviews.map((r) => <ReviewItem key={r.id} r={r} products={products} navigate={navigate} />)
            ) : (
              <div className="empty-state"><h3>No reviews yet</h3><p>Be the first to share your thoughts.</p></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ReviewItem({ r, products, navigate }) {
  const p = products.find((x) => x.id === r.productId);
  return (
    <div className="review-item">
      <div className="review-header">
        <div>
          {p && <div style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "0.25rem" }}>{p.name}</div>}
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span className="reviewer-name">{r.reviewerName}</span>
            <span className="review-date">• {formatDate(r.createdAt)}</span>
          </div>
        </div>
        <div><Stars rating={r.rating} /></div>
      </div>
      {r.title && <div className="review-title">{r.title}</div>}
      {r.body && <div className="review-body">{r.body}</div>}
      {p && (
        <div style={{ marginTop: "1rem" }}>
          <span style={{ fontSize: "0.85rem", color: "var(--primary)", cursor: "pointer" }} onClick={() => navigate("product", { id: p.id })}>
            View Product →
          </span>
        </div>
      )}
    </div>
  );
}
